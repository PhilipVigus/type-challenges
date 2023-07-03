/**
 * T extends any[] - T is an array of any type
 * T extends [] T is an empty array
 *  if it is, return never
 *  if it isn't, return the value of T[0]
 */
type First<T extends any[]> = T extends [] ? never : T[0]
