/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "spoonacular.com",
        port: "",
        pathname: "/recipeImages/*.jpg",
      },
      {
        protocol: "https",
        hostname: "spoonacular.com",
        port: "",
        pathname: "/recipeImages/*.png",
      },
      {
        protocol: "https",
        hostname: "spoonacular.com",
        port: "",
        pathname: "/recipeImages/*.jpeg",
      },
    ],
  },
}
