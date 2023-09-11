<template>
  <div v-if="posts.length > 0" class="layout">
    <div>
      <PostList :posts="posts"></PostList>
    </div>
    <div>
      <TagCloud :posts="posts"></TagCloud>
    </div>
  </div>
  
  <!-- <h1>Person one</h1>
  <p>{{personOne.name}} -- {{personOne.age}}</p>
  <button @click="changeOne">Change Name</button>

  <h1>Person Two</h1>
  <p>{{personTwo.name}} -- {{personTwo.age}}</p>
  <button @click="changeTwo">Change Name</button>

  <input type="text" v-model="search">
  <p>Search Items -- {{search}}</p>
  <div v-for="name in filteredNames" :key="name">
    {{name}}
  </div> -->
</template>

<script>
import TagCloud from "../components/TagCloud.vue";
import Spinner from "../components/Spinner.vue";
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts.js";
// import { computed } from '@vue/runtime-core';
export default {
  components: {
    TagCloud,
    Spinner,
    PostList,
  },
  setup() {
    let { posts, error, load } = getPosts();
    load();
    return { posts, error };
    //  let personOne = ref({name:"MMY", age: 20});
    //  let changeOne = ()=>{
    //   personOne.value.name = "Myint Maw Yee";
    //  };

    //  let personTwo = reactive({name:"YHK", age: 20});
    //  let changeTwo = () =>{
    //   personTwo.name = "Ye Htet Khant";
    //  };

    //  let search= ref("");
    //  let names = ref(['aung aung', 'Kyaw Kyaw', "Su su", "Mg Mg"]);
    //  let filteredNames = computed(()=>{
    //   return names.value.filter(name =>{
    //     return name.includes(search.value);
    //   })
    //  })
    //  return {personOne, personTwo, names, search, filteredNames, changeOne, changeTwo};
  },
};
</script>

<style>
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>