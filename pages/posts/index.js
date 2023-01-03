import Head from 'next/head';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const Posts = () => {
  return (
    <>
      <Head>
        <title>Posts - Luthfi's Hideout</title>
      </Head>
      <Navbar />
      <div className="content pt-20">
        <h1 className="text-2xl">Segera hadir</h1>
        <Footer />
      </div>
    </>
  );
};

export default Posts;
