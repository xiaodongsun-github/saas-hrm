<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card shadow="never">
        <!-- 数据 -->
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="企业信息" name="first">
            <!-- form表单 -->
            <el-form ref="formData" :model="formData" label-width="200px">
              <el-form-item label="企业名称">
                <el-input disabled v-model="formData.name" style="width:300px"></el-input>
              </el-form-item>
              <el-form-item label="公司地区">
                <el-input disabled v-model="formData.companyArea" style="width:300px"></el-input>
              </el-form-item>
              <el-form-item label="公司电话">
                <el-input disabled v-model="formData.companyPhone" style="width:300px"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary">审核</el-button>
                <router-link :to="'/saas-clients/index'">
                  <el-button>返回</el-button>
                </router-link>
              </el-form-item>
            </el-form>
            <!-- 表单结束 -->
          </el-tab-pane>
          <el-tab-pane label="账户信息" name="second">账户信息</el-tab-pane>
          <el-tab-pane label="交易记录" name="third">交易记录</el-tab-pane>
        </el-tabs>
        <!-- end -->
      </el-card>
    </div>
  </div>
</template>

<script>
import { detail } from "@/api/base/saasClients";
export default {
  name: "saas-clients-detail",
  data() {
    return {
      activeName: "first",
      formData: {}
    };
  },
  methods: {
    // 获取列表数据
    detail(id) {
      detail({ id: id }).then(res => {
        this.formData = res.data.data;
        console.log(this.formData);
        console.log(id);
      });
    },
    handleClick() {}
  },
  // 创建完毕状态
  created() {
    let id = this.$route.params.id;
    this.detail(id);
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
