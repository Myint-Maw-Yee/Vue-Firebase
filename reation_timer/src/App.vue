<template>
  <h1>How fast Can you catch me?</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <div v-if = 'isPlaying'>
    <Block :delay="delay" @endGame="endGame"/>
  </div>
  <div v-if="end">
    <Result :score="score" />
  </div>
</template>

<script>
import Block from './components/Block.vue'
import Result from './components/Result.vue'
export default {
  name:'App',
  components: {
    Block,
    Result
  },
  data(){
    return{
      isPlaying:false,
      delay:null,
      score:0,
      end:false,
    }
  },
  methods:{
    start(){
      this.isPlaying = true;
      this.delay = 2000+Math.random()*5000;
    },
    endGame(score){
      this.score = score;
      this.isPlaying=false;
      this.end = true;
    }
  }
}
</script>

<style>
  #app{
    text-align: center;
    color:gray;
    margin-top: 60px;
  }
</style>

