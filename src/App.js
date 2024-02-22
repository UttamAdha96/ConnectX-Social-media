import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
// import { Navbar } from './Components/Navbar/Navbar';
// import { Sidebar } from './Components/Sidebar/Sidebar';
// import { Rightsidebar } from './Components/Rightsidebar/Rightsidebar';
import { Home } from './Components/Home/Home';
import UserProfile from './Components/UserProfile/UserProfile';
import Login from './Components/Login/Login';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Signin from './Components/Signup/Signin';
import Layout from './Components/Layout/Layout';

function App() {
  return (<>
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Signup' element={<Signin/>}/>
      <Route path='*' element={<ErrorPage/>}/>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
      </Route>
      <Route path='/Userprofile' element={<Layout/>}>
        <Route index element={<UserProfile/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  
  </>
  );
}

export default App;
