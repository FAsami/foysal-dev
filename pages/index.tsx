import Head from 'next/head'
import tw from 'twin.macro'
import { Button } from 'antd'
import React from 'react'

export default function Home() {
  return (
    <>
      <Head>
        <title>foysal is here :) </title>
      </Head>
      <main tw="h-screen w-screen bg-[#242B2E] flex items-center justify-center">
        <h1
          tw="text-white text-5xl font-bold tracking-[0.15em]"
          className="animate__animated animate__swing"
        >
          <span tw="text-2xl">Hi! I'm</span>
          <br /> FOYSAL
        </h1>
      </main>
    </>
  )
}
