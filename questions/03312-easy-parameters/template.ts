/**
 * T extends (...args: any[]) => any
 * a generic constraint that ensures T is a function type that takes any number of arguments and returns some value
 *
 * The rest of the type is conditional
 * T extends (...any: infer S) => any is the condition. infer S extracts the types of the arguments
 * The conditional returns the types if T extends a function, otherwise it returns any
 */
type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...any: infer S
) => any
  ? S
  : any
