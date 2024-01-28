class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  insert(item, index) {
    let tempList = {};
    for (let i = index; i < this.length; i++) {
      tempList[i + 1] = this.data[i];
    }
    this.data[index] = item;
    for (const key in tempList) {
      this.data[key] = tempList[key];
    }
    this.length++;
    return this.data;
  }
}

const newArray = new MyArray();
// console.log(newArray.get(0));
newArray.push("a");
newArray.push("b");
newArray.push("c");
newArray.push("d");
newArray.push("e");
console.log(newArray);
// console.log(newArray.pop());

// newArray.delete(1);
newArray.insert("hello", 10);
console.log(newArray);
