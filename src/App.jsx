
import './App.css';
import Banner from './Components/Banner';
import Experts from './Components/Experts';
import Header from './Components/Header';
import NewsLetter from './Components/NewsLetter';
import Plan from './Components/Plan';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Experts />
      <NewsLetter />
      <Plan />
    </div>
  );
}

export default App;
