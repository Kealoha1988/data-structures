import {Node} from "../GlobalVariables"

export class SinglyLinkedList{
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(value){
    let newNode = new Node(value)
    if (!this.head){
      this.head = newNode
      this.tail = this.head
    }else{
      this.tail.next = newNode
      this.tail = newNode
    }
  }


}

