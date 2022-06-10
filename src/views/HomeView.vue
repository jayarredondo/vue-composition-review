<!--
OPTIONS API SYNTAX
<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increaseCounter() {
      this.counter++
    },
    decreaseCounter() {
      this.counter--
    }
  }
};
</script>
-->
<!--
COMPOSITION API SYNTAX

<script>
import { ref } from "vue";

export default {
  // old setup way
  setup() {
    const counter = ref(0);
    // When using ref() must access value using value prop.
    const increaseCounter = () => counter.value++;
    const decreaseCounter = () => counter.value--;

    return { counter, increaseCounter, decreaseCounter };
  },
};
</script>
-->
<script setup>
import { reactive } from "vue";

// Non-Reactive data can be stored in a const as well.
const appTitle = "My Amazing Counter App";

// const counter = ref(0);

// const counterTitle = ref("My Counter");

// Using reactive objects: using the reactive() method, you can pass an object with properties that can be manipulated and updated. 2 way binding.
const counterData = reactive({
  count: 0,
  title: "My Counter"
})

const increaseCounter = () => counterData.count++;
const decreaseCounter = () => counterData.count--;
</script>

<template>
  <main>
    <div class="home">
      <h2>{{appTitle}}</h2>
      <h3>{{ counterData.title }}</h3>
      <div>
        <button @click="decreaseCounter" class="btn">-</button>
        <span class="counter">{{ counterData.count }}</span>
        <button @click="increaseCounter" class="btn">+</button>
      </div>
      <div class="edit">
        <h4>Edit Counter Title:</h4>
        <input v-model="counterData.title" type="text" />
      </div>
    </div>
  </main>
</template>
<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}
.edit {
  margin-top: 60px;
}

</style>