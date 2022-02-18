<template>
  <MDBListGroupItem class="d-flex align-items-start justify-content-start p-2">
    <div class="px-2 flex-grow-1 text-start">
      <div class="fw-bold text-break">{{ todo.title[$i18n.locale] }}</div>
      <div>{{ todo.createdAt || "-" }}</div>
    </div>
    <div class="px-1">
      <MDBBadge color="light" class="text-dark" pill>{{
        todo.completed ? $t("main.completed") : $t("main.pending")
      }}</MDBBadge>
    </div>
    <div class="px-1">
      <MDBTooltip v-model="editTip">
        <template #reference>
          <MDBBtn outline="info" @click="edit" floating>
            <MDBIcon icon="edit"></MDBIcon>
          </MDBBtn>
        </template>
        <template #tip>{{
          $t("main.todo_action", [$t("main.edit")])
        }}</template>
      </MDBTooltip>
      <TodoForm ref="form" v-bind:todo="todo" />
    </div>
    <div v-if="todo.completed" class="px-1">
      <MDBTooltip v-model="checkTip">
        <template #reference>
          <MDBBtn outline="success" @click="check(false)" floating>
            <MDBIcon icon="check-square"></MDBIcon>
          </MDBBtn>
        </template>
        <template #tip>{{
          $t("main.todo_action", [$t("main.uncomplete")])
        }}</template>
      </MDBTooltip>
    </div>
    <div v-else class="px-1">
      <MDBTooltip v-model="checkTip">
        <template #reference>
          <MDBBtn outline="warning" @click="check(true)" floating>
            <MDBIcon icon="square"></MDBIcon>
          </MDBBtn>
        </template>
        <template #tip>{{
          $t("main.todo_action", [$t("main.complete")])
        }}</template>
      </MDBTooltip>
    </div>
    <div class="px-1">
      <MDBTooltip v-model="removeTip">
        <template #reference>
          <MDBBtn outline="danger" @click="remove" floating>
            <MDBIcon icon="trash"></MDBIcon>
          </MDBBtn>
        </template>
        <template #tip>{{
          $t("main.todo_action", [$t("main.delete")])
        }}</template>
      </MDBTooltip>
    </div>
  </MDBListGroupItem>
  <TodoConfirmation
    ref="delete"
    v-bind:todo="todo"
    v-bind:action="$t('main.delete')"
  />
</template>

<script>
import {
  MDBListGroupItem,
  MDBBadge,
  MDBTooltip,
  MDBBtn,
  MDBIcon,
} from "mdb-vue-ui-kit";
import { ref } from "vue";
import TodoForm from "./TodoForm.vue";
import TodoConfirmation from "./TodoConfirmation.vue";

export default {
  props: ["todo"],
  name: "Todo",
  components: {
    MDBListGroupItem,
    MDBBadge,
    MDBTooltip,
    MDBBtn,
    MDBIcon,
    TodoForm,
    TodoConfirmation,
  },
  setup() {
    const editTip = ref(false);
    const checkTip = ref(false);
    const removeTip = ref(false);
    return {
      editTip,
      checkTip,
      removeTip,
    };
  },
  methods: {
    check(status) {
      this.$store.commit("toggleTodoStatus", { todo: this.todo, status });
    },
    edit() {
      this.$refs.form.show();
    },
    remove() {
      this.$refs.delete.show();
    },
  },
};
</script>
