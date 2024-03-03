import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Error from "./Pages/Error";
import Logout from "./Pages/Logout";
import Adminlayout from "./Component/layouts/Admin-layout";
import AdminUsers from "./Pages/Admin-Users";
import AdminContacts from "./Pages/Admin-Contacts";
import AdminUpdate from "./Pages/Admin-Update";

const App=()=>{
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/about" element={ <About/> } />
        <Route path="/contact"  element={<Contact/>}/>
        <Route path="/service"  element={<Service/>}/>
        <Route path="/register"  element={<Register/>}/>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/logout" element={<Logout/>} />
        <Route path="*" element={<Error/>} />
        <Route path="/admin" element={<Adminlayout />}>
          <Route path="users" element={<AdminUsers />}/>
          <Route path="contacts" element={<AdminContacts/>} />
          <Route path="users/:id/edit" element={<AdminUpdate/>} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
};

export default App;