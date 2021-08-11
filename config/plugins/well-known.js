module.exports = function (eleventyConfig = {}, pluginConfig = {}) {
  const urlFilter = eleventyConfig.getFilter("url");

  eleventyConfig.addShortcode("wellknown_url", () =>
    urlFilter(".well-known/eleventy/versions.json")
  );
  eleventyConfig.addShortcode(
    "wellknown_json",
    function (shortcodeConfig = {}) {
      const eleventy = require("@11ty/eleventy/package.json").version;
      const liquidjs = require("liquidjs/package.json").version;
      const nunjucks = require("nunjucks/package.json").version;
      return JSON.stringify(
        {
          ...shortcodeConfig,
          ...pluginConfig,
          engines: {
            eleventy,
            liquidjs,
            nunjucks,
          }
        },
        null,
        2
      );
    }
  );
};
