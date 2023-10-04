npm run build
cp -r ./build/* ./../website-files/
git add -A
git commit -m "changes made"
git push
git checkout build || exit
rm -rf *
cp -r ./../website-files/* ./
git add -A
git commit -m "changes made"
git push
