import AnchorLink from "react-anchor-link-smooth-scroll";

AnchorLink

interface ButtonProps {
  name: string
}

const ActionButton = ({ name }: ButtonProps) => {

  return (
    <button
      className="rounded-md px-6 py-2 bg-sky-600 text-white hover:bg-sky-700"
    >
      {name}
    </button>
  )
}

export default ActionButton;
