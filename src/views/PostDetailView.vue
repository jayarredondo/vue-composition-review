<script setup>
import { useRoute, useRouter } from 'vue-router';
  // in order to access params in script, must use useRoute() method
const route = useRoute();

const router = useRouter();

const showPostId = () => {
  alert(`The ID of this post is ${route.params.id}.`);
}

const goHomeIn3Seconds = () => {
  setTimeout(() => {
    router.push({ name: 'home' });
  }, 3000) 
}

// how to send to individual post
const goToFirstPost = () => {
  router.push({
    name: 'postDetail',
    params: {
      id: 'id1'
    }
  })
}

</script>
<template>
  <main>
    <div class="post-detail">
      <h1>This is a post page.</h1>
      <!-- Accessing parameters passed in the URL -->
      <p>Display the content of the post with ID of {{$route.params.id}}</p>
      <div>
        <button @click="showPostId">Show Post ID</button>
      </div>
      <div>
        <button @click="goHomeIn3Seconds">Go home in 3 Seconds</button>
      </div>
      <p><router-link to="/posts">&lt; Back</router-link></p>
    </div>
  </main>
</template>
