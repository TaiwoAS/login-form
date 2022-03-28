import imageInSrc from "./imageInSrc.png";
import './style.css';
import './App.css';


function App() {
  return (
    <div style = {{border:"solid 1px black", maxWidth:"100vw"}}>
       <h1 className='title'>LANDMARKS IN LAGOS</h1>
       <br/>
       <img src={imageInSrc} alt='myImage'/>
       <br/>
       <img src="/imageInPublic.png" alt="myImage"/>
       <br/>
       <img src="/imageInPublic2.png" alt="myImage"/>
       <br/>

       {/* <video style = {{width="320",height="240",controls}} > 
       <source src="myVideo.mp4" type="video/mp4">
       </video> */}

    </div>


  );
}

export default App;
