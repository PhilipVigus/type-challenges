/**
 * This makes use of the distributive nature of conditional types applied
 * to generic types. For example:
 * MyExclude<'a' | 'b' | 'c', 'a'> = 'b' | 'c' because
 * 'a' | 'b' | 'c' extends 'a' becomes
 * 'a' extends 'a' | 'b' extends 'a' | 'c' exetnds 'a'
 * with positive results being filtered out using ? never : T
 */
type MyExclude<T, U> = T extends U ? never : T
