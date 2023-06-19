import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "../Shared/types";

interface Props {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {

  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  const handleClick = () => setSelectedPage(lowerCasePage);

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
        transition duration-400 hover:text-sky-600
      `}
      href={`#${lowerCasePage}`}
      onClick={handleClick}
    >
      {page}
    </AnchorLink>
  )
}

export default Link;
