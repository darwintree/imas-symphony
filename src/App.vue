<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <n-space justify="center" align="center">
      <n-button @click="beginPlay">
        <span v-if="!this.play">begin</span>
        <span v-else>pause</span>
      </n-button>
    <n-button @click="sync(0)">sync</n-button>
    </n-space>

    <n-space vertical>
      <audio-track
        v-for="(src, key) in trackSrc"
        v-bind:key="key"
        v-bind:src="src"
        v-bind:img="imageSrc[key]"
        v-bind:play="play"
        v-bind:id="key"
        v-bind:syncTime="syncTime"
        v-bind:volume="volumeList[key]"
        v-bind:keyName="keys[key]"
        :ref="'audio' + key"
      ></audio-track>
    </n-space>
  </div>
  <!-- <router-view/> -->
</template>
<script>
import AudioTrack from "./components/AudioTrack";
import key from "keymaster";
// import Track from './components/Track.vue'

export default {
  components: { AudioTrack },
  setup() {},
  data() {
    return {
      trackSrc: ["bgm.mp3", "amami.mp3", "chihaya.mp3", "miki.mp3"],
      imageSrc: ["mvtn99.jpg", "amami.jpg", "chihaya.jpg", "miki.jpg"],
      volumeList: [1, 0, 0, 0],
      play: false,
      syncTime: 0,
      keys: "qjklasd",
    };
  },
  methods: {
    beginPlay() {
      this.play = !this.play;
    },
    sync(i) {
      // defaultly audio0 is bgm
      let player = this.$refs["audio0"];
      if (i == undefined || i == 0) {
        this.syncTime = player.getCurrentTime();
      } else {
        this.$refs[`audio${i}`].setCurrentTime(player.getCurrentTime());
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      key(`enter, space`, () => {
        this.beginPlay();
      });
      for (let i = 0; i < this.trackSrc.length; i += 1) {
        key(`${this.keys[i]}`, () => {
          // console.log(event.type);
          if (i && this.volumeList[i] == 1) {
            this.sync(i);
          }
          this.volumeList[i] = 1 - this.volumeList[i];

          // else{
          //   this.volumeList[i] = 0;
          // }
        });
      }
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
