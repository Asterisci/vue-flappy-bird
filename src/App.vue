<template>
  <div id="app" tabindex = 0>
  <panel></panel>
  <bird></bird>
  <pipes></pipes>
  <land></land>
  </div>
</template>

<script>
import land from '@/components/Land.vue'
import panel from '@/components/Panel.vue'
import bird from '@/components/Bird.vue'
import pipes from '@/components/Pipes.vue'
import game from '@/utils/game'

export default {
  data () {
    return {
      width: 600,
      height: 800
    }
  },
  components: {
    bird,
    panel,
    land,
    pipes
  },
  mounted () {
    let body = document.querySelector('body')
    body.onkeydown = (e) => {
      if (e.keyCode !== 32) return
      this.eventClick()
      return false
    }
    body.ontouchstart = () => {
      this.eventClick()
      return false
    }
  },
  methods: {
    eventClick () {
      if (game.state === 'ready') {
        game.setState(game.states.start)
      } else if (game.state === 'start') {
        game.jump()
      }
    }
  }
}
</script>

<style>
@import './assets/css/normalize.css';

* {
  box-sizing: border-box;
}

ul {
  list-style: none;
}
html {
  height: 100%;
}

body {
  font-family: Helvetica, sans-serif;
  height: 100%;
}

#app {
  position: absolute;
  top: 50%;
  left: 50%;
  width:  600px;
  height: 800px;
  margin-top: -400px;
  margin-left: -300px;
  border: 5px solid black;
  background: url(./assets/img/bg_day.png) no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
}

</style>
