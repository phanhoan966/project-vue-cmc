<template>
  <div>
    <p>value a: {{ a1 }}</p>
    <p>value b: {{ b1 }}</p>
    <button @click="handle">Click Me</button>
  </div>
</template>
<script>
export default {
   data() {
     return {
       a: 1,
       b: 10
     }
   },
   computed: {
     a1 () {
       console.log('vào method a')
       return this.a
     },
     b1 () {
       console.log('vào method b')
       return this.b
     }
   },
   methods: {
     handle () {
       this.a += 3
     }
   }
}
</script>
<style>
  
</style>