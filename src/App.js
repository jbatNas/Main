import logo from './logo.svg';
import './App.css';
import './index.css';
import {Landing} from './component/landingpage'
import useNavigate from 'react-router-dom'

function App() {

let navigate = useNavigate();

  return (
    <div className="App">
     <p className='font-bold text-3xl text-center'>Project Penjana</p>
     <p>2022</p>
     <p>By: JbatYani</p>
     <button className='border-2' onClick = {() => navigate('/landingpage')}>Go to landing page</button>
     <div></div>
    </div>
  );
}

export default App;
