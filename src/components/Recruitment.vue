<!--招聘页-->
<template>
  <div>
    <img
      class="basiclaw"
      style="width: 100%"
      src="../assets/image/pc_recruitment.gif"
      alt=""
    />
    <img
      style="width: 100%"
      class="mobile_basiclaw"
      src="../assets/image/mobile_recruitment.gif"
      alt=""
    />
    <div class="pccontent">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in position"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="changeimg">
      <img class="pcchangeimg" src="../assets/image/changeimg.gif" alt="" />
      <img
        class="mobilechangeimg"
        src="../assets/image/mobile_change.gif"
        alt=""
      />
      <div class="toa">
        <a class="culture">企业文化> </a>
        <a class="law">基本法> </a>
      </div>
    </div>
    <brand-cycle></brand-cycle>
  </div>
</template>
<script>
import brandCycle from "./brandCycle.vue";
export default {
  name: "Recruitment",
  components: { brandCycle },
  data() {
    return {
      activeIndex: "1",
       options: [{
          value: '选项1',
          label: '苏州'
        }, {
          value: '选项2',
          label: '杭州'
        }, {
          value: '选项3',
          label: '南京'
        }, {
          value: '选项4',
          label: '北京'
        }, {
          value: '选项5',
          label: '上海'
        }],
         position: [{
          value: '选项1',
          label: '销售主管'
        }, {
          value: '选项2',
          label: '销售经理'
        }, {
          value: '选项3',
          label: 'Java开发工程师'
        }, {
          value: '选项4',
          label: 'php开发工程师'
        }, {
          value: '选项5',
          label: '前端开发工程师'
        }],
    };
  },
  created(){
    this.value='选项1'//设置默认值
  },
  methods: {
    handleSelect() {},
  },
};
</script>
<style scoped>

.changeimg {
  position: relative;
  display: flex;
  justify-content: center;
}
.toa {
  position: absolute;
  top: 9vw;
  color: #fff;
}
.culture:hover {
  color: #de0515;
}
.law:hover {
  color: #de0515;
}
.toa > a {
  font-size: 1.5rem;
  margin: 3vw;
}
/*pc */
@media screen and (min-width: 1024px) {
  .mobile_basiclaw {
    display: none;
  }
  .changeimg {
    padding: 2% 7%;
  }
  .changeimg > img {
    width: 100%;
  }
  .pccontent {
    padding: 2% 7%;
  }
  .mobilechangeimg {
    display: none;
  }
}
/**手机 */
@media screen and (max-width: 768px) {
  .basiclaw {
    display: none;
  }
  .changeimg > img {
    width: 100%;
  }
  .pcchangeimg {
    display: none;
  }
  .toa {
    position: absolute;
    top: 25vw;
  }
}
</style>