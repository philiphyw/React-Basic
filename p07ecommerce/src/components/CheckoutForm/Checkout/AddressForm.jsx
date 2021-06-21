import React, {useState,useEffect} from 'react'
import { InputLabel,Select,MenuItem,Button,Grid,Typography } from '@material-ui/core'
import { useForm,FromProvider, FormProvider } from 'react-hook-form';
import FormInput from './CustomTextField';
import {commerce} from '../../../lib/commerce';
import { Link } from 'react-router-dom';

const AddressForm = ({checkoutToken, next}) => {
const methods = useForm();
const [shippingCountries, setShippingCountries] = useState([]);
const [shippingCountry, setShippingCountry] = useState('');
const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
const [shippingSubdivision, setShippingSubdivision] = useState('');
const [shippingOptions, setShippingOptions] = useState([]);
const [shippingOption, setShippingOption] = useState('');


//use Object.entries() mehthod to convert props of objects to arraies
const countries = Object.entries(shippingCountries).map( ([code,name]) => ({id:code,label:name}));
const subdivisions = Object.entries(shippingSubdivisions).map( ([code,name]) => ({id:code,label:name}));

//shippingOptions is an array be default
const options = shippingOptions.map(op =>({id:op.id,label:`${op.description} - ${op.price.formatted_with_symbol} `}))




const fetchShippingCountries = async(checkoutTokenId) =>{
    const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId);
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
}

const fetchSubdivisions = async(countryCode) =>{
    const {subdivisions} = await commerce.services.localeListSubdivisions(countryCode);
    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
}


const fetchShippingOptions = async(checkoutTokenId,country,region=null)=>{
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId,{country,region});
    setShippingOptions(options);
    setShippingOption(options[0].id);
}

useEffect(()=>{
    fetchShippingCountries(checkoutToken.id);
},[])

//should not put fetchSubdivisions into the same useEffect as fetchShippingCountries, since need to ensure the shipping to be loaded sucessfully first, then based on the selected Country to fetch subdivisions data
useEffect(()=>{
    shippingCountry && fetchSubdivisions(shippingCountry);
},[shippingCountry]) // whenever the shipping country changed, recall the fetchSubdivisions

useEffect(()=>{
    shippingSubdivision && fetchShippingOptions(checkoutToken.id,shippingCountry,shippingSubdivision)
},[shippingSubdivision])

    return (
        <>
            <Typography variant='h6' gutterBottom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data)=>next({...data,shippingCountry,shippingSubdivision,shippingOption}))}>
                    <Grid container spacing={3}>
                        <FormInput requried name="firstName" label="First Name"/>
                        <FormInput requried name="lastName" label="Last Name"/>
                        <FormInput requried name="address1" label="Address"/>
                        <FormInput requried name="email" label="Email"/>
                        <FormInput requried name="City" label="City"/>
                        <FormInput requried name="ZIP" label="Postal Code"/>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={shippingCountry} fullWidth onChange={(e)=>setShippingCountry(e.target.value)}>
                            {countries.map(country => (
                                <MenuItem key={country.id} value={country.id}>
                                {country.label}
                            </MenuItem>    
                            ))}                           
                            </Select>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Subdivision</InputLabel>
                            <Select value={shippingSubdivision} fullWidth onChange={(e)=>setShippingSubdivision(e.target.value)}>
                            {subdivisions.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>

                            ))}       
                            </Select>
                        </Grid>
 
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Options</InputLabel>
                            
                            <Select value={shippingOption} fullWidth onChange={(e)=>setShippingOption(e.target.value)}>
                            {options.map(option =>(
                               <MenuItem key={option.id} value={option.id}>
                                   {option.label}
                                </MenuItem>
                            ))}

                            </Select>
                        </Grid> 
                   
                    </Grid>
                        <br />
                        <div style={{display:'flex', justifyContent:'space-between'}}>
                                <Button component={Link} to="/cart" variant='outlined'>Back to Cart</Button>
                                <Button type="submit" variant='contained'>Next</Button>
                        </div>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm