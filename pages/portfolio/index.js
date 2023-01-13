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
        <div className="mb-5 rounded-md bg-blue-600 py-2 text-center">
          <h1 className="font-poppins mb-1 text-2xl font-semibold text-white">Projects</h1>
          <p className="font-serif italic text-slate-100">My recent projects</p>
        </div>
        <div className="mb-3 w-full">
          {portfolios.map((portfolio) => (
            <div className="mx-auto mb-5 md:text-center" key={portfolio.slug}>
              <img src={portfolio.img} className="mb-3 w-full rounded-md shadow-md md:mx-auto md:w-2/3" />
              <div className="mb-2">
                <span className="rounded-md bg-blue-500 px-2 py-1 text-white">{portfolio.type}</span>
              </div>
              <h2 className="font-poppins text-xl">
                <Link href={`/portfolio/${portfolio.slug}`}>{portfolio.name}</Link>
              </h2>
              <p className="mb-3 font-serif italic text-slate-700">{portfolio.description}</p>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
