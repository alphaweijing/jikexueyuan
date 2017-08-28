
fis.match('*.js', {
   optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
   optimizer: fis.plugin('png-compressor')
});
fis.match('::package',{
	postpackager: fis.plugin('loader')
})
fis.match('/js/work/*.js',{
	packTo: '/js/work/baidu.js'
})
fis.match('*.{png,js,css,jpg}', {
  useHash: true,
});
fis.match('*.{css,png,jpg,js,eot,ttf,woff,}', {
  release: '/static/$0'
});
