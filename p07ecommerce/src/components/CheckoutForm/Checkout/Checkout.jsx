import React , {useState, useEffect}from 'react';
import { Paper,Stepper,Step,StepLabel,Typography,CircularProgress,Divider,Button,CssBaseline } from '@material-ui/core';
import AddressForm from './AddressForm'
import PaymentForm from './PyamentForm'
import useStyles from './styles';
import { commerce } from '../../../lib/commerce';
import {Link, useHistory} from 'react-router-dom';

const steps= ["Shipping address","Payment details"];



const Checkout = ({cart, order, onCaptureCheckout,error}) => {
const classes = useStyles();
const [activeStep,setActiveStep] = useState(0);
const [checkoutToken,setCheckoutToken]=useState(null);
const history = useHistory();
const [isFinished, setIsFinished] = useState(false);

//useState to preserve all shipping related data from AddressForm
const[shippingData,setShippingData]=useState({});
useEffect(()=>{
  
    const generateToken = async() =>{
        try {
            //need 2 paras cart id
            const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
            setCheckoutToken(token);

        } catch (error) {
            history.pushSatate('/');
        }
    }

    generateToken();
},[cart])

const next= (data)=>{
    setShippingData(data);
    nextStep();
}

const nextStep = ()=> setActiveStep((prevActiveStep)=> prevActiveStep+1);
const backStep = ()=> setActiveStep((prevActiveStep)=> prevActiveStep-1);

const timeout = ()=>{
    setTimeout(()=>{
        setIsFinished(true);
    },3000)
}


const Form = ()=>activeStep ===0
?<AddressForm checkoutToken={checkoutToken} next={next}/>
:<PaymentForm shippintData={shippingData} checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} onCaptureCheckout={onCaptureCheckout} timeout={timeout}/>;

// const Confirmation = ()=> order.customer?(
//     <>
//         <div>
//             <Typography variant='h5'>Thank you for your purchase</Typography>
//         </div>
//         <br />
//         <Button component={Link} to="/" variant='outlined' type='button'>Back to Home</Button>
//     </>
const Confirmation = ()=>  isFinished?(
    <>
        <div>
            <Typography variant='h5'>Thank you for your purchase</Typography>
        </div>
        <br />
        <Button component={Link} to="/" variant='outlined' type='button'>Back to Home</Button>
    </>
):(
    <div className={classes.spinner}>
        <CircularProgress />
    </div>
)

if (error) {
    <>
        <Typography variant='h5'>Error:{error}</Typography>
    </>
}


    return(
     <>
     <CssBaseline />
    <div className={classes.toolbar}></div>
    <main className={classes.layout}>
        <Paper className={classes.paper}>
            <Typography variant="h4" align="center">Checkout</Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map(step =>(
                    <Step key={step}>
                        <StepLabel>{step}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {activeStep ===steps.length?<Confirmation />: checkoutToken && <Form />}
        </Paper>
    </main>
    </>
    )
}

export default Checkout
