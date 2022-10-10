<template lang="pug">
  .card
    .card__title
      span {{ id }}
      more
    .card__content
      .card__row
        span.card__row-title Номер накладной:
        span {{ number }}

      .card__row
        span.card__row-title Тип заказа:
        span {{ type }}

      .card__row
        span.card__row-title Дата создания:
        span
          p {{ date }}
          p {{ time }}

</template>

<script>
import More from '@/components/More.vue';

export default {
  name: 'ItemCard',
  components: { More },

  props: {
    id: String,
    number: String,
    type: String,
    creationDate: String,
  },

  computed: {
    date() {
      return new Date(this.creationDate).toLocaleDateString();
    },

    time() {
      return new Date(this.creationDate).toLocaleTimeString();
    },
  },
};
</script>

<style lang="sass">
.card
  background: #F6FAFB
  box-shadow: 0 4px 12px #EBEBEB
  border-radius: 3px

.card__title
  display: flex
  justify-content: space-between
  padding: 12px 16px
  font-weight: 400
  font-size: 14px
  line-height: 16px
  background: rgba(237, 232, 245, 0.5)

.card__content
  padding: 8px 16px

.card__row
  display: flex
  align-items: flex-start
  font-size: 14px
  line-height: 16px
  padding: 8px 0

.card__row-title
  width: 50%
  color: #647A8C
</style>
