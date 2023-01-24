import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Apps from './Pages/Apps';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Linux from './Pages/Linux';
import Programming from './Pages/Programming';

function App() {
    return (
        <div className='container'>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/apps' element={<Apps />} />
                    <Route path='/linux' element={<Linux />} />
                    <Route path='/programming' element={<Programming />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
