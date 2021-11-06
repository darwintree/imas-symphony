import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import {
  // create naive ui
  create,
  // component
  NButton,
  NSpace,
  NLayout,
  NLayoutContent,
  NLayoutFooter,
  NLayoutHeader,
  NLayoutSider,
  NGrid,
  NGridItem,
  NCard,
  NThing,
  NAvatar,
  NModal,
  NList,
  NListItem,
  NTag,
  NBreadcrumb,
  NBreadcrumbItem,
  NBackTop,
  NTabs,
  NTabPane,
  NImage
} from 'naive-ui'

const naive = create({
  components: [
    NButton,
    NSpace,
    NLayout,
    NLayoutContent,
    NLayoutFooter,
    NLayoutHeader,
    NLayoutSider,
    NGrid,
    NGridItem,
    NCard,
    NThing,
    NAvatar,
    NModal,
    NList,
    NListItem,
    NTag,
    NBreadcrumb,
    NBreadcrumbItem,
    NBackTop,
    NTabs,
    NTabPane,
    NImage
  ]
})

createApp(App).use(router).use(naive).mount('#app')
