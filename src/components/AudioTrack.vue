<template>
  <n-space justify="center" align="center">
    <n-image :src="img" width="104"></n-image>
    <n-button type="success" v-if="volume > 0" @click="changeStatus">{{keyName}}</n-button>
    <n-button v-else @click="changeStatus">{{keyName}}</n-button>
    <audio :src="src" ref="audio" :muted="muted" :volume="volume" controls></audio>
  </n-space>
  <!-- <div>hello</div> -->
</template>
<script>
export default {
  setup() {},
  props: ["volume", "muted", "src", "play", "syncTime", "id", "keyName", "img"],
  data() {
    return {
    };
  },
  methods: {
    getCurrentTime() {
      return this.$refs.audio.currentTime
    },
    setCurrentTime(i) {
      this.$refs.audio.currentTime = i
    },
    changeStatus() {
      this.$root.changeStatus(parseInt(this.id))
    }
  },
  watch: {
    play(newVal) {
      let player = this.$refs.audio;
      if (newVal) {
        player.play();
      } else {
        player.pause();
      }
    },
    syncTime(newVal) {
      let player = this.$refs.audio;
      player.currentTime = newVal
    },
  },
  computed: {
    currentTime: {
      get() {
        return this.$refs.audio.currentTime
      },
      set(val) {
        this.$refs.audio.currentTime = val
      }
    }
  }
};
</script>