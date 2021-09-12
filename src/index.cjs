
/** @see https://tc39.es/ecma262/#sec-toobject */
function ToObject(target) {
  if (target == null) {
    throw new TypeError("Cannot convert undefined or null to object");
  }

  return Object(target);
}

/** @see https://tc39.es/ecma262/#sec-tointegerorinfinity */
function ToIntegerOrInfinity(target) {
  if (typeof target === "bigint") {
    throw TypeError("Cannot convert a BigInt value to a number");
  }

  const number = Number(target);

  if (Number.isNaN(number) || number === 0) {
    return 0;
  }

  if (number === Infinity) {
    return Infinity;
  }

  if (number === -Infinity) {
    return -Infinity;
  }

  return Math.trunc(number);
}

/** @see https://tc39.es/ecma262/#sec-tolength */
function ToLength(target) {
  const length = ToIntegerOrInfinity(target);
  if (length < 0) {
    return 0;
  }

  return length < Number.MAX_SAFE_INTEGER ? length : Number.MAX_SAFE_INTEGER;
}

/** A safe version of `.at` */
module.exports = function safeAt(target, index) {
  const O = ToObject(target);
  const len = ToLength(O.length);

  const relativeIndex = Number(index);
  if (!Number.isSafeInteger(relativeIndex)) {
    return undefined;
  }

  let k;
  if (relativeIndex >= 0) {
    k = relativeIndex;
  } else {
    k = len + relativeIndex;
  }

  if (k < 0 || k >= len) {
    return undefined;
  }

  return O[k];
}
