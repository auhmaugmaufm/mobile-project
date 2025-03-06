import React, { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Seat = () => {

    const [color, setColor] = useState('black')

    return (
        <TouchableOpacity onPress={()=>setColor(color==='black' ? 'red': 'black') }>
            <MaterialIcons name="check-box-outline-blank" size={60} color={color} />
        </TouchableOpacity>
    )
}

export default Seat
