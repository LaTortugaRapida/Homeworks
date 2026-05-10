const getUser = () => new Promise(res => res({id: 1, name: "Juan"}));
const getPosts = (user) => new Promise(res => res(["post1", "post2"]));
const getComments = (posts) => new Promise(res => res(["comment1", "comment2"]));

getUser()
    .then((user) => {
        console.log(user.name);
        return getPosts(user);
    })
    .then((posts) => {
        console.log(posts);  
        return getComments(posts);
    })
    .then((comments) => {
        console.log(comments);
    })
    .catch((err) => console.error(err));