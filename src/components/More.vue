<template lang="pug">
  .more
    a( href="" @click.prevent.stop ) {{ '&vellip;' }}
    .more__tooltip удалить

</template>

<script>
export default {
  name: 'MoreComp',
};
</script>

<style lang="sass">
.more
  position: relative
  font-weight: bold
  font-size: 20px
  text-align: center
  a
    display: block
    width: 20px
    text-decoration: none
    color: black
    &:hover
      color: #045DA7
    &:focus + .more__tooltip
      display: block

.more__tooltip
  display: none
  position: absolute
  bottom: 0
  margin-bottom: -40px
  right: 0
  padding: 12px 36px
  min-width: 40px
  line-height: 16px
  font-size: 14px
  font-weight: 400
  background-color: white
  box-shadow: 0 4px 4px rgba(182, 182, 182, 0.25)
  border-radius: 2px
  background-image: url("../assets/icons/trash.svg")
  background-repeat: no-repeat
  background-position: 10px center
  color: black
  cursor: pointer
  &:hover
    color: #045DA7

</style>
