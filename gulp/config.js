var dest = './public/build',
    src = './public/javascripts/';

module.exports = {
  browserify: {
    debug: true, 
    bundleConfigs: [
    {
      entries: src + 'playground.js',
      dest: dest,
      outputName: 'playground.js'

    },
    {
      entries: src + 'index.js',
      dest: dest,
      outputName: 'index.js'
    }],

    extensions: ['.js']

  }
}
