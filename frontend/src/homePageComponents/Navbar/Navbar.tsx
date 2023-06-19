import Link from "./Link";

interface Props {
  selectedPage: string;
  setSelectedPage: (value: string) => void;
}

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {

  const flexBetween = "flex items-center justify-between";
  const onHover = "text-primary-500 transition duration-300 hover:text-sky-600"
  const menuItems: string[] = ['Home', 'Features', 'Pricing', 'Contact'];

  return <nav>
    <div className={`${flexBetween} fixed top-0 z-30 w-full py-6 `}>
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16 text-xl`}>
          {/* LEFT SIDE */}
          <h1 className={onHover}>LOGO</h1>

          {/* RIGHT SIDE */}
          <div className={`${flexBetween} w-full`}>
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
            <div>
              <p className={`${onHover}`}>Login</p>
              <button className={`${onHover}`}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
 };

export default Navbar;
