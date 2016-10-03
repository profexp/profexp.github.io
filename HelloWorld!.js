var a = 5, b = 6, sum = 0;
sum = a + b;
sum = sum / 13;
var ans = prompt('Say ans');
alert('Hello, JS!');
alert('Your answer is' + ans);
for (var i = 0; i < ans.length; i++){
    if (ans[i] == 'M'){
        alert('In your ans is the M')
    }
}
'use strict';
let new_sum = a + sum;
class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        alert(this.name);
    }
}