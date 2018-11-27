const lock = (item) => {
  if(item) {
    for(const key of Object.getOwnPropertyNames(item)) {
      const propDesc = Object.getOwnPropertyDescriptor(item, key)
      if(propDesc['writable'] || propDesc['configurable'])
        {
          Object.defineProperty(item, key, {
            writable: false,
            configurable: false
          })
          // Recursively lock properties of item
          if(Object.prototype.toString.call(item[key]) === '[object Object]') {
            lock(item[key])
          }
          
          // Lock the prototype of Function, in case of `new Func()` in client code
          if(Object.prototype.toString.call(item[key]) === '[object Function]') {
            lock(item[key].prototype)
          }
        }
    }
  }
}

module.exports = lock

lock(module.exports)
