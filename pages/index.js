import Head from "next/head";

import Form from "../components/Form";

export default function Home() {
  return (
    <div className="z-50">
      <Head>
        <title>Shree RSC TUTORS STUDENT REGISTRATION</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center mt-8 space-y-4  ">
        <h1 className="font-semibold text-lg">Register a Student</h1>
        <Form />
      </main>
    </div>
  );
}
