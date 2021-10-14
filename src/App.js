import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './Views/Home';
import Header from './Components/Header';
import Detail from './Views/Detail';

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/detail/:id?">
            <Detail/>
        </Route>
        <Route path="*">
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
    </BrowserRouter> 
  );
}

export default App;

/*
git remote add origin https://github.com/cablandon89/countryreact.git
git branch -M main
git push -u origin main 
git pull origin master --allow-unrelated-histories
*/
