
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Student from './page/Student';

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Student/>}/>
    </Routes>
    </BrowserRouter>
    /* <div className="App">
      <h1>welcome to react</h1>
      <Student/>
    </div> */
  );
}

export default App;
