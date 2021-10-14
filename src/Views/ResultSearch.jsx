import {useState, useEffect} from 'react'
import {useParams, Link } from 'react-router-dom';
import {Button } from 'react-bootstrap';
const ResultSearch = () => {
  const {str} = useParams();
  const [data, setData] = useState(null)
  const API = 'https://restcountries.com/v2/name/';

  const fetchApi = async () => {
    try{
      const response = await fetch(API + str);
      const result = await response.json();
      setData(result);
    }catch (error){
      console.log(error)
    }
  }

   useEffect(() => {
    fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [str])

  return (
    <>
      {
        data !== null  ?
        <>
          <div className="d-flex p-2 justify-content-between align-items-center flex-wrap" >
            {
              data.length > 0 ?
                data.map((data,index) =>
                <Link key={index} to={`/detail/${data.alpha3Code}`}><div  className="border rounded m-2 position-relative columnoverlay">
                  <div className="overlay text-center bg-primary">
                    <p className="text-center">{data.name}</p>
                  </div>
                  <img className="bandera rounded" src={data.flags.png} alt="bandera" />
                </div></Link>              
              )
              :
              <div className="d-flex w-100 align-items-center justify-content-center vh-100 flex-wrap">
                <h2 className="text-center d-block w-100 ">No results found</h2>
                <Link className="text-decoration-none text-black" to="/"><p className="w-100 border text-center">Back to home</p></Link>
              </div>


            }
          </div>
        </>:
        <div className="d-flex align-items-center justify-content-center vh-100">
          <h2>Loading ...</h2>
        </div>
      }
      
    </>
  )
}

export default ResultSearch;