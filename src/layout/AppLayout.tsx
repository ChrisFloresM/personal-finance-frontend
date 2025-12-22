import SideBar from "./SideBar.tsx";
import { Outlet } from "react-router";

import { withAuthenticationRequired } from "@auth0/auth0-react";

export const ProtectedLayout = withAuthenticationRequired(AppLayout);

function AppLayout() {
  return (
    <div className="bg-beige-100 flex min-h-dvh">
      <SideBar />
      <div className="flex flex-1 flex-col space-y-400 px-200 py-200 pb-20 lg:pb-200">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
