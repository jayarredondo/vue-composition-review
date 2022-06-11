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

// all this code is ran before the component is created.
<script setup>
import { ref, onMounted } from "vue";
import { vAutofocus } from "@/directives/vAutoFocus";
import { useCounterStore } from "../stores/counter";

const counter = useCounterStore();

// Non-Reactive data can be stored in a const as well.

const appTitle = "My Amazing Counter App";

// template ref (can assign a ref to be a unique selector)
const appTitleRef = ref(null);

onMounted(() => {
  console.log("Do stuff related to title.");
  appTitleRef.value;
});

// LIFECYCLE HOOKS
// onMounted(() => {
//   console.log("onMounted")
// })

// onUnmounted(() => {
//   console.log("onUnmounted")
// })

// onBeforeMount(() => {
//   console.log("onBeforeMount");
// });

// onBeforeUnmount(() => {
//   console.log("onBeforeUnmounted");
// });

// onActivated(() => {
//   console.log("onActivated");
// })

// onDeactivated(() => {
//   console.log('onDeactivated');
// })

// Used for when the template changes (reactive data properties re-render)
// onBeforeUpdate(() => {
//   console.log("onBeforeUpdate")
// })

// onUpdated(() => {
//   console.log("onUpdated");
// })
</script>
<!-- OPTIONS API computed property 

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  computed: {
    myComputedProperty () {
      // perform logic based on a data property
      return 'my result'
    }
  },
  watch: {
      count(newCount, oldCount) {
        if (newCount === 20) {
          alert("It's 20!")
        }
      }
  },
  mounted() {
    // do stuff when component is loaded to browser.
  },
  unmounted() {
    // do stuff when component is unloaded from browser.
  },
  directives: {
    autofocus: {
      mounted(el) {
        el.focus();
      }
    }
  }
}
</script>
-->
<template>
  <main>
    <div class="home">
      <h2 ref="appTitleRef">{{ appTitle }}</h2>
      <h3>{{ counter.title }}</h3>
      <div>
        <button @click="counter.decreaseCounter(2)" class="btn">--</button>
        <button @click="counter.decreaseCounter(1)" class="btn">-</button>
        <span class="counter">{{ counter.count }}</span>
        <button @click="counter.increaseCounter(1)" class="btn">+</button>
        <button @click="counter.increaseCounter(2)" class="btn">++</button>
      </div>
      <p>This counter is {{counter.oddOrEven}}</p>
      <div class="edit">
        <h4>Edit Counter Title:</h4>
        <input type="text" v-model="counter.title" v-autofocus />
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