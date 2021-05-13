<template>
  <div class="home">
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
      storyNum: 0
    }
  },
  mounted () {
    this.stories = getStories()
  },
  methods: {
    clickStory () {
      this.storyNum += 1
      if (this.storyNum === this.stories.length) {
        this.storyNum = 0
      }
    }
  }
}
</script>
<style lang="scss">
.home {
  width: 100%;
  height: 100vh;
  #stories {
    width: 100%;
    height: 100vh;
  }
}
</style>
