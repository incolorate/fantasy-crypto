import Button from "../Button";
function NavBar() {
  return (
    <nav className="p-1 text-white">
      <ul className="flex justify-between">
        <div className="flex items-center text-4xl">FantasyCrypto</div>
        <div className="flex gap-2 items-center">
          <li className="p-2 cursor-pointer text-lg">Home</li>
          <li>
            <Button primary>Log In</Button>
          </li>
          <li>
            <Button secondary>Sign Up</Button>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
