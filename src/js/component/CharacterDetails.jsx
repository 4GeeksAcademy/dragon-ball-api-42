import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CharacterDetails = () => {

    const { id } = useParams();

    const [ characterInfo, setCharacterInfo ] = useState()

    const loadCharacterInfo = async () => {
        const resp = await fetch(`https://dragonball-api.com/api/characters/${id}`)
        const data = await resp.json()
        setCharacterInfo(data)
    }

    useEffect(()=>{
        loadCharacterInfo()
    }, [])

    return <>
        <h1>Character: {characterInfo && characterInfo.name}</h1>
        <img src={characterInfo && characterInfo.image} style={{ maxHeight: '180px', width: 'auto'}} />
        <ul>
            {
                characterInfo && characterInfo.transformations.map( transform => (<div key={'id-transform-'+transform.id}>
                    <h1>Character: {transform.name}</h1>
                    <img src={transform.image} style={{ maxHeight: '180px', width: 'auto'}} />
                    </div>
                )) 
            }
        </ul>
    </>
}

export default CharacterDetails;