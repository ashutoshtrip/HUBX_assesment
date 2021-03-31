import Navbar from './components/Navbar/Navbar';
import './App.css';
import Comp1 from './components/HomeComponents/Comp1';
import Comp2 from './components/HomeComponents/Comp2';
import Comp3 from './components/HomeComponents/Comp3';
import Comp4 from './components/HomeComponents/Comp4';
import Comp5 from './components/HomeComponents/Comp5';
import Comp6 from './components/HomeComponents/Comp6';
import ModalButton from './components/HomeComponents/Modal';
function App() {
  return (
    <div className="App">
     <Navbar />
     <Comp1/>
   
     <div className="comp">
     
     <Comp2 />
     
     <Comp3 />
     <Comp4 />
     <Comp5/>
  
     </div>
     <ModalButton />
    </div>
  );
}

export default App;
