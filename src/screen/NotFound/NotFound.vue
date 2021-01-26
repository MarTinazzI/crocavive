<!--suppress HtmlRequiredAltAttribute -->
<template>
  <div
      class="screen-container"
  >
    <div
        class="phone-container"
    >
      <div class="not-found">
        <div class="not-found-container-box">
          <div class="not-found-container">
            <h1 class="not-found-text">404</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SuperCategory',
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
}

.phone-container {
  flex: 1;
  max-width: 600px;
  min-height: 100vh;
  height: 100vh;
  border-radius: 8px;
}

.not-found {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #faf5e7;
  color: ghostwhite;
  position: relative;
  z-index: 0;
  padding: 50px 20px;
}

.not-found-container-box {
  width: 100%;
  padding: 20px 30px;
  height: 100%;
}

.not-found-container {
  width: 100%;
}

.not-found-text {
  font-weight: 800;
  font-size: xxx-large;
  text-align: center;
  color: black;
}

@media screen and (min-width: 601px) {

  .screen-container {
    padding: 5px;
  }

  .phone-container {
    height: 98vh;
    min-height: 98vh;
  }

  .phone-container {
    box-shadow: 0 0 20px whitesmoke;
  }
}
</style>
