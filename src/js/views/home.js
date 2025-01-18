
import React, { useState, useEffect} from "react";
import CardCharacter from "../component/cardCharacter.jsx";

export const Home = () => {

	const [ characters, setCharacters] = useState([])

	const loadCharacters = async () => {
		const resp = await fetch("https://dragonball-api.com/api/characters")
		const data = await resp.json()
		setCharacters(data.items);
	}

	useEffect(()=>{
		loadCharacters();
	}, [])

	return <div className="text-center mt-5">
		<h1>DragonBall API</h1>
		<p className="px-2">
			<img src="https://web.dragonball-api.com/images-compress/logo_dragonballapi.webp"
				style={{ maxHeight: '150px', width: 'auto'}}
			/>
		</p>

		<div className="d-flex flex-wrap">
			{
				characters && 
				characters.map( personaje => <CardCharacter key={personaje.id} character={personaje} />)
			}
		</div>


	</div>
};
