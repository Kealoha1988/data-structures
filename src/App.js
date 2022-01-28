import './App.css';
import {SinglyLinkedList} from './singlyLInkedList/SLLLogic'


function App() {

  let list = new SinglyLinkedList()
  list.push('hello')
  list.push('you')

  let cool = "hello this is cool"

  return (
    <div className="App">
      <h1 style={{color: 'purple'}}>Data Sturctures!</h1>
      <br></br>
      <h3 style={{color: 'blue'}}>testing!!!!</h3>
      <h3>{list.tail.renderSelf()}</h3>
    </div>
  );
}

export default App;
