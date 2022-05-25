import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar';
import SignUpModal from './components/SignUpModal';
import Home from './pages/Home';

function App() {
  return (
    <>
    
      <SignUpModal />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}


export default App;
