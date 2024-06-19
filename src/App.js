import BlogDetails from './components/BlogDetails';
import Navbar from './components/Navbar';
import Create from './pages/Create';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/create" element={ <Create /> } />
            <Route path="/blogs/:id" element={ <BlogDetails /> } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
