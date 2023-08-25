<template>
  <div>home路由</div>
</template>

<script lang="ts" setup>
import axios from "axios"
import { onMounted } from 'vue';
import useUserStore from '@/store/modules/user';
let useStore=useUserStore()
onMounted(()=>{
  // useStore.userInfo()
  console.log('测试数据')
  // axios.get('http://localhost:5173/api/user/info').then(res=>{
  //   console.log(res)
  // })
})
</script>

<style></style>
