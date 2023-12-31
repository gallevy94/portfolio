import Card from "../../components/Card";

const App = ({ app }) => {
  return (
    <Card className="projects__app">
      <div className="projects__app-image">
        <img src={app.image} alt="App Img" />
      </div>
      <h4>{app.title}</h4>
      <p>{app.desc}</p>
      <a
        href={app.github}
        className="btn sm primary"
        target="_blank"
        rel="noopner noreferrer"
      >
        Gitbub
      </a>
    </Card>
  );
};

export default App;
