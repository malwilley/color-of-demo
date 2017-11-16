<template>
    <div 
      class="color-bubble" 
      :class="{'bubble--animate': bubbleAnimating}" 
      :style="{left: pxFromLeft, top: pxFromTop, backgroundColor: bubbleColor}"
      @animationend="bubbleDoneAnimating" >
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'color-bubble',
  computed: {
    ...mapGetters([
      'bubblePosX',
      'bubblePosY',
      'bubbleColor',
      'bubbleAnimating',
    ]),
    pxFromLeft() {
      return `${this.bubblePosX - 500}px`;
    },
    pxFromTop() {
      return `${this.bubblePosY - 500}px`;
    },
  },
  methods: {
    ...mapActions([
      'bubbleDoneAnimating',
    ]),
  },
};
</script>

<style scoped>
  .color-bubble {
    position: absolute;
    width: 1000px;
    height: 1000px;
    border-radius: 500px;
    will-change: transform;
    transform: scale(0,0);
    z-index: -10;
  }

  .bubble--animate {
    animation: bubbleout 600ms ease-in-out;
    transform: scale(3,3);
  }

  @keyframes bubbleout {
  0% {
    transform: scale(0, 0);
  }
  20% {
    transform: scale(.10, .10);
  }
  30% {
    transform: scale(.08, .08);
  }
  100% {
    transform: scale(3, 3);
  }
}
</style>