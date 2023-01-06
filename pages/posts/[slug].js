import Link from 'next/link';
import Head from 'next/head';
import portfolios from '../../data/portfolios.json';
import Navbar from '../../components/Navbar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Footer from '../../components/Footer';

const ShowPost = () => {
  return (
    <>
      <Head>
        <title>Post - Luthfi's Hideout</title>
      </Head>
      <Navbar />
      <div className="content pt-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus eos fugiat placeat maxime iusto corporis saepe quo velit, tempora, atque rerum. Unde magni alias dolor vel commodi ad aut sunt?</div>
    </>
  );
};

export default ShowPost;

ShowPost.getInitialProps = (router) => {
  const row = {
    title: 'Lorem Ipsum',
    slug: 'lorem-ipsum',
  };

  return {
    portfolio: row,
  };
};
