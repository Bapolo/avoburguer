import Checkout from './componentes/Checkout/Checkout.js';
import Detalhes from './componentes/Detalhes/Detalhes.js';
import Home from './componentes/Home/Home.js'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Sucesso from './componentes/Sucesso/Sucesso.js';
import UserConfig from './componentes/UserConfig/UserConfig.js'

function App() {

  return (
    <div className="h-full w-full">
      <HashRouter>
        <Routes>
          <Route path = '/' element = { <Home /> } />
          <Route path = '/detalhes/:id' element = { <Detalhes />} />
          <Route path = '/checkout/:id/:preco' element = { <Checkout />} />
          <Route path = '/sucesso' element = { <Sucesso /> } />
          <Route path = '/configuracao' element = { <UserConfig /> } />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
