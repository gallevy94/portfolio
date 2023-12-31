import "./Skills.css";
import data from "./data";
import Card from "./../../components/Card";

export default function App() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="container skills__container">
        {data.map((item) => (
          <Card key={item.id} className="skills__card">
            <h4>{item.title}</h4>
            <div className="desc__container">
              {item.desc.map((descItem, index) => (
                <div className="btn primary" key={index}>
                  {descItem}
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
