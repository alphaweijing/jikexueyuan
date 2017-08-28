
fis.match('*.js', {
   optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
   optimizer: fis.plugin('png-compressor')
});
fis.match('*.less', {
  parser: fis.plugin('less-2.x'),
  rExt: '.css'
})

/*fis.match('/js/work/*.js',{
	packTo: '/js/work/baidu.js'
})*/
fis.match('*.{png,js,css,jpg}', {
  useHash: true,
});
fis.match('*.{css,png,jpg,js,gif}', {
  release: '/static/$0'
});
