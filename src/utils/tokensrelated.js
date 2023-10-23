import jwt from 'jsonwebtoken'

export const verifyJWTToken = async (request)=>{


    try {
        
        const token = typeof request === 'string' ? request : request.cookies.get('token')?.value || null;

        // const decodedData = await jwt.verify(token,process.env.JWT_SECRET)

        const decodedData = await jwt.verify(token,process.env.JWT_SECRET)


        return decodedData
        


    } catch (error) {
        
        throw new Error(error.message)
        
        }

}