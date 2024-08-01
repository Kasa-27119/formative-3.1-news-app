import './App.css'
import { HashRouter } from 'react-router-dom'

// import nav components
import Header from './components/nav/Header'
import Footer from './components/nav/Footer'

// import links
import Links from './routes/Links'


const App = () => {

  return (
    <>
      <HashRouter>
        <Header/>
        <Links/>
        <Footer/>
      </HashRouter>

      <Footer/>
    </>
  );
}

export default App
