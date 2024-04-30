const blogPluginExports = require('@docusaurus/plugin-content-blog');

const defaultBlogPlugin = blogPluginExports.default;
// docusaurus-plugin-content-blog

async function blogPluginExtended(...pluginArgs) {
  const blogPluginInstance = await defaultBlogPlugin(...pluginArgs);

  return {
    // Add all properties of the default blog plugin so existing functionality is preserved
    ...blogPluginInstance,
    /**
     * Override the default `contentLoaded` hook to access blog posts data
     */
    contentLoaded: async function (data) {
      console.log('this name');
      console.log(blogPluginInstance.name);
      // Get the 5 latest blog posts
      const { setGlobalData } = data.actions;
      // Call the default overridden `contentLoaded` implementation
      const X = await blogPluginInstance.contentLoaded(data);
      setGlobalData({
        __FrontMatters__: data.content.blogPosts.map((p) => {
          return p.metadata.frontMatter;
        }),
      });

      return X;
    },
  };
}

module.exports = {
  ...blogPluginExports,
  default: blogPluginExtended,
};
