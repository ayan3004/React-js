import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import Image from './Image';
import Img from './Img.jpg'
import Count from './Count';

function App() {
  return (
    <>
    <Heading head = "Like This Image" />
    <Image frame={Img} />
    <Count />
    </>
  );
}

export default App;
