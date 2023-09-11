<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id">
    <router-link :to="{ name: 'JobDetail', params: { id: job.id } }">
      <h1>{{ job.title }}</h1>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { id: "1", title: "project manager", detail: "project manager detail" },
        { id: "2", title: "Web Designer", detail: "Web Designer detail" },
        {
          id: "3",
          title: "Backend Designer",
          detail: "Backend Designer detail",
        },
      ],
    };
  },
};
</script>

<style>
</style>