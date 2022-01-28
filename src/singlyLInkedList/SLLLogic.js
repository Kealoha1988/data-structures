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

  get(index){
    if (index < 0 || index >= this.length) return null
    let count = 0
    let current = this.head
    while(count !== index){
      current = current.next
      count++
    }
    return current
  }

  insert(value, index){
    let newNode = new Node(value)
    if (index < 0 || index > this.length) return false
    if (index === this.length) this.push(value)
    if (index === 0) this.unshift(value)
    let current = this.head
    let count = 0
    while(count !== value){
      current = current.next
      count++
    }
    newNode.next = current.next
    current.next = newNode
    this.length++
    return this
  }


}

