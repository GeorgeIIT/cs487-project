import React from 'react';
import { Button } from '@material-ui/core'

export default function MyCourseList(props){
    const {onDelete, classesBeingTaken} = props;
    return(
        <aside>
            <h2> My Course List </h2>
            {classesBeingTaken.map((course) => (
                <div className="row" key={course}> 
                    <div> {course} </div>
                    <div>
                        <button onClick={() => {onDelete(course)}} className="delete"> Delete </button>
                    </div>
                </div>
            ))}
            <div>
                <Button type="submit" variant='contained' color='primary' href="/AddCourse"> Go Back to Search </Button>
            </div>
        </aside>
    )
}