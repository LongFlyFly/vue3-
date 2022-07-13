const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false
  // configureWebpack: {
  //   		plugins: [
  //   			// 配置 jQuery 插件的参数
  //   			new webpack.ProvidePlugin({
  //   				$: 'jquery',
  //   				jQuery: 'jquery',
  //   				'window.jQuery': 'jquery',
  //   				Popper: ['popper.js', 'default']
  //   			})
  //   		]
  //   	}
})

