import Sticky from "react-stickynode";
import Link from "next/link";
import SocialProfile from "@/components/SocialProfile";
import { socialLinks } from "@/config";

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
          <div className="flex items-center justify-between bg-white transition ease-in-out delay-300 my-0 mx-auto py-8 lg:px-4 lg:w-[1170px] w-full px-5">
            <div className="md:block hidden">
              <SocialProfile items={socialLinks} />
            </div>
            <div className="w-[150px] min-h-full ml-auto mr-[calc(50% - 160px)] flex-shrink-0 bg-teal-200">
              <Link href="/">
                <a>Logo</a>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </Sticky>
  );
};

export default Navbar;
