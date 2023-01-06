import './App.css';
import Uia from './Components/Uia/Uia.js'

// function timestring(date){
//   return date.toLocaleTimeString() ;
// }

// const ddmmyy = {
//   Date: '02',
//   Month: '12',
//   Year: '2022'
// };

function App() {
  return (
    <div>
      {/* <Uia name="Aditya Ghosh" dd={ddmmyy.Date} mm={ddmmyy.Month} yy={ddmmyy.Year} time={new Date()} /> */}
      {/* <Uia name="Aditya"/> */}
      <Uia></Uia>
      {/* load/app modify time : {timestring(new Date())} */}
    </div>
  );
}

export default App;
