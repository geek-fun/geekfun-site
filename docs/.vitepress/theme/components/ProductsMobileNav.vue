<script setup lang="ts">
import { ref, computed } from 'vue';
import { useData, withBase } from 'vitepress';

const { lang } = useData();
const isZh = computed(() => lang.value === 'zh');
const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const groups = [
  {
    labelEn: 'Database Clients',
    labelZh: '数据库客户端',
    items: [
      {
        name: 'DocKit',
        taglineEn: 'NoSQL desktop client for Elasticsearch, OpenSearch, DynamoDB',
        taglineZh: '面向 Elasticsearch、OpenSearch、DynamoDB 的 NoSQL 桌面客户端',
        logo: '/dockit.png',
        linkEn: '/products/dockit/',
        linkZh: '/zh/products/dockit/',
        external: false,
      },
      {
        name: 'SqlKit',
        taglineEn: 'SQL desktop client for PostgreSQL, MySQL, SQL Server, SQLite',
        taglineZh: '面向 PostgreSQL、MySQL、SQL Server、SQLite 的 SQL 桌面客户端',
        logo: '/sqlkit.png',
        linkEn: '/products/sqlkit/',
        linkZh: '/zh/products/sqlkit/',
        external: false,
      },
    ],
  },
  {
    labelEn: 'Infrastructure',
    labelZh: '基础设施',
    items: [
      {
        name: 'ServerlessInsight',
        taglineEn: 'Serverless infrastructure platform and CLI',
        taglineZh: 'Serverless 基础设施平台和 CLI',
        logo: '/serverlessinsight.png',
        linkEn: 'https://serverlessinsight.com/',
        linkZh: 'https://serverlessinsight.com/',
        external: true,
      },
      {
        name: 'serverless-adapter',
        taglineEn: 'Serverless adapter for Express and Koa',
        taglineZh: '面向 Express 与 Koa 的 Serverless 适配器',
        logo: '/serverless-adapter.svg',
        linkEn: 'https://github.com/geek-fun/serverless-adapter',
        linkZh: 'https://github.com/geek-fun/serverless-adapter',
        external: true,
      },
    ],
  },
  {
    labelEn: 'Developer Tools',
    labelZh: '开发者工具',
    items: [
      {
        name: 'jest-search',
        taglineEn: 'Jest utility for search integration testing',
        taglineZh: '用于搜索集成测试的 Jest 工具',
        logo: '/jest-search.png',
        linkEn: 'https://github.com/geek-fun/jest-search',
        linkZh: 'https://github.com/geek-fun/jest-search',
        external: true,
      },
    ],
  },
];

</script>

<template>
  <div class="products-mobile-nav">
    <button
      class="mobile-menu-trigger"
      :aria-expanded="isOpen"
      aria-haspopup="menu"
      aria-controls="products-mobile-panel"
      @click="toggleMenu"
    >
      {{ isZh ? '产品' : 'Products' }}
      <svg
        class="mobile-menu-chevron"
        :class="{ open: isOpen }"
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>
    
    <div
      v-show="isOpen"
      id="products-mobile-panel"
      class="mobile-menu-panel"
      role="menu"
    >
      <div v-for="(group, gIdx) in groups" :key="gIdx" class="mobile-menu-group">
        <h4 class="mobile-menu-group-label">{{ isZh ? group.labelZh : group.labelEn }}</h4>
        <ul class="mobile-menu-items">
          <li v-for="(item, iIdx) in group.items" :key="iIdx">
            <a
              :href="isZh ? (item.external ? item.linkZh : withBase(item.linkZh)) : (item.external ? item.linkEn : withBase(item.linkEn))"
              :target="item.external ? '_blank' : '_self'"
              :rel="item.external ? 'noopener noreferrer' : undefined"
              role="menuitem"
              class="mobile-menu-item-link"
            >
              <img :src="withBase(item.logo)" alt="" class="mobile-menu-item-logo" />
              <div class="mobile-menu-item-content">
                <span class="mobile-menu-item-name">
                  {{ item.name }}
                  <svg v-if="item.external" class="mobile-menu-external-icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </span>
                <span class="mobile-menu-item-tagline">{{ isZh ? item.taglineZh : item.taglineEn }}</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.products-mobile-nav {
  display: block;
  border-bottom: 1px solid var(--vp-c-divider);
  padding: 12px 16px;
  
  @media (min-width: 768px) {
    display: none;
  }
}

.mobile-menu-trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px 0;
  transition: color 0.25s;

  &:hover {
    color: var(--vp-c-brand-1);
  }
}

.mobile-menu-chevron {
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0.7;

  &.open {
    transform: rotate(180deg);
  }
}

.mobile-menu-panel {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 16px;
  padding-bottom: 8px;
}

.mobile-menu-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.mobile-menu-group-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--vp-c-text-2);
  margin: 0;
}

.mobile-menu-items {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.mobile-menu-item-link {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 8px;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.15s ease;
  
  &:hover, &:focus-visible {
    background-color: var(--vp-c-bg-soft);
  }
}

.mobile-menu-item-logo {
  width: 24px;
  height: 24px;
  object-fit: contain;
  flex-shrink: 0;
  border-radius: 6px;
}

.mobile-menu-item-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.mobile-menu-item-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  display: flex;
  align-items: center;
  gap: 6px;
}

.mobile-menu-external-icon {
  opacity: 0.5;
  color: var(--vp-c-text-2);
}

.mobile-menu-item-tagline {
  font-size: 13px;
  line-height: 1.4;
  color: var(--vp-c-text-2);
}

@media (prefers-reduced-motion: reduce) {
  .mobile-menu-chevron {
    transition: none;
  }
}
</style>
