import { join, relative } from 'path';

export default api => {
  const { paths } = api;
  // api.addRuntimePluginKey('test');
  api.addHTMLScripts(() => {
    return [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=afeiship`,
      },
    ];
  });

  api.modifyHTML(($, { routs }) => {
    const pkg = require(join(paths.cwd, './package.json'));

    $('html').before(
      [
        '',
        `<!-- NAME: ${pkg.name} -->`,
        `<!-- VERSION: ${pkg.version} -->`,
        `<!-- DATETIME: ${new Date().toISOString()} -->`,
      ].join('\n'),
    );
    return $;
  });
};
