'use client'
import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react'
import { UserCard } from '@/app/components/userCard';


export default function UserLogin() {

  const { data: session } = useSession();

  if (session){
    return(
      <>
      <button onClick={()=> signOut()}>Sign out</button>
      <UserCard user={session?.user}/>
      </>
    )
  }else{
    return(
      <>
      <button onClick={()=> signIn()}>Sign in</button>
      </>
    )
  }
}

