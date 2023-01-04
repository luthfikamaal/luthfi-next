import Link from 'next/link';
import Head from 'next/head';
import portfolios from '../../data/portfolios.json';
import Navbar from '../../components/Navbar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Footer from '../../components/Footer';

export default function ShowPortfolio({ portfolio }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{portfolio.name} - Luthfi's Hideout</title>
        <meta property="og:title" content={portfolio.name} />
        <meta property="description" content={portfolio.description} />
        <meta property="og:type" content="Portfolio" />
        <meta property="og:image" content={portfolio.img} />
      </Head>
      <Navbar />
      <div className="content pt-16">
        <div class="font-poppins mb-1 text-2xl">{portfolio.name}</div>
        <img src={portfolio.img} class="mb-3 w-full rounded-md shadow-md md:w-2/3" />
        <div class="mb-1 font-serif text-slate-700">{portfolio.description}</div>
        <div class="mb-3 font-serif font-semibold">
          Stacks: <span class="font-normal text-slate-800">{portfolio.stacks}</span>
        </div>
        <div class="mb-3 flex">
          <a href="portfolio.url.website" target="_blank" class="mr-1 rounded-md bg-blue-500 px-2 py-1 text-white transition-all hover:bg-blue-600">
            <i class="bi bi-globe2"></i>
          </a>
          <a href="portfolio.url.github" target="_blank" class="rounded-md bg-slate-800 px-2 py-1 text-white transition-all hover:bg-slate-900">
            <i class="bi bi-github"></i>
          </a>
        </div>
        <Footer />
      </div>
    </>
  );
}

ShowPortfolio.getInitialProps = (router) => {
  const row = portfolios.find((e) => {
    return e.slug == router.query.slug;
  });
  return {
    portfolio: row,
  };
};
