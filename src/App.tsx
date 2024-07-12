import React,{useState,useEffect} from 'react'; 
import axios from 'axios' //Biblioteca para solicitar peticion http
import CryptoGrid from './Components/CryptoGrid';
import SearchInput from './Components/SearchInput';
import AppTitle from './Components/AppTittle';


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
    <div className="App container mt-4">
      <AppTitle/>
      <SearchInput search={search} setSearch={setSearch} />
      <CryptoGrid coins={coins} search={search} />
    </div>
  );
}

export default App;
