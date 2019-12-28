import React, { Component } from 'react'

function Foo(target) {
    // console.log(target, arg)
    let param = target;
    return function (arg1) {
      // console.log(arg1)
      arg1.count = 1;
      arg1.prototype.username = "jack" + param;
    }
  }
  
  @Foo('abc')
class Decorator extends Component {
    render() {
        return (
            <div>
                hello
            </div>
        )
    }
}
export default Decorator
