<template>
  <div>
    <a-button type="primary"
              style="margin:5px 0"
              @click="showDrawer">
      <a-icon type="plus" /> 添加文章
    </a-button>
    <a-table :columns="columns"
             :data-source="data"
             :scroll="{ x: 1500, y: 300 }"
             :rowKey="
        (record, index) => {
          return record._id;
        }
      ">
      <template slot="status"
                slot-scope="text, record">
        <span v-if="data.length">
          <a href="javascript:;"
             v-if="record.status == 1">
            <a-button type="dashed"
                      style="
                background-color: #e6f9f4;
                border-color: #ccf3e9;
                color: #00c292;
              ">
              启用中
            </a-button>
          </a>

          <a href="javascript:;"
             v-else>
            <a-button type="dashed"
                      style="
                background-color: #feeef0;
                border-color: #fddce2;
                color: #f4516c;
              ">
              禁用中
            </a-button>
          </a>
        </span>
      </template>
      <a slot="action"
         slot-scope="">
        <a-button type="primary"
                  style="margin-right: 20px"
                  @click="handleUpdate(record)">
          编辑
        </a-button>
        <a-popconfirm v-if="data.length"
                      title="确定要删除吗？"
                      @confirm="() => onDelete(record._id)">
          <a-button type="danger"> 删除 </a-button>
        </a-popconfirm>
      </a>
    </a-table>
    <a-drawer title="Create a new account"
              :width="960"
              :visible="visible"
              :body-style="{ paddingBottom: '80px' }"
              @close="onClose">
      <a-form layout="vertical"
              hide-required-mark>
        <a-row :gutter="24">
          <a-col :span="21">
            <a-form-item label="文章标题">
              <a-input placeholder="请输入文章标题" />
            </a-form-item>
          </a-col>
          <a-col :span="3">
            <a-form-item label="状态">
              <a-switch defaultChecked
                        checkedChildren="直接发布"
                        unCheckedChildren="草稿"
                        v-model="checked"
                        @change="onChange" />
            </a-form-item>
          </a-col>
        </a-row>

        <a-row :gutter="24">
          <a-col :span="5">
            <a-form-item label="封面图片">
              <a-upload name="avatar"
                        list-type="picture-card"
                        class="avatar-uploader"
                        :show-upload-list="false"
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        :before-upload="beforeUpload"
                        @change="handleChange">
                <img v-if="imageUrl"
                     :src="imageUrl"
                     alt="avatar" />
                <div v-else>
                  <a-icon :type="loading ? 'loading' : 'plus'" />
                  <div class="ant-upload-text">
                    上传
                  </div>
                </div>
              </a-upload>
            </a-form-item>

          </a-col>
          <a-col :span="19">
            <a-form-item label="文章描述">
              <a-textarea :rows="6"
                          placeholder="请输入文章描述" />
            </a-form-item>
          </a-col>

        </a-row>
        <a-row :gutter="24">

          <a-col :span="12">
            <a-form-item label="文章分类">
              <a-select placeholder="请选择分类">
                <a-select-option value="xiao">
                  Xiaoxiao Fu
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="文章标签">
              <a-select mode="multiple"
                        :default-value="['a1', 'b2']"
                        style="width: 100%"
                        placeholder="请选择标签(支持多选)"
                        @change="handleChange">
                <a-select-option v-for="i in 25"
                                 :key="(i + 9).toString(36) + i">
                  {{ (i + 9).toString(36) + i }}
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>

      </a-form>
      <div :style="{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
          zIndex: 1,
        }">
        <a-button :style="{ marginRight: '8px' }"
                  @click="onClose">
          取消
        </a-button>
        <a-button type="primary"
                  @click="onClose">
          确认
        </a-button>
      </div>
    </a-drawer>
  </div>
</template>
<script>
// 上传
function getBase64 (img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
// 
const columns = [
  { title: '标题', width: 300, dataIndex: 'title', fixed: 'left', class: 'title' },
  { title: '类型', dataIndex: 'category', width: 150 },
  { title: '创建时间', dataIndex: 'created', width: 200 },
  { title: '阅读量', dataIndex: 'reads', width: 150 },
  { title: '评论量', dataIndex: 'answer', width: 150 },
  { title: '标签', dataIndex: 'tag', width: 150 },
  {
    title: "状态",
    dataIndex: "status",
    scopedSlots: { customRender: "status" },
    width: 150,
  },
  {
    title: '操作',
    key: 'operation',
    fixed: 'right',
    width: 200,
    scopedSlots: { customRender: 'action' },
  },
];



import { article } from "@/services/article";
export default {
  data () {
    return {
      // 上传
      loading: false,
      imageUrl: '',
      // 
      checked: true,
      data: [],
      columns,
      visible: true,
      fileList: [
        {
          uid: '-1',
          name: 'xxx.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }
      ]
    };
  },
  mounted () {
    this.getArticle()
  },
  methods: {
    showDrawer () {
      this.visible = true;
    },
    onClose () {
      this.visible = false;
    },
    // 获取文章数据
    getArticle () {
      article().then(res => {
        if (res.data.code === 200) {
          this.data = res.data.data
        }
      })
    },
    // 上传
    handleChange (info) {
      if (info.file.status === 'uploading') {
        this.loading = true;
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl => {
          this.imageUrl = imageUrl;
          this.loading = false;
        });
      }
    },
    beforeUpload (file) {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.$message.error('You can only upload JPG file!');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error('Image must smaller than 2MB!');
      }
      return isJpgOrPng && isLt2M;
    },
  }
};
</script>

<style scpoe>
.title {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
/* tile uploaded pictures */
.upload-list-inline >>> .ant-upload-list-item {
  float: left;
  width: 200px;
  margin-right: 8px;
}
.upload-list-inline >>> .ant-upload-animate-enter {
  animation-name: uploadAnimateInlineIn;
}
.upload-list-inline >>> .ant-upload-animate-leave {
  animation-name: uploadAnimateInlineOut;
}
/* 图片框 */
.ant-upload.ant-upload-select-picture-card {
  width: 170px;
  height: 135px;
}
</style>