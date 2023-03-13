<template>
  <div class="applicationNewCardX">
    <v-img height="150px" :src="appImgBg"> </v-img>
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
.applicationNewCardX {
  width: 200px;
  height: 320px;
  transition: 0.3s;
  border: 1px rgba(0, 0, 0, 0.12) solid;
  background: white;

  .applicationNewCardBox {
    box-sizing: border-box;
    padding: 10px;
    position: relative;
    .applicationNewCardBoxTitle {
      font-size: 20px;
      font-weight: 600;
      color: #154599;
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
</style>
