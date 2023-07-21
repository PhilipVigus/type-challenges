/**
 * This is a mapped type
 * It maps the keys of T, iterating over each and assigning it to P
 * It conditionally maps them
 *      If P extends K then it omits them
 *      If it doesn't then it maps to T[P]
 */
type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}
