import Head from 'next/head'
import React from 'react'
import tw from 'twin.macro'
import { FaPagelines } from 'react-icons/fa'

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Page not found !</title>
      </Head>
      <div tw="h-screen w-screen flex items-center justify-center">
        <h1 tw="text-2xl text-center">
          <FaPagelines tw="text-4xl text-green-400" />
          Opps! <br />
          Something went wrong!
        </h1>
      </div>
    </>
  )
}

export default NotFound
