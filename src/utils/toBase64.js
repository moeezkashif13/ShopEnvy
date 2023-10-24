import axios from "axios";

const secondPart = async (dataUrl)=>{


    
  const formData = new FormData();

  formData.set("image",dataUrl.split('base64,')[1])

  // console.log(formData.get("image"));
  
return   await axios.post('https://api.imgbb.com/1/upload?key=ecd9aca473a2b9286cda81b8ac68dc53&expiration=86400',formData,{
    headers:{
      "Content-Type" : "multipart/form-data"
    }
  }).then(resp=>{
    return resp.data.data.thumb.url
  }).catch(err=>{
    console.log(err);
  })




}


export const toBase64 =  (url,callback)=> {
  let check = 213123 ;
      var xhr = new XMLHttpRequest();
      xhr.onload =  function() {
        var reader = new FileReader();
        reader.onloadend = async function() {
          callback(reader.result);
// check  = await secondPart(reader.result)


// console.log(check,'check  vcheck check');

// return check

        }
        reader.readAsDataURL(xhr.response);
      };
      xhr.open('GET', url);
      xhr.responseType = 'blob';
      xhr.send();
    

      
    }
