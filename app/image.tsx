"use client";
import Image from "next/legacy/image";

export function ClientImage({ src, name }: { src: string; name: string }) {
  // src={pokemonObj.sprites.other['official-artwork'].front_default}

  return (
    <Image src={src} alt={"picture of " + name} width="200" height="200" />
  );
}
