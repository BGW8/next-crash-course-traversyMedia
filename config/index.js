//! Check whether it's an dev-enviroment or production
const dev = process.env.NODE_ENV !== "production";

//! export string-URL based on the enviroment
export const server = dev ? "http://localhost:3000" : "https://yourwebsite.com";
