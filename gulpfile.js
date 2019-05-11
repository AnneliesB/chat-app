const {src, dest, watch, parallel} = require('gulp');
const html2pug = require('gulp-html2pug');

function htmlTopug(done){
    src("./public/html/*.html")
    .pipe(html2pug())
    .pipe(dest("./views/"))
    
    done();
}

watch("./public/html/**/*.html", htmlTopug);

module.exports.default = htmlTopug;
