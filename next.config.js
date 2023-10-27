/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,

    images:{
        domains:['images.unsplash.com','uniworthdress.com','res.cloudinary.com']
    },

    
    eslint:{
        ignoreDuringBuilds:true,
        
    }


}

module.exports = nextConfig
