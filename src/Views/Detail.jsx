import {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import {Button} from 'react-bootstrap'

const Detail = () => {
  const {id} = useParams();
  const [data, setData] = useState(null);
  const [time, setTime] = useState(null);
  const API = 'https://restcountries.com/v2/alpha/'+ id;

  const fetchApi = async () => {
    try{
      const response = await fetch(API);
      const result = await response.json();
      setData(result);
    }catch (error){
      console.log(error)
    }
  }

  const fetchTime = async (lat,lon) => {
    const APItime = 'https://api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon='+ lon +'&units=metric&APPID=e7bd3697ff4d85a1f59a538730fa074d';
    try{
      const response = await fetch(APItime);
      const result = await response.json();
      setTime(result);
      console.log(result);
    }catch (error){
      console.log(error)
    }
  }

  useEffect(() => {
    fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if(data !== null){
      fetchTime(data.latlng[0],data.latlng[1] );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <div>
      {
        data !== null ?
        <>
          <h1 className="w-100 mt-2 text-center" > {data.name}</h1>
          <div className="d-flex w-100 text-center align-items-center justify-content-center flex-wrap">
            <img src={data.flags.png} alt="flag" />
            <h3 className="w-100">Capital: {data.capital}</h3>
            <h3 className="w-100">Population: {data.population}</h3>
            {
              time !== null ?
              <>
                <h3 className="w-100 mt-2">Weather status </h3>
                <img src={"http://openweathermap.org/img/wn/"+ time.weather[0].icon +"@2x.png"} alt="icon"  />
                <h4 className="w-100">{time.weather[0].description} </h4>
                <h4 className="w-100">Temp: {time.main.temp} <sup>0</sup></h4>
                <h4 className="w-100">Humidity: {time.main.humidity} %</h4>
              </>:
              <h3>loading weather status...</h3>
            }
            <div className="d-flex justify-content-center">
              <Link to="/"><Button variant="primary">Back to home</Button></Link>
            </div>
          </div>

          </>:
        <div className="d-flex align-items-center justify-content-center vh-100">
          <h2>Loading ...</h2>
        </div>
      }
    </div>
  )
}

export default Detail;
