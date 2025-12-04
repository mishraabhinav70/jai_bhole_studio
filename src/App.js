import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Home />
      {/* Main content grows to push footer down */}
      <main className="flex-grow">
        {/* your pages */}
      </main>

      <Footer />
    </div>
  );
}

export default App;

