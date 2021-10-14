import {useState, useEffect} from 'react'
import {Link } from 'react-router-dom';
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
          <div className="d-flex p-2 justify-content-between align-items-center flex-wrap" >
            {
              data.map((data,index) =>
              <Link to='detail'><div key={index} className="border rounded m-2 position-relative columnoverlay">
                <div className="overlay text-center bg-primary">
                  <p className="text-center">{data.name}</p>
                </div>
                <img className="bandera rounded" src={data.flags.png} alt="bandera" />
              </div></Link>              
              )
            }
          </div>
          <div className="d-flex justify-content-center">
            <Button onClick={() => setPage(page+20)}>More countries</Button> 
          </div>
        </>:
        <div className="d-flex align-items-center justify-content-center vh-100">
          <h2>Loading ...</h2>
        </div>
      }
      
    </>
  )
}

export default Home;