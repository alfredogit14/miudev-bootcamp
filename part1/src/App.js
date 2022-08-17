import './App.css';
import Mensaje from './Mensaje.js';

function App() {
  
  const a =2
  const b =4  

  return (
    <div className="App">
      <Mensaje color="red" message="Estamos working" />
      <Mensaje color="green" message="yeahhh" />
      <strong>Estamos trabajando en ello</strong>
      <div>
        <p>El resultado es:</p>
        {a+b}
      </div>
    </div>
  );
}

export default App;
