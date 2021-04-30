import './App.scss';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Switch ,Route } from 'react-router-dom'
import About from './pages/About'
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact'
import Blog from './pages/Blog'

function App(){
    return (
        <div className="App">
            <div className="sidebar"> 
                    <Navbar />
            </div>
            <div className="main-content">
                <div className="content">
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>                                             
                        <Route path="/about" exact>
                            <About />
                        </Route>      
                        <Route path="/contact" exact>
                            <Contact />
                        </Route>                        
                        <Route path="/blogs" exact>
                            <Blog />
                        </Route>   
                        <Route path="/portfolios" exact>
                            <Portfolio />
                        </Route>    
                    </Switch>
                </div>
            </div>                        
        </div>
    )
}

export default App;