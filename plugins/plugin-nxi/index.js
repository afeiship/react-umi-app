const { join, relative } = require('path');
const { RELATIVE_EXPORT } = require('./constants');

module.exports = api => {
  console.log(api.config);

  api.addRuntimePluginKey(() => 'nxi');
  api.describe({
    key: 'nxi',
    config: {
      schema(joi) {
        return joi.string();
      },
    },
  });
  // console.log(join(__dirname, './runtime'));

  // api.addRuntimePluginKey('nxi');
  api.addRuntimePlugin(() => join(__dirname, './runtime'));
  api.onGenerateFiles(() => {
    console.log('gen files');
    // console.log(arguments);
    // api.writeTmpFile(join(__dirname, 'aa'), '1212');
  });
  api.modifyHTML(($, { routs }) => {
    const pkg = api.pkg;
    $('html').before(`<!-- VERSION: ${pkg.version} -->`);
    return $;
  });

  // console.log(api.winPath(join(api.paths.absTmpDirPath, RELATIVE_EXPORT)));

  // api.addUmiExports([
  //   {
  //     exportAll: true,
  //     source: api.winPath(join(api.paths.absTmpDirPath, RELATIVE_EXPORT)),
  //   },
  // ]);
};
