import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const FavoriteDropdown = () => {

	const { store } = useContext(Context);

	return (<div className="dropdown">
		<button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
		  Favorites ❤️
		</button>
		<ul className="dropdown-menu">
			{
				store.favorites && store.favorites.map( item => {
					return <li key={'favorite-'+item.id}>
						<Link className="dropdown-item" to={`/character/${item.id}`}>
							{item.name}
						</Link>
					</li>
				})
			}
		</ul>
	  </div>)
}

export const Navbar = () => {
	return (
		<nav className="navbar bg-primary mb-3">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1 mx-2 text-white"> 🐲 DragonBall </span>
				</Link>
				<div className="ml-auto">
					<FavoriteDropdown />
				</div>
			</div>
		</nav>
	);
};
