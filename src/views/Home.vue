<template>
  <div class="home">
    <div ref="progress-container" class="progress-container">
      <div style="animation-duration: 2s" class="progress"></div>
      <div style="animation-duration: 1s" class="progress"></div>
      <div style="animation-duration: 1s" class="progress"></div>
    </div>
    <Story
      @click.native="clickStory"
      v-show="storyNum === index"
      :story="story"
      v-for="(story, index) in stories"
      :key="story.id"
    />
  </div>
</template>

<script>
import Story from '@/components/Story.vue'
import { getStories } from '@/stories-api.js'

export default {
  components: {
    Story
  },
  data () {
    return {
      stories: [],
      progress: [],
      storyNum: 0
    }
  },
  mounted () {
    this.stories = getStories()
    this.progress = Array.from(this.$refs['progress-container'].children)
    this.progress.map(el => el.addEventListener('animationend', this.playNext, false))
    this.playNext()
  },
  methods: {
    clickStory () {
      this.storyNum += 1
      if (this.storyNum === this.stories.length) {
        this.storyNum = 0
      }
    },
    playNext (e) {
      const current = e && e.target
      let next
      if (current) {
        const currentIndex = this.progress.indexOf(current)
        if (currentIndex < this.progress.length) {
          next = this.progress[currentIndex + 1]
        }
        current.classList.remove('active')
        current.classList.add('passed')
      }
      if (!next) {
        this.progress.map((el) => {
          el.classList.remove('active')
          el.classList.remove('passed')
        })
        next = this.progress[0]
      }
      next.classList.add('active')
    }
  }
}
</script>
<style lang="scss">
.home {
  width: 100%;
  height: 100vh;
  position: relative;
  .stories-container {
    height: 100%;
  }
  .progress-container {
    display: flex;
    flex-direction: row;
    position: absolute;
    z-index: 2;
    top: 0;
    width: calc(100% - 10px);
    padding: 15px 5px;
    cursor: pointer;
    .progress {
      height: 4px;
      flex-grow: 1;
      border-radius: 4px;
      margin: 0 5px;
      display: flex;
      background-image: -webkit-linear-gradient(left,
        rgba(255,255,255,.5) 0%,
        rgba(255,255,255,.5) 50%,
        rgba(88, 89, 104,.5) 50.001%,
        rgba(88, 89, 104,.5) 100%
      );
      background-repeat: no-repeat;
      background-size: 200%;
      background-color: #666;
      background-position: 100% 50%;
      animation-timing-function: linear;
      animation-delay: .2s;
    }
    .progress.active {
      animation-name: Loader;
    }

    .progress.passed {
      background-position: 0 0;
    }

    @keyframes Loader {
      0%   { background-position: 100% 0; }
      100% { background-position: 0 0; }
    }
  }
}
</style>
