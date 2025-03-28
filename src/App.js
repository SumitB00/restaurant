
import './App.css';
import Navbar from './component/Navbar'
import Home from './component/Home'; 
import About from './component/About';
import Menu from './component/Menu'
import Data from './component/Data'
import Product from './component/Product'
import Fresh from './component/Fresh'
import Review from './component/Review';
import John from './component/John';
import { Contact } from './component/Contact';
import Blogs from './component/Blogs';
import Our from './component/Our';
import Fotter from './component/Fotter';
function App() {
  return (
 <>
 <Navbar/>
 <Home/>
 <About/>
 <Menu/>
 <Data/>
 <Product/>
 {/* <Fresh/> */}
 <Review/>
 <John/>
 <Contact/>
 <Blogs/>
<Our/>
<Fotter/>
 </>
  );
}

export default App;
