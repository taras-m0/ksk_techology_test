<template lang="pug">
  aside.filter
    h4.filter__title Фильтр

    label.filter__label Номер накладной:
      input(
        placeholder="Введите фрагмент"
        v-model="filterNumber"
      ).filter__input

    label.filter__label Тип заказа:
      select(
        v-model="filterType"
      ).filter__select
        option( value="" selected) Выберите из списка
        option(
          v-for="val in allTypes"
          :key="val"
          :value="val"
        ) {{ val }}

</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'FilterLeft',
  computed: {
    ...mapGetters(['allTypes']),

    filterNumber: {
      get() {
        return this.$store.state.filterNumber;
      },
      set(val) {
        this.$store.commit('filterNumber', val);
      },
    },

    filterType: {
      get() {
        return this.$store.state.filterType;
      },
      set(val) {
        this.$store.commit('filterType', val);
      },
    },

  },
};
</script>

<style lang="sass">
.filter
  box-shadow: 0 4px 8px rgba(179, 178, 178, 0.25)
  padding: 8px 16px
  width: 280px
  background-color: white

.filter__title
  font-weight: 700
  font-size: 16px
  line-height: 19px
  display: flex
  align-items: center
  color: #2B2839

.filter__label
  display: block
  margin-top: 16px
  font-size: 14px
  font-weight: 700
  line-height: 16px
  color: #000000

.filter__input, .filter__select
  display: block
  margin-top: 4px
  width: 100%
  font-weight: 400
  font-size: 14px
  line-height: 16px
  padding: 8px 12px
  border: 1px solid #D9D9D9
  border-radius: 2px
  ::placeholder
    color: #A5A5A5

.filter__select
  option
    width: 100%
</style>
