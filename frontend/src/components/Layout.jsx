import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  const linkStyle = ({ isActive }) => ({
    marginRight: "12px",
    textDecoration: "none",
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <div>
      <nav style={{ padding: "12px", borderBottom: "1px solid #ddd" }}>
        <NavLink to="/" style={linkStyle}>Home</NavLink>
        <NavLink to="/view-posts-page" style={linkStyle}>Posts</NavLink>
        
      </nav>

      <main style={{ padding: "12px" }}>
        <Outlet />
      </main>
    </div>
  );
}
