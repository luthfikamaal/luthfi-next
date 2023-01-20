import { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote';
import { useRouter } from 'next/router';

const ShowPost = ({ fronMatter: { title, date, tags, image }, mdxSource }) => {
  const titlePost = `${title} - Luthfi's Hideout`;
  const [isLike, setIsLike] = useState(false);
  const router = useRouter();

  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>{titlePost}</title>
        <meta property="og:title" content={titlePost} />
        <meta property="description" content={date} />
        <meta property="og:type" content="Post" />
        <meta property="og:image" content={`https://luthfikml.vercel.app/assets/img/${image}`} />
      </Head>
      <Navbar />
      <div className="content pt-20 pb-12 mb-3">
        <div id="mdx">
          <h1>{title}</h1>
          <MDXRemote {...mdxSource} />
          <hr />
        </div>
        <Footer className="mt-3" />
        <div className="fixed inset-x-0 bottom-0 px-3 py-4">
          <div className="content flex">
            <div className="py-2 px-3 rounded-full mx-auto bg-white border border-solid border-slate-200 shadow-sm flex gap-x-2">
              <button onClick={() => setIsLike((isLike) => !isLike)} className="px-2 py-1 transition-all hover:bg-slate-200 rounded-full">
                {!isLike ? <i className="text-2xl bi bi-heart"></i> : <i className="text-2xl bi bi-heart-fill text-red-500"></i>}
              </button>
              <button className="ml-auto rounded-full hover:bg-slate-200 px-2 py-1 transition-all">
                <i className="text-2xl bi bi-share-fill"></i>
              </button>
            </div>
          </div>
        </div>
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
