// import { join } from 'path';
const { join } = require('path');

const DIR_NAME = 'plugin-nxi';
const RELATIVE_EXPORT = join(DIR_NAME, 'exports');
const RELATIVE_EXPORT_PATH = `${RELATIVE_EXPORT}.js`;

module.exports = {
  DIR_NAME,
  RELATIVE_EXPORT,
  RELATIVE_EXPORT_PATH,
};
