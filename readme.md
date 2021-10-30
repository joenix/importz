# Importz

### 1. Install

```sh
yarn add importz
# or
npm i importz
```

### 2. Import

```js
const importz = require("importz");
```

### 3. Use

```js
const group = importz(["one", "two", "three"], name => {
  return require("./script/" + name + ".js");
});

console.log(group);
/*
{
  one: one.js,
  two: two.js,
  three: three.js
}
*/
```
