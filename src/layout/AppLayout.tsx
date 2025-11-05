import Header from "./Header.tsx";
import Main from "./Main.tsx";
import SideBar from "./SideBar.tsx";
import { Outlet } from "react-router";

function AppLayout() {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 bg-green-200 px-200 py-100">
        <Header />
        <Main>
          <Outlet />
        </Main>
      </div>
    </div>
  );
}
export default AppLayout;
