// conventional way to write objects

// let convetionalCourse = new Object()

// convetionalCourse.title = "Javascript"
// convetionalCourse.instructor = "Daniel"
// convetionalCourse.level= 1
// convetionalCourse.published = true
// convetionalCourse.views= 0

// console.log(convetionalCourse)



// Short hand way of writing objects

let shortHandCourse = {
    title: "JS essentials",
    instructor: "Lucas",
    level: 1,
    published: true,
    views: 0,
    // writing functions inside of an objects
    updateViews: function(){
        return ++shortHandCourse.views
    }
} 

console.log(" there are currently 0 views", shortHandCourse)
shortHandCourse.updateViews()
// can grav
console.log("there is currently ", shortHandCourse.views, " view")
shortHandCourse.updateViews()
console.log("there is currently " + shortHandCourse.views + " views")