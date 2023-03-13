<template>
  <div class="cainSearchBox">
    <div class="cainSearchSuccinct">
      <div class="cainSearchBgImg">
        <v-img :src="BG"></v-img>
      </div>
    </div>
    <div class="cainSearchDashboard">
      <div class="cainSearchDashboardNav">
        <div class="cainSearchDashboarNavTop">
          <div
            :class="{
              cainSearchDashboardNavItem: true,
              cainSearchDashboarNavItemActive: itemTsg.to == navItemIndex,
            }"
            v-for="(itemTsg, index) in navItem"
            :key="'nav-' + index"
            @click="navItemClick(itemTsg.to)"
          >
            <v-icon
              size="20"
              :color="itemTsg.to== navItemIndex ? '#85B1E0' : '#e2e5ea'"
            >
              {{ itemTsg.icon }}</v-icon
            >
          </div>
        </div>
        <div class="cainSearchDashboarNavTop">
          <div
            :class="{
              cainSearchDashboardNavItem: true,
              cainSearchDashboarNavItemActive: itemTsg.to == navItemIndex,
            }"
            v-for="(itemTsg, index) in navItemButton"
            :key="'nav' + index"
            @click="navItemClick(itemTsg.to)"
          >
            <v-icon
              size="20"
              :color="itemTsg.to == navItemIndex ? '#85B1E0' : '#e2e5ea'"
            >
              {{ itemTsg.icon }}</v-icon
            >
          </div>
        </div>
      </div>
      <div style="width: 60px;"></div>
      <div class="cainSearchDashboardConten">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BG from "../assets/gx.jpg";
import { ref } from "vue";
import { useRouter } from 'vue-router'

interface NavItem {
  title: string;
  to: string;
  icon: string;
}

const navItem = ref<NavItem[]>([
  {
    title: "首页",
    to: "/",
    icon: "mdi-arch",
  },
  {
    title: "标签",
    to: "/tags",
    icon: "mdi-cloud-tags",
  },
  {
    title: "网站",
    to: "/application",
    icon: "mdi-application",
  },
]);

const navItemButton = ref<NavItem[]>([
  {
    title: "用户",
    to: "/user",
    icon: "mdi-account",
  },
  {
    title: "设置",
    to: "/setting",
    icon: "mdi-cog",
  },
]);

const router = useRouter()

const navItemIndex = ref<string>("/");

const navItemClick = (e:string)=>{
    navItemIndex.value = e
    router.push(e)
}
</script>

<style lang="scss" scoped>
.cainSearchBox {
  width: 100vw;
  height: 100vh;
  position: relative;
//   overflow: hidden;
  .cainSearchSuccinct {
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
  }

  .cainSearchDashboard {
    display: flex;
    .cainSearchDashboardNav {
    position: fixed;
    top: 0;
    left: 0;
      width: 60px;
      height: 100vh;
      border-right: 1px rgba(0, 0, 0, 0.12) solid;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .cainSearchDashboarNavTop {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        box-sizing: border-box;
        padding: 10px;
        .cainSearchDashboardNavItem {
          width: 40px;
          height: 40px;
          text-align: center;
          line-height: 40px;
          border-radius: 5px;
          background-color: #8998ac;
          transition: 0.3s;
        }
        .cainSearchDashboarNavItemActive {
          background-color: #154599;
        }
      }
    }
    .cainSearchDashboardConten{
        flex: 1;
        max-height: 100vh;
        // overflow: hidden;
        // overflow-y: scroll;
       
    }
  }
}
</style>
