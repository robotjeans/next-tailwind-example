import Sticky from "react-stickynode";
import SocialProfile from "@/components/SocialProfile";
import SocialItems from "@/config";

type Props = {
  className?: string;
};

const Navbar: React.FC<Props> = ({ className, ...props }) => {
  const addAllClasses = [
    "header bg-white relative z-[99999] transition ease-in-out delay-300",
  ];

  if (className) addAllClasses.push(className);

  return (
    <Sticky top={0} innerZ={9999} activeClass="nav-sticky">
      <header className={addAllClasses.join(" ")} {...props}>
        <div className="flex column bg-white">
          <div className="flex items-center justify-between bg-white transition ease-in-out delay-300 my-0 mx-auto py-8 px-4 w-[1170px] md:w-full md:px-5">
            <div className="md:hidden">
              <SocialProfile items={SocialItems} />
            </div>
          </div>
        </div>
      </header>
    </Sticky>
  );
};

export default Navbar;
