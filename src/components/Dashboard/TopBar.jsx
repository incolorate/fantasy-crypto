import { useSelector } from "react-redux";
import { store } from "../../store";

function TopBar() {
  let state = useSelector(store);
  console.log(state);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
export default TopBar;
