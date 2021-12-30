import { useEffect } from "react";
import { useState } from 'react'
import styles from '../styles/component.module.css'

const Char = ({ character }) => {

    // const getChars = async (character) => {
    //     const char = await fetch(`${character}`)
    //         .then(res => res.json())

    // }
    const [char, setChar] = useState()
    const [show, setShow] = useState(false)
    useEffect(() => {
        async function fetchMyAPI() {
            let response = await fetch(`${character}`)
            response = await response.json()
            setChar(response)
        }

        fetchMyAPI()
    }, [])
    console.log(char)
    return (
        <div>
            <div className={styles.details} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} >
                {char && (
                    <p >{char.name} </p>

                )}
            </div>
            <div className={styles.characterDetails}>
                {show && (
                    <div className={styles.detailContainer}>
                        <ul className={styles.list}>
                            <li><b>{char.name}</b></li>
                            <li>Birth Year: {char.birth_year}</li>
                            <li>Eye color: {char.eye_color}</li>
                            <li>Gender: {char.gender}</li>
                            <li>height: {char.height}</li>
                            <li>mass: {char.mass}</li>
                            <li>Skin color: {char.skin_color}</li>
                        </ul>
                    </div>
                )}
            </div>

        </div>


    );
}

export default Char;