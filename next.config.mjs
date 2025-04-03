// Next.js configuration file
/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        dangerouslyAllowSVG : true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*',
               
            }
           
        ]
    },

    env: {
        NEXT_APIURL: "http://96.9.81.187:8080/api/v1",
    },
    redirects(){
        return[
            {
                source: '/',
                destination: '/login',
                permanent: true,
            }
        ]
    }
};

export default nextConfig;
