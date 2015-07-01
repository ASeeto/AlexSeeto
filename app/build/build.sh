r.js -o build/app.build.js
cd ../dist
mv js/lib/requirejs/require.js require.js
rm -rf js/lib/* build js/views js/models js/collections build.txt
mkdir js/lib/requirejs && mv require.js js/lib/requirejs/require.js