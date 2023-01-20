import {BrowserRouter, Routes,Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify'; //allows you to add notifications to your app.
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import  Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";
import  View from "./pages/View";
import Update from "./pages/Update"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <ToastContainer position='top-center' />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/addcontact" element={<AddEdit />}/>
      <Route path="/update/:id" element={<Update />}/>
      <Route path="/view/:id" element={<View />}/>
      </Routes>
    </div>
     </BrowserRouter>
    
  );
}

export default App;
