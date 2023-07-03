/**
 * T is a generic type
 * keyof T gives a union of all the keys (property names) in T
 * K extends keyof ensures that K contains only keys that are present in T
 *
 * [Key in K] is a mapped type declaration. Key is a placenholder that represents each key in the union type K
 * T[Key] is an indexed access type. It gets the type of the property in type K with key name Key
 *
 * [Key in K]: T[Key] creates a new object using the keys from K, with their types set to the corresponding types
 * of those keys in T
 */
type MyPick<T, K extends keyof T> = {
  [Key in K]: T[Key]
}
