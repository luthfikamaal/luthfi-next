import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Luthfi's Hideout</title>
      </Head>
      <Navbar />
      <div className="content pt-20">
        <div className="mb-6 rounded-md border-t-4 border-solid border-indigo-300 bg-blue-600 px-3 py-2 text-white">
          <h1 className="font-poppins text-3xl">Muhammad Luthfi Kamal</h1>
          <p className="font-ssp text-xl">100% Homan</p>
          <p className="font-serif text-lg">Web Development Enthusiast</p>
        </div>
        <Footer />
      </div>
    </>
  );
}
