import Navbar from "@/components/Navbar";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="lg:w-[1170px] w-full my-0 mx-auto py-8 px-4">
        {children}
      </div>
    </div>
  );
};

export default Layout;
