import Header from "./Header.tsx";
import Main from "./Main.tsx";
import SideBar from "./SideBar.tsx";

function AppLayout() {
  return (
    <div>
      <div>
        <Header />
        <Main />
      </div>
      <SideBar />
    </div>
  );
}
export default AppLayout;
