import axios from 'axios';


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
      console.log(findingProducts[0],'findingProducts[0] findingProducts[0] findingProducts[0]');
    console.log(placedOrders,'placedOrders placedOrders placedOrders');

    try {

        await axios.post(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/orders?populate=PlacedOrders`, {


        "data":{
            "Name" : findingProducts[0].metadata.Name,
            "Email": findingProducts[0].metadata.Email,
            "PlacedOrders":[...placedOrders],
            "Status" : "Order Received"
        }

        } , {
            headers:{
                Authorization : `Bearer 4d54d7bc4e9c781d7cebb1d17a7d4c8edeca8a56d387f7b21f842c1936cec89bcb395591e0466a38eca69cdb8a41afc93f2633500ffcc552a75ee424efa787d83ad2008ea8834300d7e1a2ac261e1220b7321499280ce9de043b3e95842903dbf9de6978f2811eda209b6978fade86c4770d56dc16740e21592d11b83d7a787d`
            }
        } )

    } catch (error) {
        console.log(error,'error.message error.message error.message');
        throw new Error(error.message)
    }


}