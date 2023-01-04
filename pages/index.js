import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Luthfi's Hideout</title>
        <meta property="og:title" content="Luthfi's Hideout" />
        <meta property="og:description" content="Tempat persembunyianku" />
        <meta property="og:type" content="Personal Web" />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/90312645?v=4" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta expr:content="data:blog.pageTitle" name="twitter:title" />
        <meta content="@luthfikml_" name="twitter:site" />
        <meta content="@luthfikml_" name="twitter:creator" />
        <meta expr:content="data:blog.metaDescription" name="twitter:description" />
        <b:if cond="data:blog.postImageUrl">
          <meta expr:content="data:blog.postImageUrl" name="twitter:image" />
          <meta expr:content="data:blog.pageName" name="twitter:image:alt" />
          <b:else>
            <b:if cond="data:blog.postImageThumbnailUrl">
              <meta expr:content="data:blog.postThumbnailUrl" name="twitter:image" />
              <meta expr:content="data:blog.pageName" name="twitter:image:alt" />
              <b:else>
                <meta content="https://avatars.githubusercontent.com/u/90312645?v=4" name="twitter:image" />
                <meta expr:content="data:blog.title" name="twitter:image:alt" />
              </b:else>
            </b:if>
          </b:else>
        </b:if>
      </Head>
      <Navbar />
      <div className="content pt-20">
        <div className="mb-6 rounded-md border-t-4 border-solid border-indigo-300 bg-blue-600 px-3 py-2 text-white">
          <h1 className="font-poppins text-3xl">Muhammad Luthfi Kamal</h1>
          <p className="font-ssp text-xl">100% Homan</p>
          <p className="font-serif text-lg">Web Development Enthusiast</p>
        </div>
        <Footer />
      </div>
    </>
  );
}
