import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import '../App.css';

const useStyles = makeStyles({
    root: {
        '& label.Mui-focused': {
            color: '#fb6542',
          },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#fb6542',
        },
        '&:hover .MuiInput-underline:before': {
            borderBottomColor: 'rgba(0, 0, 0, .42)',
        },
        '& .MuiButton-root': {
            backgroundColor: '#fb6542'
        },
    }  
});

const SignupForm = (props) => {
    const classes = useStyles();

    return (
        <div className="form" id={props.id} style={props.styles}>
            <h1>Sign up</h1>
            <p>or <a href="#">login to your account</a></p>
            <form noValidate autoComplete="off">
                <TextField
                    id="standard-basic"
                    label="Phone number"
                    type="tel"
                    fullWidth
                    className={classes.root}
                    style={{marginTop: '20px'}}
                />
                <TextField
                    id="standard-basic"
                    label="Name"
                    className={classes.root}
                    fullWidth
                    style={{marginTop: '20px'}}
                />
                <TextField
                    id="standard-basic"
                    label="Email"
                    type="email"
                    className={classes.root}
                    fullWidth
                    style={{marginTop: '20px'}}
                />
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    className={classes.root}
                    fullWidth
                    style={{marginTop: '20px', marginBottom: '20px'}}
                />
                <a href="#">Have a referal code?</a>
                <Button
                    variant="contained"
                    fullWidth
                    style={{
                        backgroundColor: '#fb6542', 
                        color: '#fff',
                        borderRadius: '0',
                        boxShadow: 'none',
                        marginTop: '20px'
                    }}>Sign up</Button>
            </form>
        </div>
    )
}

export default SignupForm;