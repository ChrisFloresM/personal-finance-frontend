import Header from "./Header.tsx";
import Main from "./Main.tsx";
import SideBar from "./SideBar.tsx";
import { Outlet } from "react-router";

function AppLayout() {
  return (
    <div className="bg-beige-100 flex min-h-dvh">
      <SideBar />
      <div className="flex-1 space-y-400 px-200 py-300">
        <Header />
        <Main>
          <Outlet />
        </Main>
      </div>
    </div>
  );
}
export default AppLayout;
