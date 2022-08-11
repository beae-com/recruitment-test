echo "Current path:";
pwd;
echo "====Prepare to build for production====";
npx vite build --config=vite.config.preview.js;
echo "=== All done. now starting to lauch preview production ====";

npx vite preview --port=8118 --config=vite.config.preview.js;