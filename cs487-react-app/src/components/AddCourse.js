import React from 'react';
import { Button } from '@material-ui/core'

export default function AddCourse(props){
    const {onAdd, courses} = props;

    return(
        //Need to add DB query to search button onClick and set courses state to result of query
        <div className="addcourse">
            <form action="/" method="get">
                <label htmlFor="header-search">
                    <span className="visually-hidden"></span>
                </label>
                <input
                 type="text"
                    id="header-search"
                    placeholder="Search for courses"
                    name="s" 
                />
                <button type="submit">Search</button>   
            </form>
            <h2> </h2>
            <Button type="submit" variant='contained' color='primary' href="/MyCourseList"> 
                My Courses 
                
            </Button>
           
            {courses.map((course) => (
                <div className="showcourse" key={course}> 
                    <p style={{padding:'30px 20px',width:400,margin:"20px auto"}}>{ course }</p>
                    <button onClick={() => {onAdd(course)}}> Add </button>
                </div>
            ))}

        </div>
    );
}