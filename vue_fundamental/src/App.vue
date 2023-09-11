
<template>
  <div v-if="showModal">
    <Modal :theme="theme" @close="showModal = false">
      <h1>Login Success</h1>
      <p>Welcome user myint maw yee</p>
      <template v-slot:links>
        <a href="">Login</a>
      </template>
    </Modal>
  </div>
  <div v-if="deleteModal">
    <Modal :dtheme="dtheme" @close="deleteModal = false">
      <h1>Delete Success</h1>
      <p>Bye user MMY</p>
    </Modal>
  </div>
  <button @click="showModal = true">Open Modal</button>
  <button @click="deleteModal = true">Delete Modal</button>
</template>

<script>
import Modal from "./components/Modal.vue";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      header: "Login Success",
      content: "Welcome user myint maw yee",
      theme: "success",
      dtheme: "danger",
      showModal: false,
      deleteModal: false,
    };
  },
};
</script>

<style>
</style>