import { Button } from './components/Button';

import "./styles/global.css";
import { ExperienceBar } from './components/ExperienceBar';

function App() {//component
  return (
    <div>
      {/* <h1>Hello NLW</h1> */}
      {/* <button style={{ height: '3rem' }}>Teste</button> */}
      {/* Passando um texto dentro do componente botão, toda vez que passar um
          texto dentro do componente ele será um children, isso deve ser adicionado
          nos props do typerscript */}
      {/* <Button color="red">Botão 1</Button>  */}
      {/* <Button color="blue">Botão 2</Button> */}

      <div className='container'>
        <ExperienceBar/>
      </div>

    </div>
  );
}

export default App;
