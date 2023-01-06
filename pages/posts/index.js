import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import axios from 'axios';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import posts from '../../data/posts.json';

const Posts = () => {
  return (
    <>
      <Head>
        <title>Posts - Luthfi's Hideout</title>
      </Head>
      <Navbar />
      <div className="content pt-20">
        <div className="mb-5 rounded-md bg-blue-600 p-2 text-center">
          <h1 className="font-poppins mb-1 text-2xl font-semibold text-white">Posts</h1>
          <p className="font-serif italic text-slate-100">Blog dan beberapa catatan yang saya gunakan dalam pengembangan Web</p>
        </div>
        {posts.map((post) => (
          <div class="mb-4">
            <Link href={`/posts/${post.slug}`} className="font-poppins text-xl">
              {post.title}
            </Link>
            <div className="my-1 font-thin italic text-slate-600">{post.category_id}</div>
            <hr />
          </div>
        ))}
        <Footer />
      </div>
    </>
  );
};

export default Posts;
