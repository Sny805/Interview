import logo from './logo.svg';
import './App.css';
import API from './Fetch Api/API';
import Today from './Today';
import Tomorrow from './Tomorrow';
import Yesterday from './Yesterday';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Api_Form from './Fetch Api/Api_Form';
import Rest from './Fetch Api/Rest';
import Axios from './Axios/Axios';


function App() {
  return (
    <div className="App">
      {/* <API/> */}
      <Axios/>
      {/* <Api_Form/> */}
        {/* <Rest/>  */}
       {/* <fetch_method/>  */}
      {/* <Router>
        <Routes>
          <Route exact path='/' element={<Today/>}/>
          <Route exact path='/yesterday' element={<Yesterday/>}/>
          <Route exact path='/tomorrow' element={<Tomorrow/>}/>
        </Routes>
      </Router> */}

    </div>
  );
}

export default App;
