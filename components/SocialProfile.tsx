type Props = {
  items: SocialItem[];
};

type SocialItem = {
  url: string;
  icon: React.ReactElement;
  tooltip?: string;
};

const SocialProfile: React.FC<Props> = ({ items, ...props }) => {
  return (
    <ul className="inline-flex" {...props}>
      {items.map((item, index) => (
        <li
          className="relative list-none mr-5 last:mr-0 hover:opacity-[1]"
          key={index}
        >
          <a
            href={item.url}
            className="text-black block text-xl px-2"
            aria-label="social profile"
          >
            {item.icon || "icon"}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialProfile;
