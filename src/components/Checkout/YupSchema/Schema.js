import * as yup from 'yup';


export const InformationComponentSchema = yup.object().shape({
    firstname:yup.string().required('First Name Required'),
    lastname:yup.string().required('Last Name is required'),
    email: yup
    .string()
    .email('Please enter a valid email format !')
    .required('Email is required please !'),
    phonenumber:yup.string().required('enter phone number'),
address1: yup.string().required('Please provide address'),
address2: yup.string().required('Not required'),

zipcode: yup.string()
.min(3, "Please enter more than 2 characters").max(5,'enter equal to 5 characters')
.required("This field is required"),



city:yup.string().required('city name Required'),


    
});


export const DeliveryComponentSchema = yup.object().shape({
    // firstname:yup.string().required('First Name Required'),
    firstname:yup.string().required('naam'),

    lastname:yup.string().required('Last Name is required'),
    email: yup
    .string()
    .email('Please enter a valid email format !')
    .required('Email is required please !'),
    phonenumber:yup.string().required('enter phone number'),
    billingadress1: yup.string().required('Please provide address'),
    billingadress2: yup.string().required('Not required'),
    billingzipcode: yup.string()
.min(3, "Please enter more than 2 characters").max(5,'enter equal to 5 characters')
.required("This field is required"),
city:yup.string().required('city name Required'),


    
});