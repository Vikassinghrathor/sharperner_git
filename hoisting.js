const posts = [];
let lastActivityTime = null;

function createPost(title) {
  return new Promise((resolve) => {
    setTimeout(() => {
      posts.push({ title });
      resolve();
    }, 1000);
  });
}

function updateLastUserActivityTime(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
           lastActivityTime = new Date().toLocaleTimeString();
           resolve(lastActivityTime);
        },1000);
    })
}

function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length > 0){
                const deletePost = posts.pop();
                resolve(deletePost);
            }else{
                reject("ERROR");
            }
        },1000);
    });
}

createPost("Post 1")
  .then(() => updateLastUserActivityTime())
  .then((updatedTime) => {
    lastActivityTime = updatedTime;
    console.log("Posts:", posts);
    console.log("Last Activity Time:", lastActivityTime);
    return deletePost();
  })
  .then((deletedPost) => {
    console.log("Deleted Post:", deletedPost);
    console.log("Remaining Posts:", posts);
  })
  .catch((error) => {
    console.error(error);
  });