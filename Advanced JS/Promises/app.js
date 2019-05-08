const myTweets = [
    {
        id: "101",
        account: "@LinusTorvald",
        body: "I've never told anyone this, but Tux is actually just a cat in a penguin costume",
        replays: 1,
        retweets: 120,
        likes: 3432
    },
    {
        id: "102",
        account: "@LinusTorvald",
        body: "Steve Jobs thought that eating organic foods stopped you from swating, and therefore never had a shower. He was wrong. No wonder apple products stink",
        replays: 9,
        retweets: 1100,
        likes: 2100
    },
    {
        id: "103",
        account: "@LinusTorvald",
        body: "The fact I have got just under 400 followers in a week just confirms the theory that people love Linux, I guess",
        replays: 1,
        retweets: 100,
        likes: 300
    },
];

const tweet104 = {
    id: "104",
    account: "@LinusTorvald",
    body: "Tweet 104 ha!",
    replays: 0,
    retweets: 102,
    likes: 33320
};

const tweet105 = 'Random tweet';

function showTweets() {
    let output = "";
    myTweets.forEach(tweet => {
        output += `<li>${tweet.id} ${tweet.account} ${tweet.body}</li>`;
    });
    document.body.innerHTML = output;
};

const createtweet = newTweet => {
    return new Promise((resolve, reject) => {
        if (typeof newTweet === 'object') {
            myTweets.push(newTweet);
            resolve();
        } else {
            reject();
        };
    });
};

createtweet(tweet104).then(showTweets);
createtweet(tweet105).then(showTweets).catch(() => console.log('Not a valid tweet'));

