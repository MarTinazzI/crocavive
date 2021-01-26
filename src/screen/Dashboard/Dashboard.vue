<!--suppress HtmlRequiredAltAttribute -->
<template>
  <div
      class="screen-container"
  >
    <div
        class="phone-container"
    >
      <router-view :key="$route.path"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
}
</script>

<style
    lang="scss"
    scoped
>
@import "src/base";

.screen-container {
  width: 100vw;
  display: flex;
  justify-content: center;
  background: #d1d1d1;
}

.phone-container {
  flex: 1;
  max-width: 800px;
  min-height: 100vh;
  border-radius: 8px;
}

@media screen and (min-width: 601px) {
  .phone-container {
    min-height: 100vh;
  }
}

</style>
