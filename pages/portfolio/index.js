import Link from 'next/link';
import Head from 'next/head';
import portfolios from '../../data/portfolios.json';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Portfolio - Luthfi's Hideout</title>
      </Head>
      <Navbar />
      <div className="content pt-20">
        <div class="mb-5 rounded-md bg-blue-600 py-2 text-center">
          <h1 class="font-poppins mb-1 text-2xl font-semibold text-white">Projects</h1>
          <p class="font-serif italic text-slate-100">My recent projects</p>
        </div>
        <div class="mb-3 w-full">
          {portfolios.map((portfolio) => (
            <div class="animate__animated animate__zoomInRight mx-auto mb-5 md:text-center" key={portfolio.slug}>
              <img src={portfolio.img} class="mb-3 w-full rounded-md shadow-md md:mx-auto md:w-2/3" />
              <div class="mb-2">
                <span class="rounded-md bg-blue-500 px-2 py-1 text-white">{portfolio.type}</span>
              </div>
              <h2 class="font-poppins text-xl">
                <Link href={`/portfolio/${portfolio.slug}`}>{portfolio.name}</Link>
              </h2>
              <p class="mb-3 font-serif italic text-slate-700">{portfolio.description}</p>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
