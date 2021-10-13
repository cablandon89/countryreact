import {useState, useEffect} from 'react'

import {Button } from 'react-bootstrap';

const Home = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(20);
  const API = 'https://restcountries.com/v2/all';

  const fetchApi = async () => {
    try{
      const response = await fetch(API);
      const result = await response.json();
      setData(result.slice(0,page));
    }catch (error){
      console.log(error)
    }
  }

   useEffect(() => {
    fetchApi();
  }, [])

  useEffect(() => {
    fetchApi();
  }, [page])

  return (
    <>
      {
        data.length ?
        <>
          <h2 className="bg-primary">Countries</h2>
          <div className="d-flex p-2 justify-content-between align-items-center flex-wrap" >
            {
              data.map((data,index) =>
              <div key={index} className="border rounded m-2 position-relative columnoverlay">
                <div className="overlay text-center bg-primary">
                  <p >{data.name}</p>
                </div>
                <img className="bandera" src={data.flags.png} alt="bandera" />
              </div>
              )
            }
          </div>
           <Button onClick={() => setPage(page+20)}>Mostrar más</Button> 
        </>:
        <p>Cargando ...</p>
      }
      
    </>
  )
}

export default Home;