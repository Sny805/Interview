import logo from './logo.svg';
import './App.css';
import API from './API';
import Today from './Today';
import Tomorrow from './Tomorrow';
import Yesterday from './Yesterday';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <API/> */}
      <Router>
        <Routes>
          <Route exact path='/' element={<Today/>}/>
          <Route exact path='/yesterday' element={<Yesterday/>}/>
          <Route exact path='/tomorrow' element={<Tomorrow/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
