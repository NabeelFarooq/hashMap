class HashMap {
  constructor() {
    this.arrSize = 50;
    this.arr = new Array(this.arrSize).fill(null);
    this.loadFactor = 0.75;
    this.occupied = this.load();
  }

  // checks the size of the array, and make it bigger when the load factor is over 0.75
  load() {
    const length = this.length();

    if (length / this.arr.length >= this.loadFactor) {
      this.arrSize = this.arrSize * 2;
      const oldArr = [...this.arr];
      this.arr = oldArr.concat(new Array(this.arrSize).fill(null));
    }

    return length;
  }

  check(value) {
    if (value < 0 || value >= this.arr.length) {
      throw new Error(`Trying to access index ${value}, which is out of bound`);
    }
  }

  // creates the hash code
  hash(string) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < string.length; i++) {
      hashCode = primeNumber * hashCode + string.charCodeAt(i);
      hashCode = hashCode % this.arr.length;
    }

    return hashCode;
  }

  // adds a new hash into the hash map
  set(key, value) {
    const hashCode = this.hash(key);

    this.arr[hashCode] = value;
    console.log(
      `Hashcode: ; ${hashCode}; \n arr[hashcode]: ${this.arr[hashCode]}`
    );
    this.load();
  }

  // returns the value of a specific key
  get(key) {
    this.check(key);

    if (!this.arr[key]) return null;
    return this.arr[key];
  }

  //check if the key exists in the hash map
  has(key) {
    if (!this.arr[key]) return false;

    return true;
  }

  // remove specific key
  remove(key) {
    if (!this.arr[key]) return false;

    this.arr.splice(key, 1);
    this.load();
    return true;
  }

  // returns how many items are in the hash map
  length() {
    let counter = 0;
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] !== null) {
        counter += 1;
      }
    }
    return counter;
  }

  // clears the entire array
  clear() {
    this.arr.fill(null);
  }
  //returns an array with all the values inside the hash map
  values() {
    let array = [];
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] != null) {
        array.push(this.arr[i]);
      }
    }
    return array;
  }

  //returns key - value pair of the hash map
  entries() {
    let array = [];
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] !== null) {
        array.push[(i, this.arr[i])];
      }
    }
    return array;
  }
}

const hashMap = new HashMap();
hashMap.set('name', 'Bogdan');
hashMap.set('a', 'Bogdan');
hashMap.set('sadasd', 'Bogdan');
hashMap.set('asdada', 'Bogdan');
hashMap.set('namei', 'Salut');
hashMap.set('name', 'Bogdan');

hashMap.set('age', 25);
hashMap.set('city', 'New York');
hashMap.set('job', 'Engineer');
hashMap.set('hobby', 'Reading');
hashMap.set('language', 'JavaScript');
hashMap.set('color', 'Blue');
hashMap.set('fruit', 'Banana');
hashMap.set('car', 'Tesla');
hashMap.set('animal', 'Lion');
hashMap.set('sport', 'Soccer');
hashMap.set('music', 'Classical');
hashMap.set('movie', 'Inception');
hashMap.set('book', 'The Great Gatsby');
hashMap.set('country', 'Japan');
hashMap.set('drink', 'Coffee');
hashMap.set('programming', 'Python');
hashMap.set('school', 'MIT');
hashMap.set('subject', 'Physics');
hashMap.set('team', 'Lakers');
hashMap.set('computer', 'MacBook');
hashMap.set('game', 'Chess');
hashMap.set('holiday', 'Christmas');
hashMap.set('weather', 'Sunny');
hashMap.set('food', 'Pizza');
hashMap.set('emotion', 'Happy');
hashMap.set('continent', 'Africa');
hashMap.set('instrument', 'Piano');
hashMap.set('company', 'Google');
hashMap.set('currency', 'Euro');
hashMap.set('planet', 'Mars');
hashMap.set('flower', 'Rose');
hashMap.set('shoe', 'Sneaker');
hashMap.set('constellation', 'Orion');
hashMap.set('element', 'Gold');
hashMap.set('time', 'Midnight');
hashMap.set('city2', 'Paris');
hashMap.set('drink2', 'Tea');
hashMap.set('sport2', 'Tennis');
hashMap.set('subject2', 'History');
hashMap.set('planet2', 'Earth');
hashMap.set('animal2', 'Elephant');
hashMap.set('book2', 'To Kill a Mockingbird');
hashMap.set('city3', 'London');
hashMap.set('food2', 'Sushi');
hashMap.set('emotion2', 'Sad');
hashMap.set('drink3', 'Orange Juice');
hashMap.set('instrument2', 'Violin');
hashMap.set('job2', 'Teacher');
hashMap.set('color2', 'Green');
hashMap.set('subject3', 'Mathematics');
hashMap.set('language2', 'Python');
hashMap.set('company2', 'Microsoft');
hashMap.set('team2', 'Yankees');
hashMap.set('movie2', 'The Shawshank Redemption');
hashMap.set('sport3', 'Basketball');
hashMap.set('holiday2', 'Thanksgiving');
hashMap.set('weather2', 'Rainy');
hashMap.set('time2', 'Noon');
hashMap.set('music2', 'Rock');
hashMap.set('flower2', 'Tulip');
hashMap.set('shoe2', 'High Heels');
hashMap.set('element2', 'Silver');
hashMap.set('currency2', 'Dollar');
hashMap.set('fruit2', 'Apple');
hashMap.set('game2', 'Monopoly');
hashMap.set('car2', 'Ford');
hashMap.set('constellation2', 'Ursa Major');
hashMap.set('school2', 'Harvard');
hashMap.set('country2', 'Australia');
hashMap.set('continent2', 'Antarctica');
hashMap.set('job3', 'Doctor');
hashMap.set('music3', 'Hip Hop');
hashMap.set('drink4', 'Coca Cola');
hashMap.set('animal3', 'Kangaroo');
hashMap.set('book3', '1984');
hashMap.set('city4', 'Tokyo');
hashMap.set('food3', 'Pasta');
hashMap.set('emotion3', 'Excited');
hashMap.set('element3', 'Platinum');
hashMap.set('team3', 'Red Sox');
hashMap.set('movie3', 'The Godfather');
hashMap.set('subject4', 'Chemistry');
hashMap.set('color3', 'Purple');
hashMap.set('language3', 'Java');

//console.log(hashMap.get(2131));
console.log('get(40):', hashMap.get(40));
console.log('get(22):', hashMap.get(22));
//console.log("has(2131):", hashMap.has(2131));
console.log('has(22):', hashMap.has(22));
hashMap.remove(7);
console.log('length:', hashMap.length());
//hashMap.clear();
console.log('values:', hashMap.values());
console.log('entries:', hashMap.entries());
hashMap.load();
console.log('arr:', hashMap.arr);
