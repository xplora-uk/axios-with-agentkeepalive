# axios-with-agentkeepalive

axios with agentkeepalive

It uses:

* [axios](https://www.npmjs.com/package/axios)
* [agentkeepalive](https://www.npmjs.com/package/agentkeepalive)

## requirements

* Node v18.16.0+ for version 1.x

## usage

```sh
npm i @xplora-uk/axios-with-agentkeepalive
```

```javascript
const axiosWithAgentLib = require('@xplora-uk/axios-with-agentkeepalive');

```

## maintenance

### installation

```sh
npm i
```

### code

```plain
src/
  __tests__/
    axios.test.ts  test cases for axios
  agents.ts        functions to create HTTP/S agents
  axios.ts         functions for axios
  index.ts         exports the features of this library
  types.ts         TypeScript types
```

### build

```sh
npm run build
```

### test

```sh
npm run test:coverage
```

### publish

It is important to increment version number using semantic versioning in `package.json` and re-create `package-lock.json`

```sh
# https://docs.npmjs.com/cli/v9/commands/npm-login
# using a member in xplora-uk
npm login

# https://docs.npmjs.com/cli/v9/commands/npm-publish
npm publish --access public
```
