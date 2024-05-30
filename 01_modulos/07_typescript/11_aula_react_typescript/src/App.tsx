import { useState } from 'react';
import './App.css';
import AppHeader from './components/Header/HeaderComponent';
import CountButton from './components/Count/CountButtonComponent';
import Footer from './components/Footer/FooterComponent';

function App() {
  const [title, setTitle] = useState<string>('Hello, Wolrd!');
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <header>
        <AppHeader
          title={title}
          setTitle={setTitle}
        />
      </header>

      <CountButton
        setCount={setCount}
      />

      <body>
        <h1>
          {title}
        </h1>

        <h2>
          {count}
        </h2>

        <Footer />
      </body>
    </div>
  );
}

export default App;