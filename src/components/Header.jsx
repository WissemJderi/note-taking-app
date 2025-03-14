import "../styles/header.css";
import { NavLink } from "react-router";
function Header() {
  return (
    <div className="header">
      <nav>
        <section>
          <NavLink to="/عرض الفوائد" className="nav">
            {" "}
            <h1>عــرض الفــوائــــــد</h1>
          </NavLink>
          <h1>عــرض أقســام الفــوائــــــد</h1>
          <NavLink to="/عرض الكتب" className="nav">
            {" "}
            <h1>عــرض الكــتــب المقـروءة</h1>
          </NavLink>
        </section>
        <NavLink to="/" className="nav">
          <h1 className="logo">كــنــاشــــة الفــوائــــــد</h1>
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
