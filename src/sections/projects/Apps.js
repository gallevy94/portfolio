import App from "./App";

const Apps = ({ apps }) => {
  return (
    <div className="projects__apps">
      {apps.map((app) => (
        <App key={app.id} app={app} />
      ))}
    </div>
  );
};

export default Apps;
