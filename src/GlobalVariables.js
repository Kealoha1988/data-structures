export class Node{
  constructor(value){
    this.value = value
    this.next = null
  }

  
  renderSelf() {
    return <p>{this.value}</p>;
  }
}

