import FullName from './component/Profile/FullName'
import Address from './component/Profile/Address'
import ProfilPhoto from './component/Profile/ProfilPhoto'
import imgSrc from './image/mesut.jpg'
import imgSrc2 from './image/arsenal.jpg'
import './App.css';

const contact = [{
        name: "Mesut Ozil",
        address: "London",
        playsfor: "Arsenal",
        nationality: "German-turkish"
}]

function App() {
  return (
    <div className="App">
      <FullName/>
      <ProfilPhoto imgSrc={imgSrc} name="mesut"/>
      <Address/>
      <img src={imgSrc2} name="arsenal"/>

    </div>
  );
}

export default App;
