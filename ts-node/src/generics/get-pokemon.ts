import axios from "axios";
import { Pokemon } from '../interfaces/pokemon';


export const getPokemon = async(name:string):Promise<Pokemon> => {
    const {data} = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`)
    console.log(data.abilities[0].ability.name)
    return data;
}