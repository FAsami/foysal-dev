import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello </title>
      </Head>
      <main>
        <h1
          style={{
            textAlign: "center",
            margin: "96px",
          }}
        >
          Hello Staging!
        </h1>
      </main>
    </>
  );
}
