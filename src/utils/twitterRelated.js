// const got = require('got');
const OAuth = require('oauth-1.0a');
const qs = require('querystring');
const crypto = require('crypto')



// The code below sets the consumer key and consumer secret from your environment variables
// To set environment variables on macOS or Linux, run the export commands below from the terminal:
// export CONSUMER_KEY='YOUR-KEY'
// export CONSUMER_SECRET='YOUR-SECRET'
const consumer_key = process.env.Twitter_Consumer_Key;
const consumer_secret = process.env.Twitter_Consumer_Secret;

// These are the parameters for the API request
// specify Tweet IDs to fetch, and any additional fields that are required
// by default, only the Tweet ID and text are returned
const params = 'user.fields=created_at,description&expansions=pinned_tweet_id' // Edit optional query parameters here

const endpointURL = `https://api.twitter.com/2/users/me?{params}`;

// this example uses PIN-based OAuth to authorize the user
const requestTokenURL = 'https://api.twitter.com/oauth/request_token';
// const authorizeURL = new URL('https://api.twitter.com/oauth/authorize');
const accessTokenURL = 'https://api.twitter.com/oauth/access_token';

const oauth = OAuth({
  consumer: {
    key: consumer_key,
    secret: consumer_secret
  },
  signature_method: 'HMAC-SHA1',
  hash_function: (baseString, key) => crypto.createHmac('sha1', key).update(baseString).digest('base64')
});


  
export const requestToken = async()=>{
  
    const authHeader = oauth.toHeader(oauth.authorize({
      url: requestTokenURL,
      method: 'POST'
    }));

    const got = await import('got')

    
  
    const req = await got.got.post(requestTokenURL, {
      headers: {
        Authorization: authHeader["Authorization"]
      }
    });
  
    if (req.body) {
      return qs.parse(req.body);
    } else {
      throw new Error('Cannot get an OAuth request token');
    }
  }
  
export const accessToken = async(oauth_token,oauth_verifier)=>{

    const authHeader = oauth.toHeader(oauth.authorize({
      url: accessTokenURL,
      method: 'POST'
    }));
  
    
  
    try {
      
    const path = `https://api.twitter.com/oauth/access_token?oauth_verifier=${oauth_verifier}&oauth_token=${oauth_token}`

    const got = await import('got')
  
    const req = await got.got.post(path, {
      headers: {

        Authorization: authHeader["Authorization"]
      }
    });
  
    if (req.body) {
      return qs.parse(req.body);
    } else {
      throw new Error('Cannot get an OAuth request token');
    }
  
  } catch (error) {
      
      throw new Error('Error in geting token');

  }
  
  
  
  
  
  
  }
  
export const getRequest = async(oAuthAccessToken)=>{


    const {oauth_token,oauth_token_secret} = oAuthAccessToken
  
    const token = {
      key: oauth_token,
      secret: oauth_token_secret
    };
  
  
    const authHeader = oauth.toHeader(oauth.authorize({
      url: 'https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true',
      method: 'GET'
    }, token));

    // 

    const got = await import('got')
  
    
    const req = await got.got.get('https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true', {
      headers: {
        Authorization: authHeader["Authorization"],
        
      }
    });


    if (req.body) {
      return JSON.parse(req.body);
    } else {
      
      throw new Error('Unsuccessful request');
    }
  }