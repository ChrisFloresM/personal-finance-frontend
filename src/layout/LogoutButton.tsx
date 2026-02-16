import { TbLogout2 } from "react-icons/tb";
import { useAuth0 } from "@auth0/auth0-react";

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
      className="hover:text-grey-500 flex cursor-pointer flex-col items-center justify-center transition-colors duration-200"
    >
      <TbLogout2 />
      <span className="text-preset-5 leading-preset-5">Log out</span>
    </button>
  );
}

export default LogoutButton;
