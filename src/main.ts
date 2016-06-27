// import sayHello from "./greet"
import sayHello from './greet'
/// <reference path="./scrollto.d.ts" />
import scrollTo = require('scroll-to')

scrollTo(500, 1200, {
  ease: 'out-bounce',
  duration: 1500
})

console.log(sayHello('typescript'))