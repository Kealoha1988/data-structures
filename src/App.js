import './App.css';
import {SinglyLinkedList} from './dataStructuresLogic/SLLLogic'


function App() {

  let list = new SinglyLinkedList()
  list.push('hello')
  list.push('you')
  list.push('how')
  list.push('are')
  list.push('you')

  const showAll = (sLL) => {
    let cool = []
    let current = sLL.head
    while(true){
      if(current.next){
      cool.push(current)
      current = current.next
      }
      if(!current.next){
      cool.push(current)
      break
      }
    }
    console.log(cool)
    return cool.map(c => c.renderSelf())
  }
  
 

 

  return (
    <div className="App">
      <h1 style={{color: 'purple'}}>Data Sturctures!</h1>
      <br></br>
      <div>{showAll(list)}</div>
    </div>
  );
}

export default App;
