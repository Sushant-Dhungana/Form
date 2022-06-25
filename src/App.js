
import './App.css';
// import UserForm from './components/CompanyDetails';
import Users from './components/Users';
import { Route, Routes} from 'react-router-dom';
import View from './components/View';
function App() {
  return (
    <div className="App container">
      <Routes>
      <Route path="/" element={<Users/>}></Route>
      <Route path="/view" element={<View/>}></Route>
     
      </Routes>

    </div>
  );
}

export default App;
