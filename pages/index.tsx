import { NextPage } from "next";
import Head from "next/head";

const HomePage: React.FC<NextPage> = () => {
  return (
    <div className="w-mx-auto container px-4">
      <Head>
        <title>Next Tailwindcss | Home</title>
      </Head>
      <div className="w-full">
        <div className="container mx-auto">
          <div className="pb-12 md:pt-28 px-4 pt-6">
            <div className="text-center">
              <h1 className="text-5xl font-extrabold tracking-tighter leading-none mb-8 dark:text-white">
                Next <span className="text-indigo-500">Tailwind</span> Template
              </h1>
              <h3 className="text-lg font-normal text-gray-500 dark:text-gray-300 leading-relaxed max-w-screen-md mx-auto tracking-normal">
                Bacon ipsum dolor amet bacon ground round spare ribs, picanha
                drumstick shankle flank fatback sirloin chicken tongue boudin.
                Picanha beef pork, beef ribs spare ribs chicken fatback boudin
                pork chop kielbasa hamburger filet mignon.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
