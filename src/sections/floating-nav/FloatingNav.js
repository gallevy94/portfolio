import data from "./data";
import Scrollspy from "react-scrollspy";
import Nav from "./Nav";
import "./FloatingNav.css";

const FloatingNav = () => {
  return (
    <ul id="floating__nav">
      <Scrollspy
        offset={-500}
        className="scrollspy"
        items={["header", "about", "skills", "projects", "contact"]}
        currentClassName="active"
      >
        {data.map((item) => (
          <Nav key={item.id} item={item} />
        ))}
      </Scrollspy>
    </ul>
  );
};

export default FloatingNav;
