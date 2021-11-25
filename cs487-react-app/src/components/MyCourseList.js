import React from 'react';
import { Button } from '@material-ui/core'

export default function MyCourseList(props){
    const {onDelete, classesBeingTaken} = props;
    console.log(classesBeingTaken);
    return(
        <div>
            <h2> My Course List </h2>
            {(classesBeingTaken || []).map((course) => (
                <div className="row" key={course}> 
                    <div> {course} </div>
                    <div>
                        <button onClick={() => {onDelete(course)}} className="delete"> Delete </button>
                    </div>
                    <h2>   </h2>
                </div>
            ))}
                <Button type="submit" variant='contained' color='primary' href="/AddCourse"> Go Back to Search </Button>
                <h2>   </h2>
                <Button type="submit" variant='contained' color='primary' href="/Connections"> 
                    Generate Network 
                </Button>
        </div>
    )
}