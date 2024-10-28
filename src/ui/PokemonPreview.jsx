import { Link } from "react-router-dom";

function PokemonPreview(pokemon) {
    const { name, id, types, abilities, stats } = pokemon.pokemon

   return (
    <div className="m-2 mx-auto w-2/3 p-2 text-center">
      <div>
        <Link to={`/pokemon/${id}`}>
          <div className={`card ${types[0]}`} data-id={id} data-name={name}>
            <img 
              className="card-image" 
              alt={name} 
              src={`${import.meta.env.VITE_SERVER_URL}/sprites/pokemon/other/official-artwork/${id}.png`} 
              
            />
            <h2 className="card-title" style={{textAlign: 'center'}}>{name[0].toUpperCase() + name.slice(1)}</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default PokemonPreview;
