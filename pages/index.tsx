import Posts from "@/components/home/Posts";
import PostSwiper from "@/components/home/PostSwiper";
import Seo from "@/components/Seo";

type Props = {};

const HomePage: React.FC<Props> = ({ ...props }) => {
  return (
    <>
      <Seo title="Home" />
      <div className="w-full" {...props}>
        <PostSwiper />
        <Posts />
      </div>
    </>
  );
};

export default HomePage;
