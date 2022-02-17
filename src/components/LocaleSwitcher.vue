<template>
  <select class="form-select-lg" v-model="$i18n.locale">
    <option v-for="(locale, i) in locales" :key="`locale-${i}`" :value="locale">
      {{ $t(`main.locale.${locale}`) }}
    </option>
  </select>
</template>

<script>
export default {
  // MDB Select requires MDB Pro Essential package.
  name: "LocaleSwitcher",
  data() {
    return { locales: ["en", "zh_CN"] };
  },
};
</script>
