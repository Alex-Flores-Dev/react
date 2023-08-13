import "./App.css";
import NavBar from "./componentes/NavBar";
import Inicio from "./componentes/inicio";
import Description from "./componentes/description/Description";
import Formulario from "./componentes/formulario";
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Inicio />
      <Description />
      <Formulario />
    </div>
  );
}

export default App;
