import "./index.css";
import Circle from "./components/Circle";

function App() {
  return (
    <div className="App">
      <h4>LINES</h4>
      <Circle
        borderColor="blue"
        circleWidth="100px"
        circleHeight="100px"
        backgroundColor="rgba(0, 0, 128, 0.283)"
        rotation="rotateRight 1s linear infinite"
      />
      <Circle
        borderColor="red"
        circleWidth="200px"
        circleHeight="200px"
        backgroundColor="rgba(255, 0, 0, 0.283)"
        rotation="rotateLeft 1s linear infinite"
      />
      <Circle
        borderColor="green"
        circleWidth="150px"
        circleHeight="150px"
        backgroundColor="rgba(0, 128, 0, 0.283)"
        rotation="rotateRight 2s linear infinite"
      />
      <Circle
        borderColor="grey"
        circleWidth="250px"
        circleHeight="250px"
        backgroundColor="rgba(128, 128, 128, 0.283)"
        rotation="rotateLeft 2s linear infinite"
      />
    </div>
  );
}

export default App;
