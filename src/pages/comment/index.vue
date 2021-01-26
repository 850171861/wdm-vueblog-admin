<template>
  <a-table :columns="columns"
           :data-source="data"
           @expand="expand"
           :expandedRowKeys="expandedRowKeys"
           :rowKey="
        (record, index) => {
          return record._id;
        }
      ">
    <a slot="operation"
       slot-scope="record"
       @click="handleDelete(record)">删除</a>
    <a-table slot="expandedRowRender"
             :columns="innerColumns"
             :data-source="data1"
             :pagination="false">
      <span slot="status">
        <a-badge status="success" />Finished
      </span>
      <span slot="operation"
            class="table-operation">
        <a>Pause</a>
        <a>Stop</a>
        <a-dropdown>
          <a-menu slot="overlay">
            <a-menu-item>
              Action 1
            </a-menu-item>
            <a-menu-item>
              Action 2
            </a-menu-item>
          </a-menu>
          <a> More
            <a-icon type="down" />
          </a>
        </a-dropdown>
      </span>
    </a-table>
  </a-table>
</template>
<script>
const columns = [
  { title: "昵称", dataIndex: "name", key: "name", width: "10%" },
  { title: "邮箱", dataIndex: "email", key: "email", width: "10%" },
  { title: "内容", dataIndex: "content", key: "content", width: "40%" },
  { title: "网址", dataIndex: "url", key: "url", width: "15%" },
  { title: "时间", dataIndex: "created", key: "created", width: "15%" },
  {
    title: "操作",
    key: "operation",
    scopedSlots: { customRender: "operation" },
    width: "10%",
  },
];
const innerColumns = [
  { title: "昵称", dataIndex: "name", key: "name", width: "10%" },
  { title: "邮箱", dataIndex: "email", key: "email", width: "10%" },
  { title: "内容", dataIndex: "content", key: "content", width: "40%" },
  { title: "网址", dataIndex: "url", key: "url", width: "15%" },
  { title: "时间", dataIndex: "created", key: "created", width: "15%" },
  {
    title: "操作",
    key: "operation",
    scopedSlots: { customRender: "operation" },
    width: "10%",
  },
];

import { comment, deleteComment } from "@/services/comment";
import moment from "dayjs";
export default {
  data () {
    return {
      data: [],
      childrenData: [],
      row: '1',
      columns,
      expandedRowKeys: [],
      innerColumns
    };
  },
  mounted () {
    this.getCommentList();
  },
  methods: {
    expand (expanded, record) {
      this.expandedRowKeys = [];// 收起全部节点，只展开当前点击的那个（无法做到同时几个内层表格数据直接缓存在childrenData）
      if (expanded) {
        this.expandedRowKeys = [record._id];
      }
    },
    handleDelete (record) {
      let id = { id: record.id, _id: record._id }
      deleteComment(id).then(res => {
        if (res.data.code === 200) {
          if (record._id) {
            const data = [...this.data];
            this.data = data.filter((item) => item._id !== record._id);
          } else {
            for (let i = 0; i < this.data.length; i++) {
              for (let j = 0; j < this.data[i].children.length; j++) {
                if (this.data[i].children[j].id === record.id) {
                  console.log(this.data[i].children[j])
                  this.data[i].children.splice(this.data[i].children[j].id, 1)
                }
              }
            }
          }
        }
      });
    },
    getCommentList () {
      comment().then((res) => {
        if (res.data.code === 200) {
          res.data.data.forEach((element) => {
            element.created = moment(res.data.data.created).format(
              "YYYY-MM-DD HH:mm:ss"
            ); //转换时间
          });
          this.data = res.data.data;
        }
      });
    },
  },
};
</script>