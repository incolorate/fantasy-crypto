function SideBarIcon({ icon, text = "tooltip" }) {
  return (
    <div
      className="relative flex items-center 
    justify-center h-12 w-12 mt-2 mb-2 mx-auto
     shadow-lg bg-gray-800 text-purple-500 hover:text-purple-700
    rounded-3xl hover:rounded-xl transition-all cursor-pointer group"
    >
      {icon}
      <span
        className="absolute w-auto p-2 m-2 min-w-max left-14 
      rounded-md shadow-md text-white bg-gray-900 text-xs font-bold 
      transition-all duration-100 scale-0 origin-left group-hover:scale-100"
      >
        {text}
      </span>
    </div>
  );
}
export default SideBarIcon;
