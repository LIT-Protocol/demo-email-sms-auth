import './App.css';
import { useState } from 'react';
import {Otp} from './Otp';
import { makeAccountFactoryContract } from './contract/accountFactory';

function App() {
  console.log(makeAccountFactoryContract());

  const [npmRepo, setNpmRepo] = useState('');
  const [demoRepo, setDemoRepo] = useState('');
  const [lang, setLang] = useState('json');
  const [data, setData] = useState({
    data: {
      name: 'Lit Protocol',
      description: 'Threadshold cryptography for the win!',
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <h4>
          Lit SMS / Email Authentication and Registration + make Account Abstraction Wallet<br/>
        </h4>
      </header>
      <div className="Otp">
        <Otp/>
      </div>
    </div>
  );
}


export default App;
