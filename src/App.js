import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([])
  const [page, setpage] = useState(0);
  const API = 'https://restcountries.com/v2/all';

  const fetchApi = async () => {
    try{
      const response = await fetch(API);
      const result = await response.json();
      console.log(result.length);
      setData(result.slice(page,(page+20)));
    }catch (error){
      console.log(error);
    }
  }
  useEffect(() => {
    fetchApi();
  }, [])

  return (
    <div className="App">
      {
        data.length ?
        <>
          <h2>Countries</h2>
          <div className="card-item-list">
            {
              data.map((data,index) =>
                <p key={index}>{data.name}</p>
              )
            }
          </div>
        </>:
        <p>Cargando ...</p>
      }
      
    </div>
  );
}

export default App;

/*
git remote add origin https://github.com/cablandon89/countryreact.git
git branch -M main
git push -u origin main
*/
