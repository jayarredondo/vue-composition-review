<script setup>
import { vAutofocus } from "@/directives/vAutoFocus";
import { ref } from "vue";

import { useCounterStore } from '../stores/counter.js'

const counter = useCounterStore();

const posts = ref([
  {
    id: 1,
    title: "Post 1",
  },
  {
    id: 2,
    title: "Post 2",
  },
  {
    id: 3,
    title: "Post 3",
  },
]);
</script>
<template>
  <main>
    <div class="posts">
      <h1>Posts</h1>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <router-link :to="`/postDetail/${post.id}`">{{
            post.title
          }}</router-link>
        </li>
      </ul>
      <textarea v-autofocus></textarea>
      <div>
        <button @click="counter.increaseCounter(1)" class="counter-button" :class="{'yellow' : counter.oddOrEven === 'odd'}">{{ counter.count }}</button>
      </div>
    </div>
  </main>
</template>
<style scoped>
ul {
  margin-bottom: 30px;
}

.counter-button {
  font-size: 60px;
  width: 100%;
  background-color: pink;
}

.counter-button.yellow {
  background-color: yellow;
}
</style>
