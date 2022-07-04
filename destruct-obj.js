//obj destruction array is the way of extraction array valuye;


const myCrush={
    jhs_crush:'Rizqhia',
    shs_crush: 'Sherly',
    college_crush:"Luktiana",
    work_crush :'wafa'
};

const {jhs_crush,shs_crush,college_crush,work_crush} = myCrush;

console.log(jhs_crush,shs_crush,college_crush,work_crush);

const stacks= ["C++", "HTML", "JavaScript", "CSS", "C#", "C"];

const [firstLanguage, secondLanguage, thirdLanguage, forthLanguage, fiftLanguage] = stacks;

console.log("Print the array using destruction array:", firstLanguage, secondLanguage, thirdLanguage, forthLanguage, fiftLanguage);
console.log(stacks);

const favouriteFoods=["Onion", "Satay"];

const [firstFavourite, secondFavourite, thirdFavourite ='Salad'] = favouriteFoods;

console.log(firstFavourite, secondFavourite, thirdFavourite)