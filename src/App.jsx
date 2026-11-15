
import './App.css'
import  ToDO from "./todo"
import Name from './Name'
import Count from './Count'
function App() {
  const name = ["mehedi", "hasan", "kobir" , "kholil"]

  return (
    <>
  <h1> this  is project</h1>
  {/* <ToDO task =" hasan" ></ToDO>
   */}
   <Count></Count>

   {/* <Parson name='mehedi'  age='13' ></Parson>
   <Parson name='mehedi'  age='13' ></Parson>
   <Parson name='mehedi'  age='13' ></Parson>
   <Parson name='mehedi'  age='13'></Parson>
    */}
    {
      // name.map(n =><Name n={n}></Name>)
    }
    </>
  )
}
//  function Parson ({name,age}){
//   // const age = 12
// return(
//  <>
//   <p>Hi   i am  mehedi: {name}</p>
//   <h1> hello  whats up: {age}</h1>
//  </>
// )


//  }
 

export default App
