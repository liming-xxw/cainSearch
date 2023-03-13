<template>
  <v-hover open-delay="1000" close-delay="100">
    <template v-slot:default="{ isHovering, props }">
      <div
        v-bind="props"
        :class="{
          applicationNewCard: true,
          applicationNewCardActive: isHovering,
        }"
        :style="{ left: 231 * Number(item - 1) + 'px' }"
      >
        <v-img height="150px" :src="isHovering ? appImgBg : appImg"> </v-img>
        <div class="applicationNewCardBox">
          <div class="applicationNewCardBoxTitle">vuetify</div>
          <div class="applicationNewCardBoxDosc">
            一款基于materile design规范的vue3框架
          </div>
          <v-rating
            model-value="5"
            color="#154599"
            size="x-small"
            readonly
          ></v-rating>
          <div>
            <v-chip size="x-small" color="#154599" label>精品网站 </v-chip>
          </div>
        </div>
      </div>
    </template>
  </v-hover>
</template>

<script setup lang="ts">
import appImg from "../../assets/vuetify.png";
import appImgBg from "../../assets/vuetifyBg.png";
import { toRefs, defineProps } from "vue";
const props = defineProps({
  item: {
    type: Number,
    default: () => {},
  },
});
const { item } = toRefs(props);
</script>

<style lang="scss" scoped>
.applicationNewCard {
  width: 210px;
  height: 320px;
  transition: 0.3s;
  border: 1px rgba(0, 0, 0, 0.12) solid;
  position: absolute;
  background-color: white;
  transform: translateX(-50%);
  transition: 0.3s;
  &:hover {
    // top: -10px !important;
    transform: translate(-50%, -10px);
    z-index: 1;
  }
  &:first-child {
    transform: translateX(0);
    left: -105px !important;
    &:hover {
      transform: translate(0, -10px) !important;
      z-index: 1;
    }
  }
  &:last-child {
    transform: translateX(-100%);
    left: 1260px !important;
    &:hover {
      transform: translate(-100%, -10px) !important;
      z-index: 1;
    }
  }
  .applicationNewCardBox {
    box-sizing: border-box;
    padding: 10px;
    position: relative;
    .applicationNewCardBoxTitle {
      font-size: 20px;
      font-weight: 600;
    }
    .applicationNewCardBoxDosc {
      font-size: 12px;
      width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      color: #8998ac;
    }
  }
}
.applicationNewCardActive {
  width: 300px;
  z-index: 1;
}
</style>
