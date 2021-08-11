module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("json_stringify", (obj) =>
    JSON.stringify(obj, null, 2)
  );

  const pkg = require("./package.json");
  eleventyConfig.addPlugin(require("./config/plugins/well-known"), {
    name: pkg.name,
    version: pkg.version,
    author: pkg.author,
    license: pkg.license,
    homepage: pkg.homepage,
    repository: pkg.repository,
  });

  return {
    dir: {
      input: "src",
      output: "www",
    },
  };
};
