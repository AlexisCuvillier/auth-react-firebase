import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar';
import SignUpModal from './components/SignUpModal';
import Home from './pages/Home';
import Private from './pages/Private/PrivateHome/Private';
import PrivetHome from './pages/Private/PrivateHome/PrivetHome';

function App() {
  return (
    <>
    
      <SignUpModal />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='private' element={<Private />}>
            <Route path='/private/private-home' element={<PrivetHome />} />
        </Route>
      </Routes>
    </>
  );
}


export default App;
