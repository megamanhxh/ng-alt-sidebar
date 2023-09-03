rm -rf demo
npm run example:build:prod
cd ../demo
git init
git add -A
git commit -m "update demo"
git push -f git@github.com:megamanhxh/ng-alt-sidebar.git master:gh-pages
