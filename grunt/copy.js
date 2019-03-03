module.exports = {
  html: {
    expand: true,
    cwd: 'app',
    src: '**.html',
    dest: 'dist/',
  },
  css: {
    expand: true,
    cwd: 'app',
    src: 'lib/css/**.css',
    dest: 'dist/',
  },
  fonts: {
    expand: true,
    cwd: 'app',
    src: 'lib/fonts/**.*',
    dest: 'dist/',
  },
  json: {
    expand: true,
    cwd: 'app',
    src: 'data.json',
    dest: 'dist/'
  }
}
