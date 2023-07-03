// allows for deeply nested promises like Promise<Promise<Promise<string | boolean>>>
type MyAwaited<T extends PromiseLike<any | PromiseLike<any>>> =
  // Does T extend PromiseLike<infer V>?
  // infer V captures the type being wrapped in type variable V
  T extends PromiseLike<infer V>
    ? // Does V extend PromiseLike<any>?
      V extends PromiseLike<any>
      ? // If it does, call MyAwaited recursively on the wrapped type
        MyAwaited<V>
      : // If it doesn't, return the wrapped type
        V
    : // Handle attempts to use the type on variables that aren't 'promise-likes'
      never
