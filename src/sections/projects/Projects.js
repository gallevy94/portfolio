import "./Projects.css";
import Apps from "./Apps";
import AppsCategories from "./AppsCategories";
import data from "./data";
import { useState } from "react";

const Projects = () => {
  const [apps, setApps] = useState(data);

  const categories = data.map((item) => item.category);
  const uniqueCategories = ["all", ...new Set(categories)];

  const filterAppsHandler = (category) => {
    if (category === "all") {
      setApps(data);
      return;
    }

    const filterApps = data.filter((app) => app.category === category);
    setApps(filterApps);
  };

  return (
    <section id="projects">
      <h2>Recent Projects</h2>
      <p>
        Check out some of the projects I recently worked on. Use the buttons to
        toggle the different categories.
      </p>
      <div className="container projects__container">
        <AppsCategories
          categories={uniqueCategories}
          onFilterApps={filterAppsHandler}
        />
        <Apps apps={apps} />
      </div>
    </section>
  );
};

export default Projects;
