let prop = 'name';
let id='phone';
let mobile="085692263786";

let user={
    [prop]:"Hatsune Miku",
    [id]:1234456343
    
}

let countriesPreference={
    country:"Germany, Japan, Australia, Turkey",
    countryCode:123
}
let userProfile={
    username:"Hatsune Miku",
    userAge:17,
    userOrigin:"Japan"
}

const obj1={
    a:0,
    b:2,
    c:4,
};

const obj2= Object.assign({c:5,d:6},obj1)
console.log(obj2.c,obj2.d)

console.log(user)
let newUserProfile = Object.assign({},countriesPreference, userProfile)
console.log("The new user profiel is ", newUserProfile)
