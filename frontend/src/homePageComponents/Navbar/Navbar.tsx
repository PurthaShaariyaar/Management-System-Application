import { useState } from "react";
import useMediaQuery from "../Hooks/useMediaQuery";
import { SelectedPage } from "../Shared/types";
import Link from "./Link";
import MenuLink from "./MenuLink";
import { Bars3Icon, DocumentCheckIcon, XMarkIcon } from "@heroicons/react/20/solid";
import ActionButton from "../Shared/ActionButton";

interface NavbarProps {
  topOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ topOfPage, selectedPage, setSelectedPage }: NavbarProps) => {

  const flexBetween = "flex items-center justify-between";
  const menuItems: string[] = ['Home', 'Features', 'Pricing', 'Contact'];

  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const navbarBackground = topOfPage ? "" : "bg-white"



  return <nav>
    <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6 `}>
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16 text-xl`}>
          {/* LEFT SIDE */}
          <DocumentCheckIcon
            className="p-1 h-10 w-10 bg-sky-600 text-white rounded-md"
          />

          {/* RIGHT SIDE */}
          {isAboveMediumScreens? (<div className={`${flexBetween} w-full`}>
            {/* Inner Left Side */}
            <div className={`${flexBetween} gap-8`}>
              {menuItems.map((menuItem) => (
                <Link
                  page={menuItem}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              ))}
            </div>

            {/* Inner Right Side */}
            <div className={`${flexBetween} gap-2`}>
              <button
                className="rounded-md px-6 py-2 hover:bg-teal-500 hover:text-white"
              >
                Login
              </button>
              <ActionButton
                name="Sign Up"
              />
            </div>
          </div>) : (
            <button
              className="rounded-md bg-sky-600 p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon
                className="h-6 w-6 text-white"
              />
            </button>
          )}
        </div>
      </div>
    </div>
    {/* MOBILE MENU */}
    {!isAboveMediumScreens && isMenuToggled && (
      <div
        className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-sky-600"
      >
        {/* CLOSE ICON */}
        <div className="flex justify-end p-12">
          <button
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <XMarkIcon
              className="h-10 w-10 text-white"
            />
          </button>
        </div>

        {/* MENU ITEMS */}
        <div
          className="ml-[33%] flex flex-col gap-10 text-2xl"
        >
          {menuItems.map((menuItem) => (
            <MenuLink
              page={menuItem}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
      </div>
    )}
  </nav>
 };

export default Navbar;
