import { Outlet } from "react-router-dom";
import "./app.css";
import Nav from "./Nav";
function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
