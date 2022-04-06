
import {useState} from "react";
function App() {
//todo presentar el concepto de "state"
//hooks  
  const [inputState, setInputState] = useState({
    titulo: "",
    fecha: "",
    nota: "",

  }); //valor inicial del state
  
  
  
   const handleInputChange = (event) => {
     setInputState({
        ...inputState,                       //console.log (event.target);
       [event.target.name]: event.target.value, 
     });
   };


  return (
    <div className="App">
    <h3>Notas</h3>
    <label htmlFor="titulo"> Titulo </label>
    <input 
    id="titulo" 
    name="titulo" 
    type="titulo" 
    onChange={handleInputChange}
    value={inputState.titulo}
    />
<br></br><br></br>

<label htmlFor="fecha">Fecha</label>
    <input 
    id="fecha" 
    name="fecha" 
    type="fecha" 
    onChange={handleInputChange}
    value={inputState.fecha}
    />
<br></br> <br></br>

<label htmlFor="nota"> Nota  </label>
    <input 
    id="nota" 
    name="nota" 
    type="nota" 
    onChange={handleInputChange}
    value={inputState.nota}
    />
    </div>
  );

}

export default App;
