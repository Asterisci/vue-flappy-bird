<template>
  <div id='land'
  :style="{left: left + 'px', top: top + 'px'}"
  ></div>
</template>

<script>
import game from '@/utils/game'
import world from '@/utils/world'
import config from '@/config'

export default {
  data () {
    return {
      name: 'land',
      speed: 2,
      left: 0,
      leftlimit: -20
    }
  },
  computed: {
    top () {
      return config.land.top
    }
  },
  mounted () {
    this.listenGameEvent()
  },
  methods: {
    update () {
      if (this.left < this.leftlimit) this.left = 0
      this.left -= this.speed
      return this
    },

    listenGameEvent () {
      game.on('ready', () => world.listeners.add(this.update))
      game.on('over', () => world.listeners.remove(this.update))
    }
  }
}

</script>

<style>
#land {
  position: absolute;
  top: 86%;
  left: 0;
  width: 120%;
  height: 14%;
  background: url(../assets/img/land.png) repeat-x;
}
</style>