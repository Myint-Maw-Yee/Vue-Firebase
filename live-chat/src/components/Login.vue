<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="Login">
      <input type="email" placeholder="email" v-model="email" />
      <div class="error" v-if="error">{{ error }}</div>
      <input type="password" placeholder="password" v-model="password" />
      <button>Login</button>
    </form>
  </div>
</template>
  
  <script>
import { ref } from "@vue/reactivity";
import userLogin from "../composables/useLogin";

export default {
  setup(props, context) {
    let email = ref("");
    let password = ref("");

    let { error, signIn } = userLogin();
    let Login = async () => {
      let res = await signIn(email.value, password.value);
      if (res) {
        context.emit("enterChatroom");
      }
    };

    return { email, password, error, Login };
  },
};
</script>
  
  <style>
</style>