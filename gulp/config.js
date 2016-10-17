var dest = './public/build',
    src = './redux/';

module.exports = {
  browserify: {
    debug: true, 
    bundleConfigs: [
    {
      entries: src + 'app.js',
      dest: dest,
      outputName: 'index.js'
    },

    extensions: ['.js']

  }
}
