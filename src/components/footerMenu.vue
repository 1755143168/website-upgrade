<template>
  <div class="footerMenu">
    <el-row :gutter="7">
      <el-col v-for="(item,index) in menulist" :key="index" :span="3">
        <span class="title">{{item.name}}
          <div class="children_title" v-for="(i,cindex) in menulist[index].children_menu" :key="cindex">
          <span>
            {{i}}
          </span>
          </div>
        </span>
      </el-col>
      
    </el-row>
  </div>
</template>
<script>
export default {
  name:'footerMenu',
  data() {
    return {
      menulist:[
        {name:'产品定制化服务',children_menu:["高端网站","小程序开发","APP开发","微信开发"]},
        {name:'实效数字运营',children_menu:["品牌建设","微信运营","搜索引擎营销","网站运营"]},
        {name:'年框品牌服务',children_menu:["VI设计","商业摄影","宣传片","VR全景拍摄"]},
        {name:'互联网+解决方案',children_menu:["艺培教务系统解决方案","职培在线学习解决方案","蓝领人力资源O2O解决方案","智慧弹簧互联网+解决方案"]},
        {name:'案例',children_menu:[]},
        {name:'新闻',children_menu:[]},
        {name:'人才',children_menu:["企业文化","基本法","招聘职位"]},
        {name:'我们',children_menu:[]},
      ]
    };
  },
}
</script>
<style scoped>
.footerMenu{
  padding: 0 4vw 0 4vw;
}
</style>