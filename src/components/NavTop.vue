<template lang="pug">
  nav.nav-top
    router-link( :to="{ name: 'cards'}" ).nav-top__link.nav-top__link-card
    router-link( :to="{ name: 'table'}" ).nav-top__link.nav-top__link-table
</template>

<script>
export default {
  name: 'NavTop',
};
</script>

<style lang="sass">
.nav-top
  display: flex

$border-radius: 5px

.nav-top__link
  width: 40px
  height: 40px
  border: 1px solid #647A8C
  display: flex
  background-color: white
  &:first-of-type
    border-bottom-left-radius: $border-radius
    border-top-left-radius: $border-radius
  &:last-of-type
    border-bottom-right-radius: $border-radius
    border-top-right-radius: $border-radius
  &.router-link-exact-active
    background-color: #E5E9EC

.nav-top__link-card, .nav-top__link-table
  background-repeat: no-repeat
  background-position: center
  background-image: url(../assets/icons/cards.svg)
.nav-top__link-table
  background-image: url(../assets/icons/table.svg)

</style>
