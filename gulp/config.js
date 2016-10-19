var dest = './public/build',
    src = './redux/';

module.exports = {
  browserify: {
    debug: true, 
    bundleConfigs: [
    {
      entries: src + 'index.js',
      dest: dest,
      outputName: 'root.js'
    }],

    extensions: ['.js']

  }
}
