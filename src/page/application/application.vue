<template>
  <div class="appLocation">
    <div class="appLicationBG">
      <div class="appLicationBgImg">
        <v-img :src="app"></v-img>
      </div>
    </div>

    <div class="appLicationBody">
      <div class="appLicationBodyItem">
        <div class="appLicationBodyItemTitle">推荐网站</div>
        <div class="appLicationBodyList" style="transform: translateX(0px)">
          <cainApplicationCard v-for="item in 8"></cainApplicationCard>
        </div>
      </div>
      <div class="appLicationBodyItem">
        <div class="appLicationBodyItemTitle">精选网站</div>
        <div class="appLicationBodyList">
          <cainApplicationNewCard
            v-for="(item, index) in 6"
            :key="index"
            :item="item"
          ></cainApplicationNewCard>
        </div>
      </div>
      <div style="height: 340px"></div>
      <div class="applicationLine d-flex">
        <div class="applicationLineLeft">
          <div class="applicationLineTitle">精选专栏</div>
          <div class="applicationLineName">GTP系列网站</div>
          <div class="applicationLineDocs">
            根据chatGTP构建的网站，融入了丰富的api
          </div>
          <div>
            <v-btn color="#154599" style="color: white" flat> 查看专栏 </v-btn>
          </div>
        </div>
        <div class="applicationLineRight">
          <specialCard
            v-for="(item, index) in 4"
            :key="'special' + index"
          ></specialCard>
        </div>
      </div>
      <!-- <div class="appLicationBodyItem">
        <div class="appLicationBodyItemTitle">推荐网站</div>
        <div class="devlist">
          <developerCard v-for="(item,index) in 4" :key="'dev'+index" />
        </div>
      </div> -->
    </div>
  </div>
</template>
<script setup lang="ts">
import app from "../../assets/appsh.webp";
import cainApplicationCard from "../../components/card/appLicationCard.vue";
import cainApplicationNewCard from "../../components/card/appLicationNewCard.vue";
import specialCard from "../../components/card/specialCard.vue";
import developerCard from "../../components/card/developerCard.vue";
</script>

<style lang="scss" scoped>
.appLocation {
  .appLicationBG {
    width: 100%;
    // height: calc(100vh);
    height: 100vh;
    overflow: hidden;
    .appLicationBgImg {
    }
  }
  .appLicationBody {
    box-sizing: border-box;
    padding: 0 20px;
    .appLicationBodyItem {
      padding-top: 20px;
      .appLicationBodyItemTitle {
        font-size: 20px;
        font-weight: 600;
      }
      .appLicationBodyList {
        box-sizing: border-box;
        padding-top: 20px;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        position: relative;
        transform: translateX(105px);
      }
    }
    .applicationLine {
      width: 100%;
      height: 500px;
      background-color: red;
      background: #154599; /* fallback for old browsers */
      background: -webkit-linear-gradient(
        to right,
        #85b1e0,
        #154599
      ); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #85b1e0, #154599);
      color: white;
      .applicationLineLeft {
        align-items: center;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 500px;
        .applicationLineTitle {
          font-size: 60px;
          font-weight: 600;
        }
        .applicationLineName {
          font-size: 40px;
          font-weight: 600;
          color: #154599;
        }
        .applicationLineDocs {
          font-size: 20px;
        }
      }
      .applicationLineRight {
        display: flex;
        align-items: center;
        // gap: 20px;
        flex: 1;
        box-sizing: border-box;
        gap: 5px;
        // justify-content: space-around;
        // padding-left: 100px;
      }
    }
    .devlist{
      display: flex;
      gap: 13px;
      box-sizing: border-box;
    }
  }
}
</style>
