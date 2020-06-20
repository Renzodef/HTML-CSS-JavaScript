const fs = require('fs');
const path = require('path');
// eslint-disable-next-line func-names
module.exports = function (dir, filterStr, callback) {
  // eslint-disable-next-line consistent-return
  fs.readdir(dir, (err, list) => {
    if (err) return callback(err);
    // eslint-disable-next-line no-param-reassign
    list = list.filter((file) => path.extname(file) === `.${filterStr}`);
    callback(null, list);
  });
};
