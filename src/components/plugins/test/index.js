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
        `<!-- UMI_DIR: ${process.env.PWD} -->`,
        `<!-- NAME: ${pkg.name} -->`,
        `<!-- VERSION: ${pkg.version} -->`,
        `<!-- DATETIME: ${new Date().toISOString()} -->`,
        `<!-- ENV: ${JSON.stringify(process.env, null, 4)} -->`,
      ].join('\n'),
    );
    return $;
  });
};
