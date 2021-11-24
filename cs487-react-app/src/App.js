import React, { useState } from 'react';
import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import AddCourse from './components/AddCourse';
import MyCourseList from './components/MyCourseList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' 

const App=()=> {
  const [courses, setCourses] = useState(['CS 551 Operating System Design and Implementation', 'CS 411 Computer Graphics', 'CS 542 Computer Networks I: Fundamental']);
  const [classesBeingTaken, setClassesBeingTaken] = useState(['CS 551 Operating System Design and Implementation']);
 
  const onDelete = (courseName) => {
    const newCourses = classesBeingTaken.filter(course => course !== courseName);
    setClassesBeingTaken(newCourses);
  }

  const onAdd = (courseName) => {
    let found = 0;
    for(var i=0; i<classesBeingTaken.length; i++){
      if(classesBeingTaken[i].match(courseName)){
        found = 1;
      }
    }
    if(!found){
      const newCourse = courses.filter(course => course === courseName);
      setClassesBeingTaken([...classesBeingTaken] + newCourse);
      console.log(classesBeingTaken);
    }
  }

  return (
     <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route exact path="/SignUp">
            <SignUp/>
          </Route>
          <Route exact path="/AddCourse">
            <AddCourse onAdd={onAdd} courses={courses}/>
          </Route>
          <Route exact path="/MyCourseList"> 
            <MyCourseList onDelete = {onDelete} setCourses={setCourses} classesBeingTaken={classesBeingTaken}/>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}
 
export default App;