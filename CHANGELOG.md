# Development version

* register partials helper for assemble in gruntfile
* appicons, touchicons and favicons are now located in source/img/appicons
* performance optimization

# 0.9.0

* the grunticon-mixin got a new syntax and was therefore renamed, now you have to use `@include svg-background(name);`
* removed _ib.scss extend
* removed info about pre-release version of compass
* removed source/img/bgs/svgmin/.gitignore
* removed source/img/icons/svgmin/.gitignore

# 0.8.1

* added `bower install` info to the README.md

# 0.8.0

* added nikita.css as bower package
* added bower as package manager
* package.json#private is true now, change it if you REALLY want to publish your entire project to NPM
* faster cleaning of build and dist folder
* use one global tmp folder for both build and dist
* updated grunticon to 1.2.13 (because of strange tmp-folder behaviour!)
* removed `partials/icon-sprite.svg` from source folder, is stored in tmp folder now
* always use sass cache in dev, disable it for dist
* removed unused `compass.fonts_dir` and `compass.javascripts_dir`
* added `*.gif` for `imagemin` task
* `icon-sprite.svg` is part of the gitignore now (since it's generated by `svgmin:dev`/`svgmin:dist`)
* replaced svgmin:bgs + svgmin:icons with svgmin:dist + svgmin:dev
* use build/tmp and dist/tmp folder for temporary svgmin/grunticon svg files
* Added `Gemfile.lock` to `.gitignore`
* Hint in `setup-dev-env.sh` changed to version without `--pre` for sass and compass
* Updated assemble to 0.4.42
* Updated grunt-crontrib-imagemin to 0.8.1

# 0.7.0

* First version with CHANGELOG.md
* Use SASS 3.4