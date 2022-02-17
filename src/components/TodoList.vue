<template>
  <h1 class="inverse">{{ $t("message") }}</h1>
  <LocaleSwitcher />
</template>

<script>
import LocaleSwitcher from "./LocaleSwitcher.vue";

export default {
  name: "TodoList",
  components: { LocaleSwitcher },
};
</script>
