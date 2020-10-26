<template>
  <ul id='pipes'>
    <template
    v-for="(leftposition, index) in pipesLeftPosition">
    <pipe :left="leftposition" :key="index" @update:left="updateLeft($event, index)"></pipe>
    </template>
  </ul>
</template>

<script>
import pipe from './Pipe'
import game from '@/utils/game'

let screenwidth = 600

export default {
  components: {
    pipe
  },
  data () {
    return {
      gutter: 300,
      pipesLeftPosition: []
    }
  },
  mounted () {
    game.on('ready', this.reset)
  },
  methods: {
    reset () {
      this.pipesLeftPosition = [0, 1, 2].map((item) => screenwidth + item * this.gutter)
    },
    updateLeft (e, index) {
      this.pipesLeftPosition.splice(index, 1, e)
    }
  }
}

</script>

<style>
#pipes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>