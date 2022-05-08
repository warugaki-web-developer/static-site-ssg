module.exports = function (eleventyConfig) {

  return {
    pathPrefix: "/",
    dir: {
      input: 'src',
      output: 'dist',
      data: "_data",
      layouts: '_layouts',
      includes: '_includes'
    },
    templateFormats: ['html', 'njk'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
};
