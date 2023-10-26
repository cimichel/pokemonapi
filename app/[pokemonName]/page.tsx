import Link from 'next/link';
import {getOnePokemon} from '@/app/lib/api';
import Image from 'next/image';
import image from '@/app.image';


export default async function PokemonPage({params}: {params: {pokemonName: string }}){

    const {pokemonName} = params;

    const pokemonObj = await getOnePokemon(pokemonName);

    console.log(pokemonObj);
    return(

        <>
        <h3>{pokemonName}</h3>
        <Image image={pokemonObj.sprites.other['official-artwork'].front_default}
        name={pokemonName}
        />
        <Image 
        src={pokemonObj.sprites.other['official-artwork'].front_default}
        alt={"picture of " + pokemonName}
        width='100'
        height='100'
        />
        <Link href="/">BACK</Link>
        </>

    )
}