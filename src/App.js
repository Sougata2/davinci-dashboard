import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Main from "./components/Main";

function App() {
  return (
    <div className="app col-2">
      <div className="header-row">
        <SideBar />
      </div>

      <div className="main-row">
        <NavBar />
        <Main />
      </div>
    </div>
  );
}

export default App;
