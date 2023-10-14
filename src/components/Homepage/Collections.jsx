export default function Collections(){

    const sizesArray = ['first',
    'second',
    'third',
    // 'fourth'

]

const gotAllWork = ['https://cdn.shopify.com/s/files/1/0041/8797/9905/products/2_ab1b2c23-a735-4128-81c3-79e6cff15f19_400x.jpg?v=1680007053','https://cdn.shopify.com/s/files/1/0041/8797/9905/files/2_96283854-d3b9-4c38-91d8-d8c829d92e8a_400x.jpg?v=1685976680','https://cdn.shopify.com/s/files/1/0041/8797/9905/products/2_d4280d7b-e15c-496c-9ae8-c65f028c8ccc_400x.jpg?v=1680007247','https://cdn.shopify.com/s/files/1/0041/8797/9905/products/2_830e6648-24ec-4929-8cc6-97083c36573a_400x.jpg?v=1680007273','https://cdn.shopify.com/s/files/1/0041/8797/9905/products/2_5b499c3e-0bd6-4880-a45e-71cb02fbab36_400x.jpg?v=1680007502','https://cdn.shopify.com/s/files/1/0041/8797/9905/files/2_ecc93f46-8ffb-4274-9c66-c1eaab12dbe1_400x.jpg?v=1691131675']
   

    
return (


    <div style={styles.pin_container}>
 
    {gotAllWork.map((eachWork,index)=>{
    
        const getImage = gotAllWork[index]
       
            return   <div style={{
                ...styles.card,
                ...styles[sizesArray[Math.floor(Math.random()*sizesArray.length)]]
                }}>
    
         <div className="h-full w-full overflow-hidden">
        
         <img style={{transition:'all 0.3s '}} className=" hover:scale-110 w-full max-w-full h-full object-cover object-center" src={getImage} alt="" />
        
        
        
         </div>

         <div className="absolute top-0 text-center h-full w-full " style={{backgroundColor:'rgba(0,0,0,0.15)'}}>         </div>

         <div className="absolute top-0 text-center h-full w-full flex items-center justify-center">

<p className="text-6xl font-extrabold">Mens</p>


         </div>
         
    
    
    
    
                </div>
        
           })
    
    
    }
    
    
    
    
    
    </div>
    
    
    
    )

}


const styles = {
    pin_container: {
    margin: '0 auto',
    padding: 0,
    width: '98%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 433px)',
    gridAutoRows: '10px',
justifyContent: 'space-between',

},

    card: {

        position:'relative',

        padding: 0,
        borderRadius: '5px',
        width:'100%',
        color:'white',
        margin:'10px 0 0 0'
        
        
        },
        first: {
        // gridRowEnd: 'span 44',
        gridRowEnd: 'span 44',

        },
        second: {
            // gridRowEnd: 'span 72',
            gridRowEnd: 'span 64',

        },

        third: {

            // gridRowEnd: 'span 64'
            gridRowEnd: 'span 56'
        },

        // fourth: {
        // gridRowEnd: 'span 47',  

        // },

        
    
   }
   