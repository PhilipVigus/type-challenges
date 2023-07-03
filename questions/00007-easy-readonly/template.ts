/**
 * T is a generic type
 * [P in key of T] iterates over each property P in T's keys
 * T[P] gets the value of the property P from T
 *
 * [P in keyof T]: T[P] iterates over each property in T's keys
 * and assigns each a value equal to the value of property P in T
 *
 * All that's left to do is make each property readyonly
 */
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}
