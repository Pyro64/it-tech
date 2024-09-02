<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'

const router = useRouter()
type Link = {
  value: string
  link: string
}

const search = ref('')
const links = ref<Link[]>([
  { value: 'Разработка сайта', link: '/uslugi/razrabotka-sajta' },
  { value: 'Мобильное приложение', link: '/uslugi/razrabotka-sajta' },
  { value: 'CRM система', link: '/uslugi/razrabotka-sajta' },
  { value: 'Дизайн система', link: '/uslugi/razrabotka-sajta' },
  { value: 'SEO продвижение', link: '/uslugi/razrabotka-sajta' },
  { value: 'DevOps', link: '/uslugi/razrabotka-sajta' },
])

const querySearch = (queryString: string, cb: (results: Link[]) => void) => {
  let result = links.value
  const searchQuery = search.value.toLowerCase()
  if (queryString) {
    result = links.value.filter(link =>
      link.value.toLowerCase().includes(searchQuery)
    )
  }
  cb(result)
}

const handleSelect = (item: Record<keyof Link, string>) => {
  router.push(item.link)
  search.value = ''
}
</script>

<template>
  <div class="hidden w-60 md:block">
    <client-only>
      <template #fallback>
        <ui-skeleton class="h-8 w-full" />
      </template>
      <el-autocomplete
        v-model="search"
        :fetch-suggestions="querySearch"
        placeholder="Услуги компании"
        @select="handleSelect"
      >
        <template #suffix>
          <el-icon class="el-input__icon cursor-pointer">
            <Search />
          </el-icon>
        </template>
      </el-autocomplete>
    </client-only>
  </div>
</template>

<style scoped lang="scss"></style>
