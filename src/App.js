import AddPizzaForm from "./components/AddPizzaForm";
import PizzaList from "./components/PizzaList";
import "./App.css";

function App() {
  return (
    <div>
      <h1>My favourite pizza</h1>

      <PizzaList />
      <AddPizzaForm />
    </div>
  );
}

export default App;
