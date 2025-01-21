import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardCharacter = ({ character }) => {

	const { store, actions } = useContext(Context);

	const isSelected = store.favorites.find( item => item.name == character.name);

	return <div className="p-2 col-12 col-sm-6 col-md-4 col-lg-3">
		<div className="card">
		<img src={character.image} className="card-img-top" 
			alt={character.name + '-image'}
			style={{ maxHeight: '150px', width: 'auto', objectFit: 'contain'}}
		/>
		<div className="card-body">
		<h5 className="card-title">{character.name}</h5>
		<p className="card-text text-truncate">{character.description}.</p>
		<Link to={"/character/"+character.id} className="btn btn-primary">Transformations</Link>
		<button className="btn btn-danger mx-1"
			onClick={() =>  !isSelected ? actions.addFavorite(character) : actions.removeFavorite(character)}
		>
			<i className={ store.favorites &&
				(isSelected ? "fa-solid fa-heart" : "fa-regular fa-heart")}>
			</i>
		</button>
		</div>
	</div>
  </div>
}

export default CardCharacter;