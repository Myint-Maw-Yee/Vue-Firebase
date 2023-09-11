<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ success: theme === 'success', danger: dtheme === 'danger'}">
      <slot>default</slot>
      <slot name="links" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["theme", "dtheme"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  background: gray;
  width: 100%;
  height: 100%;
}
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background-color: white;
  border-radius: 10px;
}
.success {
  background-color: green;
  color: white;
}
.danger{
    background-color: crimson;
    color:white;
}
</style>