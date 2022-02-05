

export class LNode{
  constructor(value){
    this.value = value
    this.next = null
  }
  renderSelf = () => <div class="node">{this.value}</div>
}

export class TNode{
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
  renderSelf = () => <div class="node">{this.value}</div>
}
