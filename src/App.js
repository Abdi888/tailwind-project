import './App.css';
import Navpar from './Components/Navpar';
import Layout from './Components/Layout';

function App() {
  return (
    <div className='grid md:grid-cols-2'>
      <Navpar />
      <Layout />
    </div>

  );
}

export default App;
