import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

export default function Root() {
  return (
    <>
      <NavBar />
      {/* all the other elements */}
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
