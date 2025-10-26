import './App.css'
import Team from './Components/Team';
import Todo from './Components/Todo';

function App() {

  return (
    <>
    <Person></Person>
    <Todo task="Learn React" isDone= {true} ></Todo>
    <Todo task="Core concepts" isDone= {false} ></Todo>
    <Todo task="Learn React" isDone= {true} ></Todo>
    <Team></Team>
    </>
  )
}
function Person(){
  const age = 25;
  return(
    <h3>I am a Person with age: {age}</h3>
  )
}
export default App
