import React from "react";


const CardCharacter = ({ character }) => {
	return <div className="p-2 col-12 col-sm-6 col-md-4 col-lg-3">
	<div className="card">
	<img src={character.image} className="card-img-top" 
		alt={character.name + '-image'}
		style={{ maxHeight: '150px', width: 'auto', objectFit: 'contain'}}
	/>
	<div className="card-body">
	  <h5 className="card-title">{character.name}</h5>
	  <p className="card-text text-truncate">{character.description}.</p>
	  <a href="#" className="btn btn-primary">Go somewhere</a>
	</div>
  </div>
  </div>
}

export default CardCharacter;