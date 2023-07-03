/**
 * T is a generic type
 * extends readonly (string | number) means that it has to be a tuple containing strings or numbers or both
 * [P in T[number]]: P iterates over each each individual element type in T[number] and assigns the same value to it
 */
type TupleToObject<T extends readonly (string | number)[]> = {
  [P in T[number]]: P
}
