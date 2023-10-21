export default function Collections(){

    const sizesArray = ['first',
    'second',
    'third',
    // 'fourth'

]

const gotAllWork = ['https://uniworthdress.com/uploads/product/0e5b23266cda72e1fbb31d026de7acc0.jpg?h=120','https://uniworthdress.com/uploads/product/db99de265d84b55416a5a4227ef4ad0f.jpg?h=120','https://uniworthdress.com/uploads/product/0b9a9229981f4a391592490abfc6d917.JPG?h=120']
   

    
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
   