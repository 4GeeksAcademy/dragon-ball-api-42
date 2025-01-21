import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


const CharacterDetails = () => {

    const { store, actions } = useContext(Context);

    const { id } = useParams();

    const navigate = useNavigate() 

    const [ characterInfo, setCharacterInfo ] = useState()

    const loadCharacterInfo = async () => {
        const resp = await fetch(`https://dragonball-api.com/api/characters/${id}`)
        const data = await resp.json()
        setCharacterInfo(data)
    }

    useEffect(()=>{
        loadCharacterInfo()

    }, [id]) // <-- se ejecuta cada que cambia el id

    const isSelected = store.favorites.find(item => item.name == characterInfo?.name)

    return <div className="d-flex flex-column justify-content-center align-items-center">
        <h1>Character: {characterInfo && characterInfo.name}</h1>
        <img className="" src={characterInfo && characterInfo.image}
            style={{ maxHeight: '180px', width: 'auto'}} />
        <ul>
            {
                characterInfo && characterInfo.transformations
                    .map( transform => (<div key={'id-transform-'+transform.id} 
                            className="d-flex flex-column justify-content-center align-items-center"
                        >
                        <h1>Character: {transform.name}</h1>
                        <img className="mx-auto" src={transform.image}
                            style={{ maxHeight: '180px', width: 'auto'}}
                        />
                    </div>
                )) 
            }
        </ul>
        <div className="d-flex justify-content-center align-items-center">
            <button className="btn btn-primary mx-1" onClick={() => {
                if(id > 1){
                    navigate(`/character/${parseInt(id)-1}`)}
                }
            }>
                Previous
            </button>
            <button className="btn btn-danger mx-1"
			    onClick={() =>  !isSelected ? actions.addFavorite(characterInfo) : actions.removeFavorite(characterInfo)}
            >
                <i className={ store.favorites &&
                    (isSelected ? "fa-solid fa-heart" : "fa-regular fa-heart")}>
                </i>
            </button>
            <button className="btn btn-primary mx-1" onClick={() => navigate(`/character/${parseInt(id)+1}`)}>
                Next
            </button>
        </div>
    </div>
}

export default CharacterDetails;