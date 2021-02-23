import { Button } from './components/Button'

function App() {//component
  return (
    <div>
      <h1>Hello NLW</h1>
      {/* Passando um texto dentro do componente botão, toda vez que passar um
          texto dentro do componente ele será um children, isso deve ser adicionado
          nos props do typerscript */}
      <Button color="red">Botão 1</Button> 
      <Button color="blue">Botão 2</Button>
    </div>
  );
}

export default App;
