<template>
  <!-- visible.sync是否显示 -->
  <el-dialog title="编辑部门" :visible.sync="dialogFormVisible">
    <el-form :model="dept">
      <el-form-item label="部门名称" :label-width="formLabelWidth">
        <el-input v-model="dept.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="部门编码" :label-width="formLabelWidth">
        <el-input v-model="dept.code" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="部门负责人" :label-width="formLabelWidth">
        <el-input v-model="dept.manager" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="部门介绍" :label-width="formLabelWidth">
        <el-input v-model="dept.introduce" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="saveDept">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { saveOrUpdate } from "@/api/base/dept";
export default {
  data() {
    return {
      parentId: "",
      dept: {},
      formLabelWidth: "100px",
      dialogFormVisible: false
    };
  },
  methods: {
    saveDept() {
      this.dept.pid = this.parentId;
      saveOrUpdate(this.dept).then(res => {
        this.$message({
          showClose: true,
          message: res.data.message,
          type: res.data.success ? "success" : "error"
        });
        if (res.data.success) {
          location.reload();
        }
      });
    }
  }
};
</script>
<style>
</style>
