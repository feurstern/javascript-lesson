let userPreferences={
    height:10,
    color:'blue',
    age: 12,

    grow(){
        this.age+=2;
    }

};

userPreferences.grow();
console.log(userPreferences.height)
console.log(userPreferences)