const express = require('express')
const sqlite3 = require('sqlite3').verbose()
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")

const app = express()
app.use(express.json())

const db = new sqlite3.Database("./DB.db", (err) => {
    if (err) console.error(err.message)
    console.log('Connected to Sqlite DB');
})

db.run(`CREATE TABLE IF NOT EXISTS Users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    password TEXT,
    phoneNumber TEXT UNIQUE
)`);

db.run(`CREATE TABLE IF NOT EXISTS CarType(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT UNIQUE,
    seat TEXT
)`);

db.run(`CREATE TABLE IF NOT EXISTS BoardingPass(
    id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
    start TEXT,
    end TEXT,
    date DATE,
    time TIME,
    status TEXT,
    id_carType INTEGER,
    Cost INTEGER,
    FOREIGN KEY (id_carType) REFERENCES CarType(id)
)`);

db.run(`CREATE TABLE IF NOT EXISTS BookingHistory(
    id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
    id_BoardingPass INTEGER,
    id_User INTEGER,
    numberOfSeats INTEGER,
    FOREIGN KEY (id_BoardingPass) REFERENCES BoardingPass(id),
    FOREIGN KEY (id_User) REFERENCES Users(id)
)`)

// db.run(`DROP TABLE BookingHistory`)

db.run("PRAGMA foreign_keys = ON"); // เพิ่มการเชื่อม foreign key

app.post('/signup', async (req, res) => {
    const { name, password, phoneNumber } = req.body
    const encryptedPassword = await bcrypt.hash(password, 10)
    console.log("POST: ", name, password, phoneNumber)

    db.run(
        `INSERT INTO Users (name, password, phoneNumber) VALUES (?, ?, ?)`,
        [name, encryptedPassword, phoneNumber],
        function (error) {
            if (error) return res.status(400).send({ message: 'User already exists' })
            res.send({ message: 'User registered' })
        }
    )
})

app.post('/login', async (req, res) => {
    const { phoneNumber, password } = req.body
    console.log("POST: ", phoneNumber, password)
    db.get(
        `SELECT * FROM Users WHERE phoneNumber = ?`, [phoneNumber],
        async (err, user) => {
            if (err) return res.status(400).send({ message: 'Wrong Phone Number or Password' })
            if (!user || !(await bcrypt.compare(password, user.password))) {
                return res.status(400).send({ message: 'Invalid Credential' })
            }
            const token = jwt.sign({ userId: user.id }, 'secretkey')
            res.send({ token, userId: user.id, userName: user.name })
        }

    )
})

app.get('/Users', async (req, res) => {
    db.all(
        `SELECT * FROM Users`,
        (err, data) => {
            if (err) return res.status(500).send({ message: 'Something Wrong' })
            if (!data || data.length === 0) return res.status(404).send({ message: 'Data Not Found' })
            res.send(data)
        }
    )
})

app.put('/Users/:id', async (req, res) => {
    const { id } = req.params;
    const { phoneNumber, password } = req.body
    console.log("PUT: ", id, phoneNumber)
    db.get(
        `SELECT * FROM Users WHERE id = ?`, [id],
        async (err, user) => {
            if (err) return res.status(500).send({ message: 'Something Wrong' })
            if (!(await bcrypt.compare(password, user.password))) {
                return res.status(404).send({ message: 'Incorrect Password' })
            }
            db.run(
                `UPDATE Users SET phoneNumber = ? WHERE id = ?`, [phoneNumber, id],
                (err) => {
                    if (err) return res.status(500).send({ message: 'Phone Number already exists' })
                    res.send({ message: 'Update Succesfully!' })
                }
            )
        })
})

app.put('/user/edit-password/:id', async (req, res) => {
    const { id } = req.params;
    const { password, newPassword } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10)
    console.log("PUT: ", id, password, newPassword)
    db.get(
        `SELECT * FROM Users WHERE id = ?`, [id],
        async (err, user) => {
            if (err) return res.status(500).send({ message: 'Something Wrong' })
            if (!(await bcrypt.compare(password, user.password))) {
                return res.status(404).send({ message: 'Incorrect Password' })
            }
            db.run(
                `UPDATE Users SET password = ? WHERE id = ?`, [encryptedPassword, id],
                (err) => {
                    if (err) return res.status(500).send({ message: 'Phone Number already exists' })
                    res.send({ message: 'Update Succesfully!' })
                }
            )
        })
})



app.get('/boardingpass', async (req, res) => {
    db.all(
        `SELECT BoardingPass.* , CarType.type FROM BoardingPass LEFT JOIN CarType ON BoardingPass.id_carType=CarType.id`,
        (err, data) => {
            if (err) return res.status(500).send({ message: 'Something Wrong' })
            if (!data || data.length === 0) return res.status(404).send({ message: 'Data not found' })
            res.send(data)
        }
    )
})

app.post('/cartype', async (req, res) => {
    const { type, seat } = req.body
    db.run(
        `INSERT INTO CarType (type, seat) VALUES (?, ?)`,
        [type, seat],
        function (error) {
            if (error) return res.status(400).send({ message: 'Data already exists' })
            res.send({ message: 'Data registered' })
        }
    )
})

// เพิ่มข้อมูลที่ละแถว
// app.post('/boardingpass', async (req, res) => {
//     const { start, end, date, time, status, id_carType } = req.body
//     db.run(
//         `INSERT INTO BoardingPass (start, end, date, time, status, id_carType) VALUES (?, ?, ?, ?, ?, ?)`,
//         [start, end, date, time, status, id_carType],
//         function (error) {
//             if (error) return res.status(400).send({ message: 'Data already exists' })
//             res.send({ message: 'Data registered' })
//         }
//     )
// })

app.post('/boardingpass', async (req, res) => {
    const data = req.body
    console.log(data);
    const s = data.map(() => `(?, ?, ?, ?, ?, ?, ?)`).join(', ')
    const values = data.flatMap(bp => [bp.start, bp.end, bp.date, bp.time, bp.status, bp.id_carType, bp.Cost])

    db.run(
        `INSERT INTO BoardingPass (start, end, date, time, status, id_carType, Cost) VALUES ${s}`, values,
        function (error) {
            if (error) return res.status(400).send({ message: 'Data already exists' })
            res.send({ message: 'Data registered' })
        }
    )

})

app.post('/bookinghistory', async (req, res) => {
    const { id_boardingPass, userId, numberOfSeats } = req.body
    console.log('POST: booking', id_boardingPass, userId, numberOfSeats);

    db.run(
        `INSERT INTO BookingHistory (id_BoardingPass, id_User, numberOfSeats) VALUES (?, ?, ?)`,
        [id_boardingPass, userId, numberOfSeats],
        function (error) {
            if (error) return res.status(400).send({ message: 'Seat already exists' })
            res.send({ message: 'Seat registered' })
        }
    )
})


app.get('/bookinghistory', async (req, res) => {
    db.all(
        `SELECT * FROM BookingHistory`,
        (err, data) => {
            if (err) return res.status(500).send({ message: 'Something Wrong' })
            if (!data || data.length === 0) return res.status(404).send({ message: 'Data not found' })
            res.send(data)
        }
    )
})

app.get('/bookinghistory/:id', async (req, res) => {
    const { id } = req.params
    db.all(
        `SELECT 
            BookingHistory.*,
            BoardingPass.start,
			BoardingPass.end,
			BoardingPass.date,
			BoardingPass.time,
            Users.name, 
            Users.phoneNumber,
            CarType.type AS carType
        FROM 
            BookingHistory
        LEFT JOIN Users 
            ON BookingHistory.id_User = Users.id
        LEFT JOIN BoardingPass 
            ON BookingHistory.id_BoardingPass = BoardingPass.id
        LEFT JOIN CarType 
            ON BoardingPass.id_carType = CarType.id
        WHERE Users.id = ?
        ORDER BY BookingHistory.id DESC`, [id],
        (err, data) => {
            if (err) return res.status(500).send({ message: 'Something Wrong' })
            if (!data || data.length === 0) return res.status(404).send({ message: 'Data not found' })
            res.send(data)
        }
    )
})

app.get('/boardingpass/:id/seatleft', async (req, res) => {
    const { id } = req.params
    console.log('GET: ', id);
    db.all(
        `SELECT CarType.seat, SUM(numberOfSeats) AS totalSeat FROM BoardingPass 
        LEFT JOIN BookingHistory ON BookingHistory.id_BoardingPass = BoardingPass.id
        LEFT JOIN CarType ON BoardingPass.id_carType = CarType.id
        WHERE BoardingPass.id = ?`, [id],
        (err, data) => {
            if (err) return res.status(500).send({ message: 'Something Wrong' })
            if (!data) return res.status(404).send({ message: 'Data not found' })
            res.send(data[0])
        }
    )

})

app.put('/boardingpass/edit-status/:id', async (req, res) => {
    const { id } = req.params
    console.log('PUT: edit status boarding pass id ', id);
    db.get(
        `SELECT * FROM BoardingPass WHERE id = ?`, [id],
        async (err, data) => {
            if (err) return res.status(500).send({ message: 'Something Wrong' })
            if (!data) return res.status(404).send({ message: 'Data not found' })
            db.run(
                `UPDATE BoardingPass SET status = "Closed" WHERE id = ?`, [id],
                (err) => {
                    if (err) return res.status(500).send({ message: 'Update Failed' })
                    res.send({ message: 'Update Succesfully!' })
                }
            )
        })
})


app.listen(5000, () => console.log("Server running on port 5000"))