import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav style={{display:"flex", justifyContent: 'space-around'}}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">contact</a>
        <a href="/mebel">mebel</a>
      </nav>


      <Outlet />


      <footer>
        <h5>This is footer section</h5>
      </footer>
    </div>
  );
}

export default Layout;
