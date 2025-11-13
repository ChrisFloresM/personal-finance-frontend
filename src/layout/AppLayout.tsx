import SideBar from "./SideBar.tsx";
import { Outlet } from "react-router";

function AppLayout() {
  return (
    <div className="bg-beige-100 flex min-h-dvh">
      <SideBar />
      <div className="flex flex-1 flex-col space-y-400 px-200 py-300 py-400 lg:px-500">
        <Outlet />
      </div>
    </div>
  );
}
export default AppLayout;
