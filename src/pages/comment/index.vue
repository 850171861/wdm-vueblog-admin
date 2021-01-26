<template>
  <a-table
    :columns="columns"
    :data-source="data"
    :rowKey="
      (record, index) => {
        return index;
      }
    "
  >
    <a slot="operation" slot-scope="record" @click="handleDelete(record)"
      >删除</a
    >
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

import { comment, deleteComment } from "@/services/comment";
import moment from "dayjs";
export default {
  data() {
    return {
      data: [],
      columns,
    };
  },
  mounted() {
    this.getCommentList();
  },
  methods: {
    handleDelete(record) {
      let id = {};
      if (record._id) {
        id._id = record._id;
      } else {
        id.id = record.id;
      }

      deleteComment(id);
    },
    getCommentList() {
      comment().then((res) => {
        console.log(res);
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