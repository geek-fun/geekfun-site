<script setup lang="ts">
import { ref, computed } from 'vue';
import { useData, withBase } from 'vitepress';
import { getProductMenuGroups } from '../../product-menu';
import { getNavigationCopy, getProductNavLink } from '../../site-navigation';

const { lang } = useData();
const groups = computed(() => getProductMenuGroups(lang.value));
const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
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
      {{ getNavigationCopy(lang).products }}
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
        <h4 class="mobile-menu-group-label">{{ group.label }}</h4>
        <ul class="mobile-menu-items">
          <li v-for="(item, iIdx) in group.items" :key="iIdx">
            <a
              :href="withBase(getProductNavLink(item, lang))"
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
                <span class="mobile-menu-item-tagline">{{ item.tagline }}</span>
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
  
  @media (min-width: 1100px) {
    display: none;
  }
}

.mobile-menu-trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 12px 0 11px;
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
