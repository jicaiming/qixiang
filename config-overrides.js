const { override, fixBabelImports, addWebpackAlias } = require('customize-cra')
const path = require('path')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),

  addWebpackAlias({
    ['assets']: path.resolve(__dirname, 'src/assets'),
    ['styles']: path.resolve(__dirname, 'src/assets/styles'),
    ['images']: path.resolve(__dirname, 'src/assets/images'),
<<<<<<< HEAD
=======
<<<<<<< HEAD
    ['styles']: path.resolve(__dirname, 'src/assets/styles'),
    ['images']: path.resolve(__dirname, 'src/assets/images'),
=======
    // ['styles']: path.resolve(__dirname, 'src/assets/styles'),
    // ['images']: path.resolve(__dirname, 'src/assets/images'),
>>>>>>> origin/xxp
>>>>>>> 6a6a7af8a3dc8f425e2c17f58dac4a974de43e69
=======
>>>>>>> xxp
    ['components']: path.resolve(__dirname, 'src/components'),
    ['utils']: path.resolve(__dirname, 'src/utils'),
  })
)