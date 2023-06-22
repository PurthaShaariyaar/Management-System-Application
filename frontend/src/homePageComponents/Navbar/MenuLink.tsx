import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "../Shared/types";

interface LinkProps {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const MenuLink = ({ page, selectedPage, setSelectedPage }: LinkProps) => {

  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  const handleClick = () => setSelectedPage(lowerCasePage);

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "" : ""}
        transition duration-400 text-white hover:text-black
      `}
      href={`#${lowerCasePage}`}
      onClick={handleClick}
    >
      {page}
    </AnchorLink>
  )
}

export default MenuLink;
