import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import SideCart from './components/SideCart/SideCart';

function App() {

  return (
    <div>
        <div className='header m-auto mb-3'>
            <Header></Header>
        </div>
        <div className="main row">
            <div className="home-container col-md-8">
                <Home></Home>
            </div> 
            <div className="sideCart col-md-4 card">
                <SideCart></SideCart>
            </div>
        </div>
        <Contact></Contact>
    </div>
  )
}

export default App