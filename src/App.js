import "./App.css";
import NavBar from "./componentes/NavBar";
import Inicio from "./componentes/inicio";
import Description from "./componentes/description/Description";
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Inicio />
      <Description />
    </div>
  );
}

export default App;
