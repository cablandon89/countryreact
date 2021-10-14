import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Home from './Views/Home';
import Header from './Components/Header';
import Detail from './Views/Detail';
import ResultSearch from './Views/ResultSearch';

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
        <Route path="/search/:str?">
            <ResultSearch/>
        </Route>
        <Route path="*">
        <div className="d-flex align-items-center justify-content-center vh-100 flex-wrap">
          <h1 className="w-100 text-center" >Error 404 not found</h1>
         <Link className="text-decoration-none text-black" to="/"><p className="w-100 text-center">Back to home</p></Link>
        </div>
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
git pull origin main --allow-unrelated-histories
*/
