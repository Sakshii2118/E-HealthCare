/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...existing config...
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://192.168.29.173:3000" // add your LAN IP and port here
  ]
}

module.exports = nextConfig