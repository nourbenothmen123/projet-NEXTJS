/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{ 
    domains:["fakestoreapi.com","api.lorem.space","picsum.photos","firebasestrorage.googleapis.com"], 
    } 
}

module.exports = nextConfig
