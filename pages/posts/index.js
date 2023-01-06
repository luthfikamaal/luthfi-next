import Head from 'next/head';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const Posts = ({ posts }) => {
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
          <div className="mb-4" key={post.slug}>
            <Link href={`/posts/${post.slug}`} className="font-poppins text-2xl">
              {post.frontMatter.title}
            </Link>
            <p class="text-slate-600 italic">{post.frontMatter.date}</p>
            <hr />
          </div>
        ))}
        <Footer />
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split('.')[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export default Posts;
