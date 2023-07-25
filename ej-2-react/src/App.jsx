
import './App.css'
import Footer from './assets/components/footer'
import Header from './assets/components/header'
import Home from './assets/components/home'

const link = 'https://www.linkedin.com/in/adri%C3%A1n-pastor-l%C3%B3pez-0598bb282/'
const name = 'Adrian'

function App() {
  

  return (
    
      <div>
        <Header name={name}/>
        <Home/>
        <Footer link={link}/>
        
        
      </div>
      
    
  )
}

export default App
