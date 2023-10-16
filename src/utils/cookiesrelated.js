import {cookies} from 'next/headers'
const jwt = require('jsonwebtoken')


export const settingCookiesForLoginSignup = async (user)=>{

  const cookiesInstance = cookies()


    const maxAge = 3 * 60 * 60;
    const token = jwt.sign({ id: user.id, role : 'user'},process.env.JWT_SECRET,{
        expiresIn: maxAge, // 3hrs in sec
      }
    );


    cookiesInstance.set("token", token, {
        httpOnly: true,
        maxAge: maxAge * 1000, // 3hrs in ms
      });

}