<template>
  <!-- 讲师列表 -->
  <div class="body teacher-list">
    <!-- 面包屑 -->
    <ol class="breadcrumb">
      <li><a href="javascript:;">讲师管理</a></li>
      <li class="active">讲师列表</li>
    </ol>
    <div class="page-title">
      <router-link class="btn btn-success btn-sm pull-right" to="/teacher/add"><i class="fa fa-bell"></i> 添加讲师
      </router-link>
    </div>
    <div class="panel panel-default">
      <div class="panel-body">
        <form action="" class="form-inline">
          <div class="input-group">
            <input type="text" class="form-control input-sm">
            <span class="input-group-btn">
                                    <button class="btn btn-success btn-sm">搜索</button>
                                </span>
          </div>
        </form>
      </div>
      <table class="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>编号</th>
            <th>姓名</th>
            <th>昵称</th>
            <th>出生日期</th>
            <th>性别</th>
            <th>手机号码</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="teacher in teachers">
            <td>{{ teacher.tc_id }}</td>
            <td>{{ teacher.tc_name }}</td>
            <td>{{ teacher.tc_roster }}</td>
            <td>{{ teacher.tc_birthday }}</td>
            <td>{{ teacher.tc_gender }}</td>
            <td>{{ teacher.tc_cellphone }}</td>
            <td>
              <a href="#teacherModal" data-toggle="modal" class="btn btn-info btn-xs">查 看</a>
              <router-link class="btn btn-info btn-xs" to="/teacher/edit">编 辑</router-link>
              <a href="javascript::" class="btn btn-warning btn-xs">注 销</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      teachers: []
    }
  },

  created() {
    axios.get('/api/teacher')
      .then(res => {
        this.teachers = res.data.result
      })
  }
}
</script>
<style>
</style>
