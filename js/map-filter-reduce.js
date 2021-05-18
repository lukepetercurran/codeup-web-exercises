const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// #2

let es5multiLingual = users.filter(function(user){
        return users.languages.length >= 3;
});

// let es6multiLingual = user.filter(user => user.language);


// #3

// es5

let es5Emails = users.map(function(user){
    user = user.email;
    return user;
});

// es6

let es6Emails = users.map(user => user.email);

// #4

//es5

let totalEXP = users.reduce(function(total, user){
    let yearsOfExperience = user.yearsOfExperience
    return total + yearsOfExperience
}, 0);

console.log(totalEXP);

//es6

totalEXP = users.reduce((total, user)=> total + user.yearsOfExperience, 0);
console.log(totalEXP)

let emailsViaReduce = users.reduce(function(accumulator, user){
    accumulator.push(user.email);
    return accumulator
}, []);

let longestEmail = users.reduce(function(accumulator, user, index, usersArray){
    if (index === usersArray.length -1){
        accumulator.push(user.email);
        accumulator.sort(function(email1, email){
            return email2.length - email.length;
        });
        return accumulator[0]
    } else {
        accumulator.push(user.email);
        return accumulator
    }
}, []);

console.log(longestEmail);

// const longestEmail = users.reduce((longest, current) =>{
//     if(current.email.length > longest.email.length){
//         return current;
//     } else {
//         return longest;
//     }
// })  //David Culvers Method

// let longestUserEmail = users.reduce((a, b) => {
//     return a.length > b.email.length ? a : b.email;
// }); // Matthews Method

// #5

let names = users.reduce(function(accumulator, user){
    accumulator.push(user.name);
    return accumulator;
}, []);

let namesNicelyJoined = users.reduce(function(accumulator, user,index, usersArray){
    if (index === usersArray.length - 1){
        accumulator.push(user.name);
        let niceJoin = accumulator.join(', ');
    } else {
        accumulator.push(user.name);
        return accumulator
    }
}, []);

console.log(namesNicelyJoined);

let longestUserEmailByKarenV = users.reduce((a, b) => {
    return a.length > b.email.length ? a : b.email;
});
console.log(longestUserEmailByKarenV)