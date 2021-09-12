/** A safe version of `.at` */
declare function safeAt<T>(target: ArrayLike<T>, index: number): T|undefined;
export default safeAt;
