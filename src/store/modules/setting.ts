import { defineStore } from 'pinia'
// import visiables from '@/styles/element/index.scss'

export const useSetting = defineStore('setting', {
  state: () => ({
    isCollapse: false,
    theme: 'dark',
    isOpenDrawer: false,
  }),

  actions: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    toggleDrawer() {
      this.isOpenDrawer = !this.isOpenDrawer
    },
  },
})
