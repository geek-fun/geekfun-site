<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue';
import { useData, withBase } from 'vitepress';

const { lang } = useData();
const isZh = computed(() => lang.value === 'zh');

const isOpen = ref(false);
let hideTimeout: number | null = null;
let showTimeout: number | null = null;

const openMenu = () => {
  if (hideTimeout) clearTimeout(hideTimeout);
  showTimeout = window.setTimeout(() => {
    isOpen.value = true;
    nextTick(() => positionPanel());
  }, 100);
};

const closeMenu = () => {
  if (showTimeout) clearTimeout(showTimeout);
  hideTimeout = window.setTimeout(() => {
    isOpen.value = false;
  }, 200);
};

const toggleMenu = () => {
  if (isOpen.value) {
    closeMenuImmediate();
  } else {
    openMenuImmediate();
  }
};

const closeMenuImmediate = () => {
  if (hideTimeout) clearTimeout(hideTimeout);
  if (showTimeout) clearTimeout(showTimeout);
  isOpen.value = false;
};

const clickOutsideHandler = (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  const container = document.getElementById('products-mega-menu-container');
  if (container && !container.contains(target)) {
    closeMenuImmediate();
  }
};

const keydownHandler = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isOpen.value) {
    closeMenuImmediate();
  }
};

const reorderNav = () => {
  const wrapper = document.getElementById('products-mega-menu-container');
  const navBarMenu = document.querySelector('.VPNavBarMenu');
  const firstNavLink = navBarMenu?.querySelector('.VPNavBarMenuLink');
  
  if (wrapper && navBarMenu && firstNavLink) {
    // Move mega-menu wrapper into VPNavBarMenu after the first link (Home)
    firstNavLink.after(wrapper);
  }
};

const positionPanel = () => {
  const wrapper = document.getElementById('products-mega-menu-container');
  const panel = wrapper?.querySelector('.mega-menu-panel') as HTMLElement | null;
  
  if (!wrapper || !panel) return;
  
  const triggerRect = wrapper.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const padding = 16;
  
  // Desired panel width
  const desiredWidth = 880;
  const actualWidth = Math.min(desiredWidth, viewportWidth - padding * 2);
  
  // Set panel width first
  panel.style.width = `${actualWidth}px`;
  
  // Calculate where to position the panel
  // Try to align left edge of panel near trigger, but ensure it stays within viewport
  const idealLeft = triggerRect.left;
  const maxLeft = viewportWidth - actualWidth - padding;
  const minLeft = padding;
  
  const finalLeft = Math.max(minLeft, Math.min(idealLeft, maxLeft));
  
  panel.style.left = `${finalLeft}px`;
  panel.style.right = 'auto';
};

const openMenuImmediate = () => {
  if (hideTimeout) clearTimeout(hideTimeout);
  if (showTimeout) clearTimeout(showTimeout);
  isOpen.value = true;
  // Position panel after it becomes visible
  nextTick(() => positionPanel());
};

onMounted(() => {
  document.addEventListener('click', clickOutsideHandler);
  document.addEventListener('keydown', keydownHandler);
  // Reorder nav after DOM is ready
  nextTick(() => {
    reorderNav();
  });
});

onUnmounted(() => {
  document.removeEventListener('click', clickOutsideHandler);
  document.removeEventListener('keydown', keydownHandler);
});

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
  <div
    id="products-mega-menu-container"
    class="mega-menu-wrapper"
    @mouseenter="openMenu"
    @mouseleave="closeMenu"
  >
    <button
      class="mega-menu-trigger"
      :aria-expanded="isOpen"
      aria-haspopup="menu"
      aria-controls="products-mega-menu-panel"
      @click.stop="toggleMenu"
    >
      {{ isZh ? '产品' : 'Products' }}
      <svg
        class="mega-menu-chevron"
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

    <transition name="mega-menu-fade">
      <div
        v-if="isOpen"
        id="products-mega-menu-panel"
        class="mega-menu-panel"
        role="menu"
        @click="closeMenuImmediate"
      >
        <div class="mega-menu-grid">
          <div v-for="(group, gIdx) in groups" :key="gIdx" class="mega-menu-group">
            <h3 class="mega-menu-group-label">{{ isZh ? group.labelZh : group.labelEn }}</h3>
            <ul class="mega-menu-items">
              <li v-for="(item, iIdx) in group.items" :key="iIdx">
                <a
                  :href="isZh ? (item.external ? item.linkZh : withBase(item.linkZh)) : (item.external ? item.linkEn : withBase(item.linkEn))"
                  :target="item.external ? '_blank' : '_self'"
                  :rel="item.external ? 'noopener noreferrer' : undefined"
                  role="menuitem"
                  class="mega-menu-item-link"
                >
                  <img :src="withBase(item.logo)" alt="" class="mega-menu-item-logo" />
                  <div class="mega-menu-item-content">
                    <span class="mega-menu-item-name">
                      {{ item.name }}
                      <svg v-if="item.external" class="mega-menu-external-icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </span>
                    <span class="mega-menu-item-tagline">{{ isZh ? item.taglineZh : item.taglineEn }}</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.mega-menu-wrapper {
  position: relative;
  display: none;
  
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
}

.mega-menu-trigger {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 12px;
  line-height: 36px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.25s;

  &:hover {
    color: var(--vp-c-brand-1);
  }
}

.mega-menu-chevron {
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0.7;

  &.open {
    transform: rotate(180deg);
  }
}

.mega-menu-panel {
  position: fixed;
  top: 60px;
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  box-shadow: var(--vp-shadow-3);
  padding: 24px 28px;
  z-index: 100;
  min-width: 600px;
  max-width: calc(100vw - 32px);
}

.mega-menu-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px 32px;
}

.mega-menu-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.mega-menu-group:nth-child(3) {
  grid-column: 1 / -1;
  border-top: 1px solid var(--vp-c-border);
  padding-top: 24px;
  margin-top: -8px;
}

.mega-menu-group-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--vp-c-text-2);
  margin: 0;
  padding: 0 8px;
}

.mega-menu-items {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.mega-menu-item-link {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 12px 8px;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.15s ease;
  
  &:hover, &:focus-visible {
    background-color: var(--vp-c-bg-soft);
  }
}

.mega-menu-item-logo {
  width: 28px;
  height: 28px;
  object-fit: contain;
  flex-shrink: 0;
  border-radius: 6px;
}

.mega-menu-item-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.mega-menu-item-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  display: flex;
  align-items: center;
  gap: 6px;
}

.mega-menu-external-icon {
  opacity: 0.5;
  color: var(--vp-c-text-2);
}

.mega-menu-item-tagline {
  font-size: 13px;
  line-height: 1.4;
  color: var(--vp-c-text-2);
}

.mega-menu-fade-enter-active,
.mega-menu-fade-leave-active {
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.2, 1),
              transform 180ms cubic-bezier(0.4, 0, 0.2, 1);
}

.mega-menu-fade-enter-from,
.mega-menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

@media (prefers-reduced-motion: reduce) {
  .mega-menu-fade-enter-active,
  .mega-menu-fade-leave-active {
    transition: opacity 180ms ease-out;
  }
  
  .mega-menu-fade-enter-from,
  .mega-menu-fade-leave-to {
    transform: none;
  }
  
  .mega-menu-chevron {
    transition: none;
  }
}
</style>
