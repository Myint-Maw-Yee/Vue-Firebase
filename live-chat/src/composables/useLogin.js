import { ref } from "@vue/reactivity";
import { auth } from "../firebase/config";
let error = ref(null);

let signIn = async(email, password) => {
    try {
        let res = await auth.signInWithEmailAndPassword(
          email,
          password
        );
        if(!res){
          throw new Error("Can't Login");
        }
        return res;
      } catch (err) {
        console.log(err);
        error.value = err.message;
      }
}
let userLogin = () => {
 return {error, signIn}
}

export default userLogin;