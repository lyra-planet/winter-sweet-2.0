const removeImports = require('next-remove-imports')({
    test: /node_modules([\s\S]*?)\.(tsx|ts|js|mjs|jsx)$/,
    matchImports: "\\.(less|css|scss|sass|styl)$"
  });
  
module.exports = removeImports({
    webpack(config, options) {
      return config
    },
    images: {
      domains: ['sm.ms',"s2.loli.net"],
    },
})