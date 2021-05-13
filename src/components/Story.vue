<template>
  <div class="story" :style="{ 'background-image': `url(${story.imageUrl})` }">
    <div class="story__text">
      {{ story.text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    story: Object
  }
}
</script>

<style scoped lang="scss">
.story {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  .story__text {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 100px 16px 100px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
    text-align: center;
    font-size: 24px;
    color: #FFF;
    line-height: 1.5;
  }
}
</style>
