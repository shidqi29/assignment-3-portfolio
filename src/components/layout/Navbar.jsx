import { NavLink } from "react-router-dom";
import { NavItem } from "../../constant/NavItem";

const Navbar = () => {
  return (
    <header className="container mx-auto mt-2 flex justify-center">
      <nav className="bg-secondary top-0 mx-auto rounded-full px-8 py-4 hover:shadow-xl ">
        <ul className="flex space-x-8">
          {NavItem.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                style={({ isActive }) => ({
                  borderBottom: isActive ? "3px solid #3f5fca" : "transparent",
                  fontWeight: isActive ? "bold" : "normal",
                  transition: "all 0.2s",
                })}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
