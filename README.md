# safe-at

A safe version of `.at`

Native `.at` method is very harmful:

```js
const arr = [1, 2, 3];
console.log(arr.at("foo")); // => 1
console.log(arr.at(NaN)); // => 1
console.log(arr.at(1.5)); // => 2
```

You can use `safe-at` instead:

```js
import safeAt from "safe-at";

const arr = [1, 2, 3];
console.log(safeAt(arr, "foo")); // => undefined
console.log(safeAt(arr, NaN)); // => undefined
console.log(safeAt(arr, 1.5)); // => undefined
```

# Install

```console
npm install safe-at
```
