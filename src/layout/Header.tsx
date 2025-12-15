import type { PropsWithChildren } from "react";
import { useAuth0 } from "@auth0/auth0-react";
function Header({ children }: PropsWithChildren) {
  return (
    <header className="text-grey-900 text-preset-1 leading-preset-1 flex items-center justify-between space-x-200 font-bold">
      <div className="flex flex-1 items-center justify-between">{children}</div>
      <LogoutButton />
    </header>
  );
}

import { TbLogout2 } from "react-icons/tb";

function LogoutButton() {
  const { logout } = useAuth0();

  function handleLogout() {
    logout({ logoutParams: { returnTo: window.location.origin } });
  }

  return (
    <button
      type="button"
      aria-label="logout button"
      onClick={handleLogout}
      className="hover:text-grey-500 flex cursor-pointer flex-col transition-colors duration-200"
    >
      <TbLogout2 />
      <span className="text-preset-5 leading-preset-5">Log out</span>
    </button>
  );
}

export default Header;
