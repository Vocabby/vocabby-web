# Make sure that all files in src directory
# that aren't tests have @flow annotation

FILES_WITHOUT_FLOW="$(grep -r --include=\*.js --exclude=\*.test.js -L "@flow" src)"
FILES_COUNT=$(echo $FILES_WITHOUT_FLOW | wc -w)

if [ $FILES_COUNT -ne 0 ]
then
  echo "Following files are missing @flow annotation:"
  echo $FILES_WITHOUT_FLOW | tr " " "\n"
  exit 1
fi
