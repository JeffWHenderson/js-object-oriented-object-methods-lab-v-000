function BoardMember(name, city, job) {
  this.name = name
  this.city = city
  this.job = job
  this.veto = function() {
    return "No, I must disagree"
  }
  this.approve = function() {
    return "You can do that!"
  }
}
