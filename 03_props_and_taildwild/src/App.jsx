import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  let user = {
    name: "Chai",
    age: 25,
    address: "Bangkok",
  };
  let arr = [1, 2];

  return (
    <>
      <h1 className="bg-green-400 text-black p-5 rounded-xl">Taildwild Test</h1>
      <Card username="Shefali" myObj={user} myArr={arr} />
      <Card username="Vraj" btnText="Visit me" />
      
    
    </>
  );
}

export default App;
