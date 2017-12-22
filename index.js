function BoardMember(name, city, training) {
  this.name = name;
  this.city = city;
  this.training = training;
  this.veto = function() {
    return "No, I must disagree"
  }
  this.approve = function() {
    return "You can do that!"
  }
  this.doCharity = function() {
    return "I like to help people."
  }
  this.releasePressStatement = function() {
    return "You will see great things from Scuber."
  }
  this.sayHi = function() {
    `Hi, my name is ${this.name}. I am from ${this.city}, and I was trained in ${this.training}.`
  }
}
