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
          <p className="font-serif italic text-slate-100">Tulisan kecil</p>
        </div>
        <div className="grid grid-col-1 md:grid-cols-2 gap-x-3 gap-y-4">
          {posts.map((post) => (
            <div key={post.slug}>
              <img className="w-full rounded-lg mb-2" src={`/assets/img/thumbnails/${post.image}`} />
              <Link href={`/posts/${post.slug}`} className="font-poppins text-2xl">
                {post.title}
              </Link>
              <p className="text-xs text-slate-700">{post.date}</p>
            </div>
          ))}
        </div>
        <hr />
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
      ...frontMatter,
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
