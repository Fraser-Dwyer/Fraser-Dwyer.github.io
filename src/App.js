import "./App.css";
import piggypayTitle from "./Images/piggypay.png";
import piggyGif from "./Images/piggyGIF.gif";

function App() {
  return (
    <div>
      <div className="banner">
        <img src={piggypayTitle} alt="piggypay"></img>
      </div>
      <div className="background">
        <div className="content">
          <div className="output">
            <h2>You've earned</h2>
            <h1>£5.52</h1>
            <h2>since 09:04</h2>
          </div>
          <div className="input">
            <img src={piggyGif}></img>
            <p>Time started:</p>
            <p>Salary:</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
