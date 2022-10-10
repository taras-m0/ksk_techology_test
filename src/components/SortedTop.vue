<template lang="pug">
  aside.sorted
    select.sorted__select
      option( value="" disabled selected) Сортировка

</template>

<script>
export default {
  name: 'SortedTop',
};
</script>

<style lang="sass">
.sorted
  padding: 16px
  box-shadow: 0 4px 12px #E7E7E7
  background-color: white

.sorted__select
  display: block
  width: 232px
  font-weight: 700
  font-size: 14px
  line-height: 16px
  padding: 8px 12px
  border: 1px solid #D9D9D9
  border-radius: 2px
  color:  #2B2839
  background-color: white

</style>
