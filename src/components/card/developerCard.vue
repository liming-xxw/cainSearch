<template>
    <div >
    <v-img :src="app" width="330">
     <div class="devName">Cain开发者</div>
    </v-img>
    </div>
</template>

<script setup lang="ts">
 import app from "../../assets/appsh.webp";
</script>

<style lang="scss" scoped>
.devName{
    font-size: 30px;
    color: white;
    font-weight: 600;
}
</style>