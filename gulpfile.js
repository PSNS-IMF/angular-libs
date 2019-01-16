const { src, dest } = require('gulp');

exports.default = function()
{
  return src(['src/**/*.css', 'src/**/*.html'])
    .pipe(dest('dist/'));
};
