<template>
<div>
  <v-card>

  </v-card>
</div>
</template>

<script>
export default {
  name: "SpoilerBox",
  props: {
    open: {
      type: Boolean,
      default: false
    },
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
