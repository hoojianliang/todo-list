<template>
  <h1>{{ $t("message") }}</h1>
  <LocaleSwitcher />
</template>

<script>
import LocaleSwitcher from "./LocaleSwitcher.vue";

export default {
  name: "TodoList",
  components: { LocaleSwitcher },
};
</script>
