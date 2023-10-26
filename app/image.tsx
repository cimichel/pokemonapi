'use client'
import Image from 'next/image'


export function Image({image, name}: {image: string, name: string}){
return(
    <Image 
        src={pokemonObj.sprites.other['official-artwork'].front_default}
        alt={"picture of " + name}
        width='100'
        height='100'
        />
)
}