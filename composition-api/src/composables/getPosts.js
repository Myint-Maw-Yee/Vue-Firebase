import { ref } from "vue";
import { db } from "../firebase/config";
let getPosts = () => {
  let posts = ref([]);
  let error = ref("");
  let load = async () => {
    try {
      let res = await db.collection("posts").orderBy("created_at","desc").get();
      posts.value = res.docs.map((post) => {
        console.log(post.data());
        return { id: post.id, ...post.data() };
      });
      console.log(res);
      if (res.status === 404) {
        throw new Error("no found that exact url");
      }
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
    console.log(posts);
  };
  return { posts, error, load };
};
export default getPosts;
