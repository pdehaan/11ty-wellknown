module.exports = function (eleventyConfig = {}, pluginConfig = {}) {
  const urlFilter = eleventyConfig.getFilter("url");

  eleventyConfig.addShortcode("wellknown_url", () =>
    urlFilter(".well-known/eleventy/site.json")
  );
  eleventyConfig.addShortcode("wellknown_json", function (shortcodeConfig = {}) {
    const obj = {
      ...shortcodeConfig,
      ...pluginConfig,
      engines: {
        eleventy: require("@11ty/eleventy/package.json").version,
        liquidjs: require("liquidjs/package.json").version,
        nunjucks: require("nunjucks/package.json").version,
      },
      lastModified: new Date(),
    };
    return JSON.stringify(obj, null, 2);
  });
};
