
import './App.css';
import {Routes,Route} from 'react-router-dom';

import Nav from './components/common/nav/Nav';

import Feed from './feed/Feed';

function App() {
  return (
   <>
    <Nav/>
    <div className='container'>
        <Routes>
          <Route path='/' element={Feed}/>
        </Routes>
    </div>
   
   </>
  );
}

export default App;
