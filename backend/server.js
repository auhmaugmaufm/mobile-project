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
    FOREIGN KEY (id_carType) REFERENCES CarType(id)
)`);

db.run(`CREATE TABLE IF NOT EXISTS BookingHistory(
    id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
    id_BoardingPass INTEGER,
    id_User INTEGER,
    id_seat TEXT,
    FOREIGN KEY (id_BoardingPass) REFERENCES BoardingPass(id),
    FOREIGN KEY (id_User) REFERENCES Users(id)
)`);

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
    console.log("POST: ",phoneNumber, password)
    db.get(
        `SELECT * FROM Users WHERE phoneNumber = ?`, [phoneNumber],
        async (err , user) => {
            if(err) return res.status(400).send({ message: 'Wrong Phone Number or Password!' })
            if (!user || !(await bcrypt.compare(password, user.password))) {
                return res.status(400).send({message: 'Invalid Credential'})
            }
            const token = jwt.sign({ userId: user.id }, 'secretkey')
            res.send({token})
        }
        
    )
})

app.listen(5000, () => console.log("Server running on port 5000"))