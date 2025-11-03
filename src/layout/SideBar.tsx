import Navigation from "./navigation/Navigation.tsx";

function SideBar() {
  return (
    <aside className="bg-grey-900 fixed right-0 bottom-0 w-full rounded-t-[8px] px-300 pt-100">
      <p className="hidden lg:block">logo placeholder</p>
      <Navigation />
    </aside>
  );
}

export default SideBar;
