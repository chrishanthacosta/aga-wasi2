"use client"
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import { signIn, useSession, signOut } from "next-auth/react"
import Carousel from './components/carousel/carousel'

export default function Home() {


  return (
    <>
    <Carousel></Carousel>
    </>
  )

  // const { data: session } = useSession();
  //  console.log(session)
    // if (session) {
    //   return (
    //     <main>
    //       <Button onClick={() => signOut()} >Sign OPut</Button>
    //       Hello
    //     </main>
    //   )
    // } else {
    //   return (
    //     <main>
          
    //         <Button onClick={() => signIn()} >Sign In</Button>
    //       Hello
    //     </main>
    //   )
    // }
}
