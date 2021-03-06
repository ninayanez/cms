client:
	browserify -t vueify -t babelify -e client.js -o static/bundle.js;

edit:
	browserify -t vueify -e editor.js -o static/bundle.js;

real:
	NODE_ENV=production browserify -g envify -e client.js -t vueify -t babelify | uglifyjs -c > static/bundle.min.js;

# add a pre-rendering step!
# set pre-rendered views in backend!
# prerender-spa-plugin
