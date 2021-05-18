const userLastCommit = username => {
    return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${GITHUB_ACCESS}`}})
        .then(resp => resp.json())
        .then(data => {
            // console.log(data)
            let lastPush;
            for(let event of data) {
                if(event.type === "PushEvent") {
                    lastPush = new Date(event.created_at);
                    break;
                }
            }
            console.log(lastPush);
        });
}

userLastCommit("davidandstephens");
userLastCommit("jreudas1")
userLastCommit("jayarredondo")
userLastCommit("lukepetercurran");

const wait = ms => {
    return new Promise(resolve => {
       setTimeout(() => {
           resolve(`You'll see thus after ${ms/1000} second(s).`)
        }, ms);
    });
}

wait(1000).then(message => console.log(message));
wait(3000).then(message => console.log(message));
wait(5000).then(message => console.log(message));











// function gitHubUser (userName) { //WIP
//     fetch (`//githubapi`, {headers: {'Authorization': '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'}})
//         .then(response => response.json().then(data => {
//         console.log(data);
//         var latestPush = data[0].created_at
//         let date = new Date(latestPush);
//
//         console.log(date.toString());
//     }))
// }
// gitHubUser('//githubuser')