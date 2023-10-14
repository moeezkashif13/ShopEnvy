import { createUser } from '@/utils/dbrelated';
import { accessToken, getRequest, requestToken } from '@/utils/twitterRelated';
import {NextResponse} from 'next/server'

const authorizeURL = new URL('https://api.twitter.com/oauth/authenticate');


export async function POST(request,response) {

  const bodyData = await request.json()


  if(bodyData.startprocess){

    const oAuthRequestToken = await requestToken();

    authorizeURL.searchParams.append('oauth_token', oAuthRequestToken.oauth_token);

  return NextResponse.json({ twitterAuthorizeURL:authorizeURL }, { status: 200 })

    
}else if(bodyData.afterredirection){

    console.log(bodyData,'bodyData bodyData bodyData');


    try {
    
        // VALIDDD
        // const {oauth_token,oauth_verifier} = bodyData
        
        // const oAuthAccessToken = await accessToken(oauth_token, oauth_verifier);
        
        // const response = await getRequest(oAuthAccessToken);
        // VALIDDD

        const response = {
            "id": '1708531864758341600',
            "id_str": "1708531864758341632",
            "name": "william john bhaii",
            "screen_name": "WBhaii1752",
            "location": "",
            "description": "Hello It's my bio",
            "url": null,
            "entities": {
                "description": {
                    "urls": []
                }
            },
            "protected": false,
            "followers_count": 0,
            "friends_count": 2,
            "listed_count": 0,
            "created_at": "Sun Oct 01 17:18:40 +0000 2023",
            "favourites_count": 0,
            "utc_offset": null,
            "time_zone": null,
            "geo_enabled": false,
            "verified": false,
            "statuses_count": 0,
            "lang": null,
            "contributors_enabled": false,
            "is_translator": false,
            "is_translation_enabled": false,
            "profile_background_color": "F5F8FA",
            "profile_background_image_url": null,
            "profile_background_image_url_https": null,
            "profile_background_tile": false,
            "profile_image_url": "http://pbs.twimg.com/profile_images/1711059557848674304/KW_x_9Bl_normal.jpg",
            "profile_image_url_https": "https://pbs.twimg.com/profile_images/1711059557848674304/KW_x_9Bl_normal.jpg",
            "profile_link_color": "1DA1F2",
            "profile_sidebar_border_color": "C0DEED",
            "profile_sidebar_fill_color": "DDEEF6",
            "profile_text_color": "333333",
            "profile_use_background_image": true,
            "has_extended_profile": true,
            "default_profile": true,
            "default_profile_image": false,
            "following": false,
            "follow_request_sent": false,
            "notifications": false,
            "translator_type": "none",
            "withheld_in_countries": [],
            "suspended": false,
            "needs_phone_verification": false,
            "email": "twitterauth22@outlook.com"
        }

        // const gotuserdata = {
        //     name: response.name,
        //     email : response.email,
        //     picture : response.profile_image_url_https
        // }

        // const creatingUser = await createUser(gotuserdata,'twitter')

        // console.log(creatingUser);

        return NextResponse.json({ twittertokens:'twittertokens twittertokens twittertokens', response }, { status: 200 })


    } catch (error) {

        return NextResponse.json({ twittererror:'twittererror twittererror twittererror',error:error.message}, { status: 404 })

        
    }
 



}

    
  }
  