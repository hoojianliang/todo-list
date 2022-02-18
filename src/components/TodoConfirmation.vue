<template>
  <MDBModal tabindex="-1" labelledby="Confirmation Form" v-model="showModal">
    <MDBModalHeader class="bg-warning text-white">
      <MDBModalTitle>
        {{ $t("main.confirmation_title", { action: action }) }}
      </MDBModalTitle>
    </MDBModalHeader>
    <MDBModalBody class="text-start">
      <div class="text-break">
        {{
          $t("main.confirmation_text", {
            action: action,
            title: todo.title[$i18n.locale],
          })
        }}
      </div>
    </MDBModalBody>
    <MDBModalFooter>
      <MDBBtn color="light" @click="hide">{{ $t("main.cancel") }}</MDBBtn>
      <MDBBtn color="primary" @click="save">{{ $t("main.yes") }}</MDBBtn>
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
  props: ["todo", "action"],
  name: "TodoConfirmation",
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
    };
  },
  methods: {
    show() {
      this.showModal = true;
    },
    hide() {
      this.showModal = false;
    },
    save() {
      this.$store.commit("deleteTodo", this.todo);
    },
  },
};
</script>
