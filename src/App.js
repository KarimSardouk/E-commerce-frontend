import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/header';
import AllProducts from './Components/AllProducts'
import ProductView from './Components/ProductView';
import Producttest from './Components/Producttest1';
import Producttest2 from './Components/Producttest2'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
        <Route path='/products/:productId' element={<ProductView/>} />
        <Route path='/products'element={<AllProducts/>} />
        <Route path='/test'element={<Producttest/>}/>
        <Route path='/test2'element={<Producttest2/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
