<template>
  <div>
    Projet {{ title }}
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
  },
  props: {
    title: {
      type: String,
      default: () => null
    }
  }
}
</script>

