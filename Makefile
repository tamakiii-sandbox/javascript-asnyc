build-dev:
	npx nodemon --watch webpack.config.js --watch package.json --exec "npx webpack --mode development --watch --progress --verbose"

server:
	npx json-server --watch db.json

init: \
	package.json \
	tsconfig.json

package.json:
	npm init --yes
	npm install @types/node @types/react @types/react-dom @types/react-virtualized @types/styled-components css-loader html-webpack-plugin react react-dom react-test-renderer react-virtualized source-map-support style-loader styled-components ts-loader typescript webpack webpack-cli webpack-dev-server
	npm install --dev nodemon

tsconfig.json:
	npx tsc --init

webpack.config.js:
	npx webpack init
	npx eslint --fix --no-eslintrc --rule 'indent: ["error", 2]' --parser-options='ecmaVersion:2015' $@

