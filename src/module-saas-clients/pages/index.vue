<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card shadow="never">
        <!-- 数据 -->
        <el-table :data="dataList" border style="width: 100%">
          <el-table-column fixed type="index" label="序号" width="50"></el-table-column>
          <el-table-column fixed prop="name" label="企业名称" width="150"></el-table-column>
          <el-table-column fixed prop="version" label="当前版本" width="100"></el-table-column>
          <el-table-column fixed prop="legalRepresentative" label="联系人" width="120"></el-table-column>
          <el-table-column fixed prop="companyPhone" label="联系电话" width="120"></el-table-column>
          <el-table-column fixed prop="companyArea" label="所在地区" width="150"></el-table-column>
          <el-table-column fixed prop="createTime" label="申请时间" width="250"></el-table-column>
          <el-table-column fixed prop="state" label="状态" width="120">
            <!-- scope: 传递当前行的所有数据 -->
            <template slot-scope="scope">
              <el-switch v-model="scope.row.state" disabled inactive-value="0" active-value="1" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
            </template>
          </el-table-column>
          <el-table-column fixed label="操作" width="150%">
            <template slot-scope="scope">
              <router-link :to="'/saas-clients/details/'+scope.row.id">查看</router-link>
            </template>
          </el-table-column>
        </el-table>
        <!-- end -->
      </el-card>
    </div>
  </div>
</template>

<script>
import { list } from "@/api/base/saasClients";
export default {
  name: "saas-clients-index",
  data() {
    return {
      dataList: []
    };
  },
  methods: {
    // 获取列表数据
    getList() {
      list().then(res => {
        this.dataList = res.data.data;
      });
    }
  },
  // 创建完毕状态
  created() {
    this.getList();
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
