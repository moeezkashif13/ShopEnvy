import {NextResponse} from 'next/server'

import {createUser} from '@/utils/dbrelated'



const {google} = require('googleapis');

const crypto = require('crypto')



const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client();

const oauth2Client = new google.auth.OAuth2(
  process.env.Google_Client_ID,
  process.env.Google_Client_Secret,
  process.env.Google_Redirect_URI
);

// generate a url that asks permissions for Blogger and Google Calendar scopes
const scopes = [
    'openid',
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/userinfo.profile'
];

async function verify(id_token) {
  
  const ticket = await client.verifyIdToken({
      idToken: id_token,
      audience: process.env.Google_Client_ID,  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload();
  return payload;
  // const userid = payload['sub'];
  // If request specified a G Suite domain:
  // const domain = payload['hd'];
}



const state = crypto.randomBytes(32).toString('base64')



export async function POST(request,response) {

  const bodyData = await request.json()


  if(bodyData.startprocess){

    try {
      

    const url = oauth2Client.generateAuthUrl({
        // 'online' (default) or 'offline' (gets refresh_token)
        access_type: 'offline',
      
        // If you only need one scope you can pass it as a string
        scope: scopes,
          // Enable incremental authorization. Recommended as a best practice.
  include_granted_scopes: true,

  state : state
  

      });




  return NextResponse.json({ url:url }, { status: 200 })

} catch (error) {
  console.log(error,'errorrr');      
}




}else if(bodyData.afterredirection){

  try {
    
    if(bodyData.state != state){
      throw new Error('maslaa aagyaa ustadd')
    }

    console.log('heelllooooo');

    // VALIDDD CODE
  // let {tokens}  = await oauth2Client.getToken(bodyData.authcode);
  // oauth2Client.setCredentials(tokens);

  // console.log(tokens,'tokens tokens tokens');

  // const {id_token,expiry_date}  = tokens;


  // const gotuserdata = await  verify(id_token)

  // console.log(gotuserdata,'gotuserdata gotuserdata');

  // const prismaResp = await createUser(gotuserdata,'google')
  // console.log(prismaResp,'prismaResp prismaResp prismaResp');

    // VALIDDD CODE
    
  // prisma.$disconnect();
  






  return NextResponse.json({ tokens:'tokensss' }, { status: 200 })


} catch (error) {
  console.log('invaliddd tokensss',error.message);
  return NextResponse.json({ error:'error fromm serverrr' }, { status: 400 })

}



}

  


    
  }
  