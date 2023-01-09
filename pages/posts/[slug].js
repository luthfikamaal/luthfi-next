import Link from 'next/link';
import Head from 'next/head';
import portfolios from '../../data/portfolios.json';
import Navbar from '../../components/Navbar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Footer from '../../components/Footer';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote';

const ShowPost = ({ fronMatter: { title, date, tags, image }, mdxSource }) => {
  const titlePost = `${title} - Luthfi's Hideout`;

  return (
    <>
      <Head>
        <title>{titlePost}</title>
        <meta property="description" content={date} />
        <meta property="og:type" content="Post" />
        <meta property="og:image" content={`/assets/img/${image}`} />
      </Head>
      <Navbar />
      <div className="content pt-20 mb-3" id="mdx">
        <h1>{title}</h1>
        <img className="w-full rounded-lg mb-3" src={`/assets/img/${image}`} />
        <MDXRemote {...mdxSource} />
        <hr />
        <div></div>
        <Footer className="mt-3" />
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.mdx'), 'utf-8');

  const { data: fronMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      fronMatter,
      slug,
      mdxSource,
    },
  };
};

export default ShowPost;
