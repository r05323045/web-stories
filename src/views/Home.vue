<template>
  <div class="container">
    <div class="home">
      <div ref="progress-container" class="progress-container">
        <div
          v-for="story in stories"
          :key="story.id"
          class="progress"
          :style="{'animation-duration': `${story.duration}ms`}"
          :class="{'active': story.active, 'passed': story.passed}"
        >
        </div>
      </div>
      <Story
        v-show="storyNum === index && story.gotData"
        :story="story"
        :pause="pause"
        v-for="(story, index) in stories"
        :key="story.id"
        @clickDownLeftSide="pauseStories"
        @clickUpLeftSide="clickLeft"
        @clickDownRightSide="pauseStories"
        @clickUpRightSide="clickRight"
      />
      <fake-story
        v-show="storyNum === index && !story.gotData"
        v-for="(story, index) in stories"
        :key="`${story.id}-fake`"
        @clickDownLeftSide="pauseStories"
        @clickUpLeftSide="clickLeft"
        @clickDownRightSide="pauseStories"
        @clickUpRightSide="clickRight"
      />
    </div>
  </div>
</template>

<script>
import Story from '@/components/Story.vue'
import FakeStory from '@/components/FakeStory.vue'
import { getStoriesMeta, ajaxGetStoryByIdUnstable } from '@/stories-api.js'

export default {
  components: {
    Story,
    FakeStory
  },
  data () {
    return {
      weightInfo: {},
      storiesId: [],
      stories: [],
      allProgress: [],
      currentProgress: {},
      currentIndex: 0,
      pauseTime: 0,
      storyNum: 0,
      pause: false
    }
  },
  mounted () {
    this.weightInfo = getStoriesMeta()
    this.getfakeStories()
    window.addEventListener('keydown', event => {
      if (event.keyCode === 32) {
        this.pauseStories()
      }
    })
    window.addEventListener('keyup', event => {
      if (event.keyCode === 32) {
        this.continueStories()
      } else if (event.keyCode === 37) {
        this.stories[this.storyNum].passed = false
        this.stories[this.storyNum].active = false
        if (this.stories[this.storyNum - 1]) {
          this.stories[this.storyNum - 1].passed = false
        }
        this.currentProgress = this.currentIndex === 0 ? undefined : this.allProgress[this.storyNum - 2]
        this.watchStories()
      } else if (event.keyCode === 39) {
        this.stories[this.storyNum].active = false
        this.stories[this.storyNum].passed = true
        this.currentProgress = this.allProgress[this.storyNum]
        this.watchStories()
      }
    })
    this.$nextTick(() => {
      this.allProgress = Array.from(this.$refs['progress-container'].children)
      this.allProgress.map(el => el.addEventListener('animationend', this.watchStories, false))
      this.getStory()
    })
  },
  methods: {
    getfakeStories () {
      this.storiesId = this.randomStories(6)
      this.stories = this.storiesId.map(storyId => ({
        id: storyId,
        imageUrl: 'https://www.colorhexa.com/666666.png',
        text: 'Loading...',
        duration: 3000,
        weight: 1,
        active: false,
        passed: false,
        gotData: false
      }))
    },
    async getStory () {
      this.pauseStories()
      await this.fetchStory(this.currentIndex)
    },
    async fetchStory (targetIndex) {
      const targetId = this.storiesId[targetIndex]
      const story = this.stories[this.stories.findIndex(s => s.id === targetId)].gotData ? this.stories[this.stories.findIndex(s => s.id === targetId)] : await ajaxGetStoryByIdUnstable(targetId)
      if (!story) {
        return this.fetchStory(targetIndex)
      }
      this.stories[this.stories.findIndex(s => s.id === targetId)].imageUrl = story.imageUrl
      this.stories[this.stories.findIndex(s => s.id === targetId)].text = story.text
      this.stories[this.stories.findIndex(s => s.id === targetId)].duration = story.duration
      this.stories[this.stories.findIndex(s => s.id === targetId)].weight = story.weight
      this.stories[this.stories.findIndex(s => s.id === targetId)].gotData = true
      this.continueStories()
      let nextTargetIndex
      for (let i = targetIndex; i < this.storiesId.length; i++) {
        if (!this.stories[this.stories.findIndex(s => s.id === this.storiesId[i])].gotData) {
          nextTargetIndex = i
          break
        }
        nextTargetIndex = false
      }
      if (nextTargetIndex) {
        return this.fetchStory(nextTargetIndex)
      }
    },
    randomStories (numOfShown) {
      const arr = []
      for (let i = 0; i < this.weightInfo.idList.length; i++) {
        for (let j = 0; j < this.weightInfo.weightList[i]; j++) {
          arr.push(this.weightInfo.idList[i])
        }
      }
      const result = []
      for (let i = 0; i < numOfShown; i++) {
        const storyId = arr[Math.floor(Math.random() * arr.length)]
        if (result.indexOf(storyId) > -1) {
          i -= 1
        } else {
          result.push(storyId)
        }
      }
      return result
    },
    pauseStories (e) {
      this.pauseTime = new Date().getTime()
      this.pause = true
      this.allProgress.forEach(el => {
        el.style['animation-play-state'] = 'paused'
      })
    },
    clickRight (e) {
      if (new Date().getTime() - this.pauseTime < 200) {
        this.stories[this.storyNum].active = false
        this.stories[this.storyNum].passed = true
        this.currentProgress = this.allProgress[this.storyNum]
      } else {
        this.currentProgress = this.allProgress[this.storyNum - 1]
      }
      this.watchStories()
    },
    clickLeft (e) {
      if (new Date().getTime() - this.pauseTime < 200) {
        this.stories[this.storyNum].passed = false
        this.stories[this.storyNum].active = false
        if (this.stories[this.storyNum - 1]) {
          this.stories[this.storyNum - 1].passed = false
        }
        this.currentProgress = this.currentIndex === 0 ? undefined : this.allProgress[this.storyNum - 2]
      } else {
        this.currentProgress = this.allProgress[this.storyNum - 1]
      }
      this.watchStories()
    },
    continueStories (e) {
      this.currentProgress = this.allProgress[this.storyNum - 1]
      this.watchStories()
    },
    watchStories (e) {
      this.allProgress.forEach(el => {
        el.style['animation-play-state'] = 'running'
      })
      this.pause = false
      if (!this.currentProgress) { // watch first story
        if (!this.stories[this.currentIndex].gotData) {
          this.getStory()
        }
        this.currentProgress = this.allProgress[0]
        this.storyNum = 0
        this.stories[0].active = true
      } else { // after watching first story
        this.currentIndex = this.allProgress.indexOf(this.currentProgress) + 1
        if (this.currentIndex < this.allProgress.length) {
          if (!this.stories[this.currentIndex].gotData) {
            this.getStory()
          }
          this.currentProgress = this.allProgress[this.currentIndex]
          this.storyNum = this.currentIndex
          this.stories[this.storyNum - 1].active = false
          this.stories[this.storyNum - 1].passed = true
          this.stories[this.storyNum].active = true
        } else if (this.currentIndex === this.allProgress.length) {
          this.stories[this.storyNum].active = false
          this.stories[this.storyNum].passed = true
          this.allProgress.forEach(el => {
            el.style['animation-play-state'] = 'pause'
          })
        }
      }
    }
  }
}
</script>
<style lang="scss">
.container {
  position: relative;
  @media (min-width: 576px) {
    margin: auto;
    width: calc(100vh * 9 / 16);
    padding-top: 100vh;
  }
  .home {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
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
        animation-duration: 3s;
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
}
</style>
