import React, { useState, useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const idRef = useRef(null);



    const [value, setValue] = useState("");
    const [copyText, setCopyText] = useState("Copy")

    const halndleJoinRoom = useCallback(() => {
        navigate(`/room/${value}`);
    }, [navigate, value])

    const roomIdGerenator = () => {

        let id = "";

        let str_no = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 1; i <= 8; i++) {
            let char = Math.floor(Math.random() * str_no.length + 1);
            id += str_no.charAt(char);
        }
        setValue(id);
        setCopyText("Copy");
    }

    const copyPasswordToClipBoard = useCallback(() => {

        setCopyText("Copied");

        idRef.current?.select();
        idRef.current?.setSelectionRange(0, 99)
        window.navigator.clipboard.writeText(value)
    }, [value, setCopyText])


    return (
        <div className='home'>
            <input value={value} onChange={e => setValue(e.target.value)} type='text' placeholder='Enter Room Code' />
            {
                value ?
                    <>
                        <button
                            onClick={copyPasswordToClipBoard}
                            className='copyButton'
                        >{copyText}</button>
                        <button onClick={halndleJoinRoom}>Join</button>
                    </>
                    : <></>
            }


            <button onClick={roomIdGerenator}>Generate RoomID</button>
        </div>
    )
}

export default Home