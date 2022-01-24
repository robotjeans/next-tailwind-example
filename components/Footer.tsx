const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-black w-full py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center text-gray-500 dark:text-gray-200 pt-6 sm:pt-12 font-light flex items-center justify-center">
          Created by{" "}
          <a
            href="https://github.com/robotjeans"
            target="_blank"
            rel="noreferrer"
            className="ml-1 text-indigo-500 hover:text-green-700"
          >
            @robotjeans
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
