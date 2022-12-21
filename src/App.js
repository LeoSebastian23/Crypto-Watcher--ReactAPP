import React,{useState,useEffect} from 'react'; 
import './App.css';
import axios from 'axios' //Biblioteca para solicitar peticion http
import TableCoins from './Components/TableCoins';


function App() {

  const [coins, setCoins] = useState([]); // Define una variable y una funcion para modificar esa variable.

  const [search, setSearch] = useState('');


  const getData = async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'); // Funciona de manera asincrona - Devuelve arreglo de 100 datos.
    //console.log(res.data);
    setCoins(res.data);
  } 

  useEffect(() => { //Ejecuta la funcion cuando se carga el componente.
      getData()
  }, [])
  

  return (
    <div className="container">
      <div className='row'>
        <div className='tittle'>COIN MARKET</div>
        <input type='text' placeholder='Search a Coin' className='form-control bg-dark text-light border-0 mt-4 text-center' onChange={e => setSearch(e.target.value)} />
        <TableCoins coins={coins} search={search}/>
      </div>
    </div>
  );
}

export default App;
