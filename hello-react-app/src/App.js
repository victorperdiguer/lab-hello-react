import MainSection from './components/MainSection';
import ArticleSection from './components/ArticleSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainSection/>
      <ArticleSection/>
      <Footer/>
    </div>
  );
}

export default App;
