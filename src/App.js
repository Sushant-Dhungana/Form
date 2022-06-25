
import './App.css';
// import UserForm from './components/CompanyDetails';
import Users from './components/Users';
import { Route, Routes} from 'react-router-dom';
import View from './components/View';
import PageNotFound from './components/PageNotFound';
function App() {
  return (
    <div className="App container">
      <Routes>
      <Route path="/" element={<Users/>}></Route>
      <Route path="/view" element={<View/>}></Route>
      <Route path="/*" element={<PageNotFound/>}></Route>
       {/* anything expect the view and default route it loadds page not found */}

     
      </Routes>

    </div>
  );
}

export default App;
