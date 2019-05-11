const {src, dest, watch, parallel} = require('gulp');
const html2pug = require('gulp-html2pug');
const imagemin = require("gulp-imagemin");


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
watch("./public/html/**/*.html", htmlTopug);
watch("./public/images/*.*", compressImages);

module.exports.default = parallel(htmlTopug, compressImages);