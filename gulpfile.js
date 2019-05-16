const {src, dest, watch, parallel} = require('gulp');
const html2pug = require('gulp-html2pug');
const nodemon = require('gulp-nodemon');

function htmlTopug(done){
    src("./public/html/*.html")
    .pipe(html2pug())
    .pipe(dest("./views/"))
    
    done();
}

function gulpNodemon(done){
    nodemon({
        script: './bin/www'
    })
    done();
}

watch("./public/html/**/*.html", htmlTopug);

module.exports.default = htmlTopug;
module.exports.nodemon = gulpNodemon;
