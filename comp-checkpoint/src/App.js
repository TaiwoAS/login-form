
import './App.css';
import ProfilePhoto from "./component/profile/ProfilePhoto";
import FullName from "./component/profile/FullName";
import Address from "./component/profile/Address";


function App() {
  return (
    <div style = {{backgroundColor:"black", display:"flex", justifyContent:"space-around", marginLeft:"400px", marginRight:"400px",  marginTop:"350px" }}>
      <div><ProfilePhoto/></div>
      <div style={{ marginTop:"50px", marginRight:"100px"}}>
      <FullName/>
      <Address/>
      </div>
    </div>
  );
}

export default App;
