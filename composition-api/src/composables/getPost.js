import { ref } from "vue";
import { db } from "../firebase/config";
let getPost = (id) => {
  let post = ref(null);
  let error = ref("");
  let load = async () => {
    try {
      //For loading spinner component css
      // await new Promise((resolve, reject)=>{
      //     //resolve();
      //     setTimeout(resolve,2000)
      // })
      // let response = await fetch("http://localhost:3000/posts/" + id);
      let doc = await db.collection("posts").doc(id).get();
      console.log(doc.data());
      post.value = { id: doc.id, ...doc.data() };
      if (doc.status === 404) {
        throw new Error("no found that exact url");
      }
      // let data = await response.json();
      // post.value = data;
    } catch (err) {
      error.value = err.message;
    }
  };
  return {
    post,
    error,
    getPost,
    load,
  };
};
export default getPost;
