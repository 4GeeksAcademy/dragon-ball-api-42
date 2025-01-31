const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "Diego",
					background: "white",
					initial: "white"
				},
				{
					title: "Renzo",
					background: "purple",
					initial: "white"
				}
			],
			theme: 'dark',
			products: [], // <--- cambia a la categoria
			categorias: ['Ropa', 'Videojuegos'],

			characters: [], // <-- useState global

			favorites: ['Goku']
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			loadCharacters: async () => {
				const resp = await fetch("https://dragonball-api.com/api/characters")
				const data = await resp.json()
				setStore({ characters: data.items });
			},

			addFavorite: (character) => {

				const store = getStore()

				const alreadyLiked = store.favorites.find(item => character.name == item.name);

				if(!alreadyLiked){
					setStore({ favorites: [ ...store.favorites, character ] })
				}

			},

			removeFavorite: (character) => {

				const store = getStore()

				const newFavorites = store.favorites.filter( item => item.name != character.name)

				setStore({ favorites: newFavorites })

			}
		}
	};
};

export default getState;
