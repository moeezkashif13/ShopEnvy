import { settingCookiesForLoginSignup } from '@/utils/cookiesrelated';
import { createUser } from '@/utils/dbrelated';
import { accessToken, getRequest, requestToken } from '@/utils/twitterRelated';

import {NextResponse} from 'next/server'



export async function POST(request,response) {

const authorizeURL = new URL('https://api.twitter.com/oauth/authenticate');


  const bodyData = await request.json()


  if(bodyData.startprocess){

    const oAuthRequestToken = await requestToken();

    authorizeURL.searchParams.append('oauth_token', oAuthRequestToken.oauth_token);

  return NextResponse.json({ twitterAuthorizeURL:authorizeURL }, { status: 200 })

    
}else if(bodyData.afterredirection){

  
    try {
    
        const {oauth_token,oauth_verifier} = bodyData
        
        const oAuthAccessToken = await accessToken(oauth_token, oauth_verifier);
        
        const response = await getRequest(oAuthAccessToken);
       
        const gotuserdata = {
            name: response.name,
            email : response.email,
            profileimagefile : response.profile_image_url_https
        }

        const creatingUser = await createUser(gotuserdata,'twitter')

        
  await settingCookiesForLoginSignup(creatingUser)


        return NextResponse.json({ twittertokens:'twittertokens twittertokens twittertokens', response }, { status: 200 })


    } catch (error) {

        return NextResponse.json({ twittererror:'twittererror twittererror twittererror',error:error.message}, { status: 404 })

        
    }
 



}

    
  }
  