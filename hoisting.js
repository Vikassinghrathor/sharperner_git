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

function updateLastUserActivityTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      lastActivityTime = new Date().toLocaleTimeString();
      resolve(lastActivityTime);
    }, 1000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const deletedPost = posts.pop();
        resolve(deletedPost);
      } else {
        reject("ERROR: No posts to delete");
      }
    }, 1000);
  });
}

async function main() {
  try {
    await createPost("Post 1");
    const updatedTime = await updateLastUserActivityTime();
    lastActivityTime = updatedTime;
    console.log("Posts:", posts);

    const deletedPost = await deletePost();
    console.log("Deleted Post:", deletedPost);
    console.log("Remaining Posts:", posts);
  } catch (error) {
    console.error(error);
  }
}

main();
