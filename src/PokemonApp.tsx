import { getPokemons } from "./store";
import { useAppDispatch, useAppSelector } from "./hooks";
import { useEffect } from "react";

export const PokemonApp = () => {

  const  { loading, pokemons, page } = useAppSelector( ( state ) => state.pokemons );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch( getPokemons() );
  }, [])
  
  return (
    <>
      <h1>Pokemon App</h1>
      <hr />
      {
        ( loading && ( <span>Loading...</span> ) )
      }

      <ul>
        {
          pokemons.map( ({ name }) => (
            <li key={ name }>
              { name }
            </li>
          ))
        }
      </ul>

      <button
        disabled={ loading }
        onClick={ () => dispatch( getPokemons( page ) ) }
      >
        Next
      </button>
    </>
  )
}
