<template lang="pug">
  .cards-view
    item-card(
      v-for="item in cards"
      :key="item.id"
      v-bind="item"
    )

</template>

<script>
import { mapGetters } from 'vuex';
import ItemCard from '@/components/ItemCard.vue';

export default {
  name: 'CardsView',

  components: { ItemCard },

  computed: {
    ...mapGetters(['cards']),
  },
};
</script>

<style lang="sass">
.cards-view
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr))
  grid-gap: 16px
  align-items: stretch
  overflow: hidden

</style>
