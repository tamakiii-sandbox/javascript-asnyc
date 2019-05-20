
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
