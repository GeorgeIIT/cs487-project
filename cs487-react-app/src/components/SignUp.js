import React, { useState } from "react";
import { Grid, Paper, TextField, Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display:'block'
    }
})

function stringContainsNumber(_string) {
    return /\d/.test(_string);
}

function stringContainsOnlyNumbers(_string) {
    return /^\d+$/.test(_string);
}

const SignUp=()=>{
    const paperStyle={padding:'30px 20px',width:300,margin:"20px auto"}
    const headerStyle={margin:0}
    const classes = useStyles()

    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[phoneNumber, setPhoneNumber] = useState('')
    const[password, setPassword] = useState('')
    const[confirmPassword, setConfirmPassword] = useState('')

    const[nameError, setNameError] = useState(false)
    const[emailError, setEmailError] = useState(false)
    const[phoneNumberError, setPhoneNumberError] = useState(false)
    const[passwordError, setPasswordError] = useState(false)
    const[confirmPasswordError, setConfirmPasswordError] = useState(false)

    const handleSumbit = (e) =>{
        e.preventDefault()
        
        //Need to reset the state of the error variables
        setNameError(false)
        setEmailError(false)
        setPhoneNumberError(false)
        setPasswordError(false)
        setConfirmPasswordError(false)

        if(name === '' || stringContainsNumber(name)){
            setNameError(true)
        }
        if(email === '' || !email.includes('@')){
            setEmailError(true)
        }
        if(!stringContainsOnlyNumbers(phoneNumber)){
            setPhoneNumberError(true)
        }
        if(password === ''){
            setPasswordError(true)
        }
        if(confirmPassword === '' || password !== confirmPassword){
            setConfirmPasswordError(true)
        }

        if(!nameError && !emailError && !phoneNumberError && !passwordError && !confirmPasswordError){
            console.log(name, email, phoneNumber, password, confirmPassword)
        } 
    }
    return(
        <div>
            <Grid>
                <Paper elevation = {20} style={paperStyle}>
                    <h2 style={headerStyle}>
                        Create Account
                    </h2>
                    <form noValidate autoComplete="off" onSubmit={handleSumbit}>
                        <TextField onChange={(e)=>setName(e.target.value)} className={classes.field} fullWidth label='Enter Name' variant="outlined" error={nameError}/>
                        <TextField onChange={(e)=>setEmail(e.target.value)} className={classes.field} fullWidth label='Enter Email' variant="outlined" error={emailError}/>
                        <TextField onChange={(e)=>setPhoneNumber(e.target.value)} className={classes.field} fullWidth label='Enter phone number, optional' variant="outlined" error={phoneNumberError}/>
                        <TextField onChange={(e)=>setPassword(e.target.value)} className={classes.field} fullWidth label='Enter Password' variant="outlined" error={passwordError}/>
                        <TextField onChange={(e)=>setConfirmPassword(e.target.value)} className={classes.field} fullWidth label='Confirm Password' variant="outlined" error={confirmPasswordError}/>
                        <Button type='Create' variant='contained' color='primary'>
                            Sign Up
                        </Button>
                        <Button type='Create' variant='contained' color='primary' href="/AddCourse">
                            Add Courses
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </div>

    )


}

export default SignUp;