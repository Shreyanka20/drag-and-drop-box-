import _logo from './booking-images/Group 112.png'
import _logo1 from './booking-images/Cloud upload.png'
//import _Draganddropfiles from './Draganddrop files'
import DragAndDropBox from './Draganddrop files';
import _rectancle from './booking-images/Rectangle 48.png'
import './App.css';


function App() {
  
  return (
    <div className="App">
      <img src={_logo} className="Logo" alt="logo"/> 
    <div>
      <DragAndDropBox />
    </div>
      </div>
      
      
  );
}

export default App;