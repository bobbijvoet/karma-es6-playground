export class MyClass {
  constructor() {
    this.friends = ['Ed', 'Dan', 'Hugo'];

    this.user = {
      name:'Bob',
      age:29

    }

  }


  returnNums() {
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return nums.filter(v => {
      return (v % 3 === 0);
    });
  }


  lexicalThis() {
    var {name, age} = this.user;

    var [ed,dan,hugo] = this.friends.map(f => {
      return (name + ' knows ' + f)
    });

    //console.log(`${name} is ${age} year old.`);


    //console.log(hugo);
    var test = Array.apply(null, { length: 10 }).map(function(element, index) { return index; })
    console.log(test);
  }


  templateStrings({name} = this.user, time = 'today') {
    return `Hello ${name}, how are you ${time}?`;
  }
}