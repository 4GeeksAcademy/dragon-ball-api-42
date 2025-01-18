
import React, { useContext } from "react";
import CardCharacter from "../component/cardCharacter.jsx";
import { Context } from "../store/appContext.js"


export const Home = () => {

	const { store , actions } = useContext(Context);

	return <div className="text-center mt-5">
		<h1>DragonBall API</h1>
		<p className="px-2">
			<img src="https://web.dragonball-api.com/images-compress/logo_dragonballapi.webp"
				style={{ maxHeight: '150px', width: 'auto'}}
			/>
		</p>

		<div className="d-flex flex-wrap">
			{
				store.characters && 
				store.characters.map( personaje => <CardCharacter key={personaje.id} character={personaje} />)
			}
		</div>


	</div>
};
