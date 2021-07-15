var gulp = require('gulp'),
    babel = require('gulp-babel');

    var requiredFiles = ['./imdex.js']   // exclude these files


        gulp.task('babelTest', async function () {
            return gulp.src(requiredFiles)
                    .pipe(babel({presets: ['@babel/preset-env'] })) 
                    .pipe(gulp.dest('dist/js'));
        });


                   gulp.task('build', gulp.series('babelTest'));
