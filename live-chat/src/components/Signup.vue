<template>
  <div>
    <h2>Sign Up</h2>
    <form @submit.prevent="signUp">
      <input type="text" placeholder="display name" v-model="displayName" />
      <input type="email" placeholder="email" v-model="email" />
      <div class="error" v-if="error">{{ error }}</div>
      <input type="password" placeholder="password" v-model="password" />
      <button>Sing Up</button>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import useSignup from "../composables/useSignup";
export default {
  setup(props, context) {
    let displayName = ref("");
    let email = ref("");
    let password = ref("");

    let { error, createAccount } = useSignup();
    let signUp = async () => {
      let res = await createAccount(
        email.value,
        password.value,
        displayName.value
      )
      if(res){
        context.emit('enterChatroom');
      }
    };

    return { displayName, email, password, error, signUp };
  },
};
</script>

<style>
</style>