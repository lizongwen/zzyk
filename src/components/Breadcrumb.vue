<template>
  <div class="breadcrumb">
    当前位置：
    <a-breadcrumb :routes="routes">
      <template slot="itemRender" slot-scope="{route, params, routes, paths}">
        <span v-if="routes.indexOf(route) === routes.length - 1">{{route.breadcrumbName}}</span>
        <router-link v-else :to="route.path">{{route.breadcrumbName}}</router-link>
      </template>
    </a-breadcrumb>
  </div>
</template>

<script>
import { constantRouterMap } from "@/router";
export default {
  data() {
    return {
      routes: constantRouterMap[0].children
    };
  }
};
</script>
<style lang="scss" scoped>
.breadcrumb {
  width: 1200px;
  margin: 8px auto 20px;

  .ant-breadcrumb{
	  display:inline-block;
  }
}
</style>

