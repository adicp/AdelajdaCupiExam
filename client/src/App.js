import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddPirate from './components/AddPirate';
import AllPirates from "./components/AllPirates"
// import EditPet from './components/EditPet';
import OnePirate from './components/OnePirate'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  exact path = "/" default element={<AllPirates />} />
        <Route  exact path = "/pirates" default element={<AllPirates />} />
        <Route  exact path = "/pirate/new" element = {<AddPirate />} />
        <Route  exact path = "/pirates/:id/" element = {<OnePirate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
