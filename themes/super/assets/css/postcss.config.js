// const themeDir = __dirname + "/../../";

// module.exports = {
//   plugins: [
//     require("postcss-import")({
//       path: [themeDir],
//     }),
//     require("tailwindcss")(themeDir + "assets/css/tailwind.config.js"),
//     require("autoprefixer")({
//       path: [themeDir],
//     }),
//   ],
// };


// postcss.config.js (v4)
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
    // Autoprefixer is now often built-in to Tailwind CSS v4, 
    // so you might not need to explicitly include it anymore.
    // However, if you encounter issues, you can add it back:
    // autoprefixer: {}, 
  },
};

// export default {
//   plugins: ["@tailwindcss/postcss"]
// }


