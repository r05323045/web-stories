<template>
  <div class="story">
    <img ref="story-image" class="story-image" :src="story.imageUrl" :style="{'animation-play-state': `${this.pause ? 'paused' : 'running'}`}">
    <div class="left-side"></div>
    <div class="right-side"></div>
    <div class="story__text">
      {{ story.text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    story: Object,
    pause: Boolean
  }
}
</script>

<style scoped lang="scss">
.story {
  width: 100%;
  height: 100%;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  .story-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: zoomin 8s ease-in alternate;
  }
  @keyframes zoomin {
    0% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1.1, 1.1);
    }
  }
  .left-side {
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
  }
  .right-side {
    z-index: 2;
    position: absolute;
    top: 0;
    left: 50%;
    height: 100%;
    width: 50%;
  }
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
