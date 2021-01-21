function Course(title,instructor,level,published,views) {
    this.title = title;
    this.instructor = instructor
    this.level = level;
    this.published = published;
    this.views = views;
    this.updateViews= function(){
        return ++this.views
    }
}

let courses=[
    new Course("Bee keeping", "Caleb Jones", 3, false, 2),
    new Course("Map Making", "Christopher Columbus", 10, true, 0)
]

console.log(courses)
console.log("there are "+  courses.length+ " courses available. the second one is called " + courses[1].title)
// let course01 = new Course("Bee keeping", "Caleb Jones", 3, false, 2)
// let course02 = new Course("Map Making", "Christopher Columbus", 10, true, 0)

// console.log(course01)
// console.log(course02)