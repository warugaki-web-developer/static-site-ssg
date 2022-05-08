const siteUrl =
  process.env.NODE_ENV === "prod"
    ? process.env.npm_package_config_prod_url
    : process.env.npm_package_config_dev_url;

module.exports = {
  lang: "ja",
  url: siteUrl,
  title: "Static site generator using 11ty",
};
