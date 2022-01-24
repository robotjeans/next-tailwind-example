import { NextPage } from "next";

const AboutPage: React.FC<NextPage> = () => {
  return (
    <div className="w-mx-auto container px-4">
      <div className="w-full">
        <div className="container mx-auto">
          <div className="pb-12 md:pt-28 px-4 pt-6">
            <div className="text-center">
              <h1 className="text-5xl font-extrabold tracking-tighter leading-none mb-8 dark:text-white">
                About <span className="text-indigo-500">Page</span>
              </h1>
              <h3 className="text-lg font-normal text-gray-500 dark:text-gray-300 leading-relaxed max-w-screen-md mx-auto tracking-normal">
                Welcome to the about page.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
