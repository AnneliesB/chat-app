const {src, dest, watch, parallel} = require('gulp');
const html2pug = require('gulp-html2pug');
const imagemin = require("gulp-imagemin");
const sass = require('gulp-sass');
const babel = require("gulp-babel");
const nodemon = require('gulp-nodemon');

function htmlTopug(done){
    src("./public/html/*.html")
    .pipe(html2pug())
    .pipe(dest("./views/"))
    
    done();
}
function compressImages(done){
    src("./public/images/*.*")
        .pipe(imagemin())
        .pipe(dest("./public/images/dist/"))
    
    done();
}
function sass2css(done){
    src("./public/stylesheets/source/app.scss")
        .pipe(sass({outputStyle: "compressed"}).on('error', sass.logError))
        .pipe(dest("./public/stylesheets/dist/css/"));
    done();
}
function es6ToVanilla(done){
    src("./public/javascripts/src/*.js")
        .pipe(babel({presets: ['@babel/preset-env']}))
        .pipe(dest("./public/javascripts/dist/"));
    done();
}

function gulpNodemon(done){
    nodemon({
        script: './bin/www'
    })
    done();
}

watch("./public/html/**/*.html", htmlTopug);
watch("./public/images/*.*", compressImages);
watch("./public/stylesheets/source/**/*.scss", sass2css);
watch('./public/javascripts/src/*.js', es6ToVanilla);

module.exports.default = parallel(sass2css, compressImages, es6ToVanilla, gulpNodemon);
module.exports.htmltopug = htmlTopug;
//module.exports.nodemon = gulpNodemon;