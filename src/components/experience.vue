<template>
  <div>
    <span class="db mb5 fwb">
      {{ year }} 
    </span>
    <div class="m10">
      <div
        class="block-img">
          <img
            v-if="img" 
            class="w4"
            :src="getImgLink" />
      </div>
      <div class="dib ml5 mt5">
        <span class="my-subtitle fwb db">
          {{ title }}   
        </span>
        <span class="fll fzs fwb db mt5">
          @{{ subtitle }}   
        </span>
      </div>
      <p class="db fzs mt20">
        {{ content }}
      </p>
      <ul>
        <li
          v-for="(m,index) in more"
          :key="index"
          class="fzs pt5">
          {{ m }}
        </li>
      </ul>
    </div>
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
    img: {
      type: String,
      default: () => null
    },
    title: {
      type: String,
      default: () => null
    },
    subtitle: {
      type: String,
      default: () => null
    },
    content: {
      type: String,
      default: () => null
    },
    more: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    getImgLink () {
      const url = `img/companies/${this.img}`
      return url
    }
  }
}
</script>

