<template>
  <div>
    <span class="fwb db">
      {{ year }}
    </span>
    <span class="my-subtitle fzm dib pl10 pt5">
      {{ title }}  
      <span class="fwb">
        {{ acronyme }}
      </span>
    </span>
    <span class="fzs db pl20 pt5">
      {{ place }}
    </span>
    <span 
      v-if="link"
      class="fzs db pl20 pt5">
      <a 
        :href="link" 
        target="_blank"
        class="txt-aqua-sky--hover">Lien vers la formation</a>
    </span>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
  },
  props: {
    year: {
      type: String,
      default: () => null
    },
    title: {
      type: String,
      default: () => null
    },
    acronyme: {
      type: String,
      default: () => null
    },
    place: {
      type: String,
      default: () => null
    },
    link: {
      type: String,
      default: () => null
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
