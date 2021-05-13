<template>
  <div class="home">
    <div ref="progress-container" class="progress-container">
      <div style="animation-duration: 1s" class="progress"></div>
      <div style="animation-duration: 2s" class="progress"></div>
      <div style="animation-duration: 3s" class="progress"></div>
    </div>
    <Story
      @click.native="pauseStories"
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
      allProgress: [],
      currentProgress: {},
      lastProgress: {},
      currentIndex: -1,
      storyNum: 0,
      watchNext: false,
      pause: false
    }
  },
  mounted () {
    this.stories = getStories().slice(0, 3)
    this.allProgress = Array.from(this.$refs['progress-container'].children)
    this.allProgress.map(el => el.addEventListener('animationend', this.watchStories, false))
    this.watchStories()
  },
  methods: {
    /*
    clickStory () {
      this.storyNum += 1
      if (this.storyNum === this.stories.length) {
        this.storyNum = 0
      }
    },
    */
    pauseStories () {
      if (!this.pause) {
        this.$refs['progress-container'].children.forEach(el => {
          el.style['animation-play-state'] = 'paused'
        })
        this.pause = !this.pause
      } else {
        this.watchStories()
        this.pause = !this.pause
      }
    },
    watchStories (e) {
      this.allProgress.forEach(el => {
        el.style['animation-play-state'] = 'running'
      })
      if (!this.pause) {
        this.lastProgress = e && e.target
      } else {
        this.lastProgress = this.allProgress[this.currentIndex + 1]
      }
      if (this.lastProgress) {
        this.currentIndex = this.allProgress.indexOf(this.lastProgress)
        if (this.currentIndex === this.allProgress.length - 1) {
          this.allProgress.forEach(el => {
            el.style['animation-play-state'] = 'paused'
          })
        } else if (this.currentIndex < this.allProgress.length) {
          this.currentProgress = this.allProgress[this.currentIndex + 1]
          this.storyNum = this.currentIndex + 1
        }
        this.lastProgress.classList.remove('active')
        this.lastProgress.classList.add('passed')
      }
      if (!Object.keys(this.currentProgress).length) {
        this.currentIndex = -1
        this.allProgress.map((el) => {
          el.classList.remove('active')
          el.classList.remove('passed')
        })
        this.currentProgress = this.allProgress[0]
        this.storyNum = 0
      }
      this.currentProgress.classList.add('active')
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
      background-color: #fff;
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
