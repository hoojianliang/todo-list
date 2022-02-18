<template>
  <MDBModal tabindex="-1" labelledby="Todo Form" v-model="showModal">
    <MDBModalHeader>
      <MDBModalTitle>
        {{ $t("main.modal_title") }}
      </MDBModalTitle>
    </MDBModalHeader>
    <MDBModalBody>
      <div class="row">
        <div class="col-sm-4 text-start">
          <label for="todoEn" class="col-form-label">ToDo - English</label>
        </div>
        <div class="col-sm-8">
          <input
            type="text"
            id="todoEn"
            class="form-control"
            aria-describedby="todoEnHelpInline"
            v-model="form.en"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4 text-start">
          <label for="todoZh" class="col-form-label">待办 - 中文</label>
        </div>
        <div class="col-sm-8">
          <input
            type="text"
            id="todoZh"
            class="form-control"
            aria-describedby="todoZhHelpInline"
            v-model="form.zh_CN"
          />
        </div>
      </div>
    </MDBModalBody>
    <MDBModalFooter>
      <MDBBtn color="light" @click="hide">{{ $t("main.close") }}</MDBBtn>
      <MDBBtn
        color="primary"
        @click="save"
        :disabled="!form.en || !form.zh_CN"
        >{{ $t("main.save") }}</MDBBtn
      >
    </MDBModalFooter>
  </MDBModal>
</template>

<script>
import {
  MDBModal,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
} from "mdb-vue-ui-kit";

export default {
  props: ["todo"],
  name: "TodoForm",
  components: {
    MDBModal,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBBtn,
  },
  data() {
    return {
      showModal: false,
      form: {
        en: null,
        zh_CN: null,
      },
    };
  },
  methods: {
    show() {
      this.reset();
      if (this.todo) this.form = { ...this.todo.title };
      this.showModal = true;
    },
    hide() {
      this.reset();
      this.showModal = false;
    },
    save() {
      if (this.todo)
        this.$store.commit("editTodo", { todo: this.todo, form: this.form });
      else this.$store.commit("addTodo", this.form);
      this.hide();
    },
    reset() {
      this.form = {
        en: null,
        zh_CN: null,
      };
    },
  },
};
</script>
