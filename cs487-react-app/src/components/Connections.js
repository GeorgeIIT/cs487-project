import { makeStyles } from '@material-ui/styles';
import { List, ListItem } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display:'block'
    }
})

const Connections=()=>{
    let connections = [
    {
        Name: "Norma Fisher",
        Takes: "CS 551 Operating System Design and Implementation",
        ContactInfo: "nfisher@hawk.iit.edu"
    },
    {
        Name: "Ashley Myers",
        Takes: "CS 551 Operating System Design and Implementation",
        ContactInfo: "amyers@hawk.iit.edu"
    },
    {
        Name: "Ryan David",
        Takes: "CS 551 Operating System Design and Implementation",
        ContactInfo: "rdavid@hawk.iit.edu"
    },
    {
        Name: "Erin Pena",
        Takes: "CS 551 Operating System Design and Implementation",
        ContactInfo: "epena@hawk.iit.edu"
    },
    {
        Name: "Nicole Collier",
        Takes: "CS 551 Operating System Design and Implementation",
        ContactInfo: "ncollier@hawk.iit.edu"
    },
    ]

    const classes = useStyles()

    return(
         <div>
            <h2> Connections </h2>
            <List>
                {(connections || []).map((connection) => (
                <ListItem className={classes.field} key={connection.Name}> {connection.Name} {connection.Takes} {connection.ContactInfo}
                <button > Add </button>
                </ListItem>
                ))}
            </List>
        </div>
    )

}

export default Connections;