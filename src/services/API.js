import React from 'react';
import axios from "axios";

export const getRoom = async (roomName) => {
    return (
        await axios.get("http://localhost:9000/rooms?roomName=" + roomName).then((res) => {
            return res

        }).catch((e) => {
            alert(e)
        })
    )
}


