let user = {
    age: 22,
    name: 'Ulriech',
    magic: true,
    scream: function(){
        console.log('aahhhh!');
    }
}


user.spell = 'abra ka dabra'; // 0(1)
console.log(user.age); // 0(1)
console.log(user); // 0(1)
user.scream();  // 0(1)

// in case of collision, it can slow down access time.
// 0(n)