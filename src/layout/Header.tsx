import type { PropsWithChildren } from "react";
import { useAuth0 } from "@auth0/auth0-react";
function Header({ children }: PropsWithChildren) {
  const { logout } = useAuth0();

  function handleLogout() {
    logout({ logoutParams: { returnTo: window.location.origin } });
  }

  return (
    <header className="text-grey-900 text-preset-1 leading-preset-1 flex items-center justify-between font-bold">
      {children}
      <button onClick={handleLogout}>Click</button>
    </header>
  );
}

export default Header;
