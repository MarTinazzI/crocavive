<template>
  <v-card style="height: fit-content;" class="mb-4">
    <v-card-title v-html="title"/>
    <v-card-text>
      <slot/>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "SpoilerBox",
  props: {
    open: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  },
  watch: {
    open(newValue) {
      this.myOpen = newValue
    }
  },
  data() {
    return {
      myOpen: false
    }
  },
  mounted() {
    this.myOpen = this.open;
  },
  methods: {
    update() {
      this.myOpen = !this.myOpen
      this.$emit('open', this.myOpen)
    }
  },
}
</script>

<style scoped>
.spoiler-box {
}

.spoiler-box-header {

}
</style>
