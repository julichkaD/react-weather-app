import "./index.css";
import Form from "./Form";
import City from "./City";
import Humidity from "./Humidity";
import Update from "./Update";
import Image from "./Image";
import Condition from "./Condition";
import Wind from "./Wind";
import Temperature from "./Temperature";
import Days from "./Days";


export default function App() {
  return (
    <div className="main">
      <div className="app">
        <Form />
        <div className="grid">
          <div className="left-column">
            <Update />
            <Condition />
          </div>
          <div className="center">
            <City />
            <Temperature />
            <Image />
          </div>
          <div className="right-column">
            <Humidity />
            <Wind />
          </div>
        </div>
      </div>
      <Days />
    </div>
  );
}
