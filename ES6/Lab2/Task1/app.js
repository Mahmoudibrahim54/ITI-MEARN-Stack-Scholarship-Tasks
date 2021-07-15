let mkCourse = (course)=>{
    let defaultCourse = {
        courseName:'ES6',
         courseDuration:'3Days',
          courseOwner:"JavaScript"
          
    }
    let matchError = new Error("Parameters Not Match");

    if(typeof course !== 'object'){
        throw matchError;
    }
    let courseDefaultKeys = Object.keys(defaultCourse);
    let coursePassedKeys = Object.keys(course)
    if(courseDefaultKeys.length < coursePassedKeys.length){
        throw matchError;
    }else{
    for(let i = 0 ; i < coursePassedKeys.length;i++){
        if(!courseDefaultKeys.includes(coursePassedKeys[i])){
            throw matchError;
        }
    }
    }
    let setCourse = Object.assign(defaultCourse,course);
    console.log(setCourse);
    return `course name is : ${setCourse.courseName}, course duration is ${setCourse.courseDuration} and course Owner is ${setCourse.courseOwner}`

}


