import './App.css';
import Navpar from './Components/Navpar';
import Layout from './Components/Layout';

function App() {
  return (
    <div className='grid grid-cols-3'>
      <Navpar />
      <div className='col-span-2'>
      <Layout />
      </div>
    </div>

  );
}

export default App;
