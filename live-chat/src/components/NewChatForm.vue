<template>
  <form>
    <textarea
      v-model="message"
      placeholder="Enter text message and hit enter to send"
      @keypress.enter="handleSubmit"
    ></textarea>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import getUser from "../composables/getUser";
import useCollection from "../composables/useCollection";
import { timestamp } from "../firebase/config";
export default {
  setup() {
    let message = ref("");
    let { user } = getUser();
    let { error, addDoc } = useCollection("messages");
    let handleSubmit = async() => {
      let chat = {
        message: message.value,
        name: user.value.displayName,
        created_at: timestamp(),
      };
      await addDoc(chat);
      console.log(chat);
      message.value = "";
    };
    return { message, handleSubmit };
  },
};
</script>

<style>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>