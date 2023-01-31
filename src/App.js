
import './App.css';
import { Home,About,Contact } from './pages';
import Header from './components/headers/header';
import Footer from './components/footers/footer';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import User from './users/user';
import { MainLoyaut } from './loyaut/main-loyaut';

function App() {
  return (
    <div className="container">
     
      <Routes>
        <Route path='/' element={<MainLoyaut/>}>

        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/> 
        <Route path='contact' element={<Contact/>}/>  
        <Route path='user/:id' element={<User/>}/>
        </Route>
        <Route path='*' element={<h2>page note found</h2>}/>
      </Routes>
      
    </div>
  );
}

export default App;
