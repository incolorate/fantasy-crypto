import classNames from "classnames";

function Button({ children, secondary, primary, rounded, ...rest }) {
  let buttonClasses = classNames("py-2 px-4 rounded w-28 text-lg", {
    "bg-yellow-400 hover:bg-yellow-500 text-black font-bold ": primary,
    "bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white  border border-blue-500 hover:border-transparent":
      secondary,
    "rounded-full": rounded,
  });

  return (
    <button className={`${buttonClasses}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
