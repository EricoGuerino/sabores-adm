import React from 'react';
import { Header } from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { About } from './views/About';
import { Home } from './views/Home';
import { ProdutoDetail } from './views/ProdutoDetail';
import { CategoriaDetail } from './views/CategoriaDetail';
import { Categorias } from './views/Categorias';
import { Produtos } from './views/Produtos';
import { Fabricantes } from './views/Fabricantes';
import { FabricanteDetail } from './views/FabricanteDetail';
import { CategoriaEdit } from './views/CategoriaEdit';

function App() {
  
  return (
    <div className="App">
      <Header />
      <BrowserRouter forceRefresh={true}>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about" >
            <About/>
          </Route>
          <Route exact path="/produtos" >
            <Produtos />
          </Route>
          <Route path="/produtos/:id" >
            <ProdutoDetail />
          </Route>
          <Route exact path="/categorias" >
            <Categorias />
          </Route>
          <Route path="/categorias/:id" >
            <CategoriaDetail />
          </Route>
          <Route path="/novaCategoria" >
            <CategoriaEdit categoria={''} />
          </Route>
          <Route exact path="/fabricantes" >
            <Fabricantes />
          </Route>
          <Route path="/fabricantes/:id" >
            <FabricanteDetail />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
