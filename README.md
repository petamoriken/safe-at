# safe-at

A safe version of `.at` [#fix_ecmascript_at](https://twitter.com/hashtag/fix_ecmascript_at)

See [this TC39 discource topic](https://es.discourse.group/t/fix-at/983)

---

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

## Install

```console
npm install safe-at
```

## Import

### Node.js

```js
// ES Modules
import safeAt from "safe-at";
```

```js
// CommonJS
const safeAt = require("safe-at");
```

### Deno

```js
// ES Modules
import safeAt from "https://deno.land/x/safe_at/mod.ts";
```
