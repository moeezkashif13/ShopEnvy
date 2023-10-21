import axios from 'axios';
import { config } from './superadminconfig';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


export const createOrderInStrapi = async(lineItems)=>{

    // console.log(lineItems,'lineItems lineItems lineItems');

    const checking = await lineItems.data.map(eachItem=>{
        
        return eachItem.price.product
    })

    const findingProducts = await Promise.all(checking.map(async eachProd=>{
        const milGyaProduct = await stripe.products.retrieve(eachProd);
        console.log(milGyaProduct,'milGyaProduct milGyaProduct milGyaProduct');
        return milGyaProduct
    }));

console.log(findingProducts,'findingProducts findingProducts findingProducts');

    const placedOrders = findingProducts.map(eachProduct=>{
        return {
            "PreviewImage" : eachProduct.metadata.PreviewImage,
            "ProductName" : eachProduct.metadata.ProductName,
        }
    })

    // console.log();
      

    try {

        await axios.post('http://127.0.0.1:1337/api/orders?populate=PlacedOrders', {


        "data":{
            "Name" : findingProducts[0].metadata.Name,
            "Email": findingProducts[0].metadata.Email,
            "PlacedOrders":[...placedOrders],
            "Status" : "Order Received"
        }

        } ,config )

    } catch (error) {
        console.log(error,'error.message error.message error.message');
        throw new Error(error.message)
    }


}