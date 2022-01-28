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

  pop(){
    if (!this.head) return undefined
    let current = this.head
    let newTail = current
    while(current.next){
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if(this.length === 0){
      this.head = null
      this.tail = null
    }
  }

  shift(){
    if(!this.head)return null
    let tempHead = this.head
    this.head = tempHead.next
    this.length--
    if(this.length === 0)this.tail = null
    return tempHead
  }

  unshift(value){
    let newNode = new Node(value)
    if(!this.head){
      this.head = newNode
      this.tail = newNode
    }
    newNode.next = this.head
    this.head = newNode
    this.length++
    return this
  }


}

