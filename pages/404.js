import Navbar from '../components/Navbar';
import Head from 'next/head';
import Footer from '../components/Footer';

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404 - Luthfi's Hideout</title>
      </Head>
      <Navbar />
      <div className="content pt-20">
        <h1 class="text-center text-2xl">404 Not Found</h1>
        <Footer />
      </div>
    </>
  );
};

export default Custom404;
