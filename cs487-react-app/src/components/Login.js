import React, { useState } from "react";
import { Grid, Paper, TextField, Button, makeStyles, Select, MenuItem, InputLabel } from '@material-ui/core'

const useStyles = makeStyles({
    field: {
        marginTop: 30,
        marginBottom: 30,
        display:'block'
    }
})


const Login=()=>{
    const paperStyle={padding:'30px 20px',width:500,margin:"20px auto", height: 500}
    const headerStyle={margin:10}
    const classes = useStyles()

    const[email, enteredEmail] = useState('')
    const[password, eneteredPassword] = useState('')
    
    const[emailError, setEmailError] = useState(false)
    const[passwordError, setPasswordError] = useState(false)
    const[admin, setAdminFlag] = useState(false)

    const handleSumbit = (e) =>{
        e.preventDefault()

        setEmailError(false)
        setPasswordError(false)

        if(email === '' || !email.includes('@')){
            setEmailError(true)
        }

        if (password === ''){
            setPasswordError(true)
        }

        if(admin){
            //make querry for admin login
            console.log("admin")
        } else{
            //make student login querry
        }

        if(!emailError && !passwordError){
            console.log(email, password)
        }
    }

    const handleCreate = (e) =>{
        e.preventDefault()
        
        //switch to create form
    }

    const handleChange = (e) =>{
        e.preventDefault()

        setAdminFlag(admin)


    }
    return(
        <div>
            <Grid>
                <Paper elevation = {20} style={paperStyle}>
                    <h2 style={headerStyle}>
                        Login
                    </h2>
                    <form noValidate autoComplete="off" onSubmit={handleSumbit} style={{padding: 8}}>
                        <TextField onChange={(e)=>enteredEmail(e.target.value)} className={classes.field} fullWidth label='Enter userame/email' variant="outlined" error={emailError}/>
                        <TextField onChange={(e)=>eneteredPassword(e.target.value)} className={classes.field} fullWidth label='Enter password' variant="outlined" error={passwordError}/>
                        <Button type='Create' variant='contained' color='primary'>
                            Login
                        </Button>
                        
                    </form>
                    <form noValidate autoComplete="off" onSubmit={handleCreate} style={{padding: 8}}>
                        <Button type='Create' variant='outlined' color='primary'>
                            Create Account
                        </Button>
                    </form>
                    <form noValidate autoComplete="off" onSubmit={handleCreate} style={{padding: 8}}>
                    <InputLabel id="demo-simple-select-label">Login Type</InputLabel>
                        <Select 
                        labelId ="demo-simple-select-label"
                        id="demo-simple-select"
                        value={admin}
                        label="Type"
                        onChange={handleChange}>
                        <MenuItem value={false}>Student</MenuItem>
                        <MenuItem value={true}>Admin</MenuItem>
                        </Select>    
                    </form>  
                </Paper>
            </Grid>
        </div>

    )
}

export default Login;