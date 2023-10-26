

const API_CALL = "https://pokeapi.co/api/v2/"

export async function GetAllPokemons(){

    const response = await fetch(API_CALL + "pokemon?limit=300&offset=0");
    const data = await response.json(); 
    return data.results;

}

export async function getOnePokemon(name: string){


const response = await fetch(API_CALL + 'pokemon/' + name);
const data = await response.json();
return data;

}