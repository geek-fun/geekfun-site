<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
import { useData, withBase } from 'vitepress';
import { getProductMenuGroups } from '../../product-menu';
import { getNavigationCopy, getProductNavLink } from '../../site-navigation';

const { lang } = useData();
const groups = computed(() => getProductMenuGroups(lang.value));

const wrapperRef = ref<HTMLElement | null>(null);
const isOpen = ref(false);
let hideTimeout: number | null = null;
let showTimeout: number | null = null;

const positionPanel = () => {
  const wrapper = wrapperRef.value;
  const panel = wrapper?.querySelector('.mega-menu-panel') as HTMLElement | null;
  if (!wrapper || !panel) return;

  const triggerRect = wrapper.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const padding = 16;
  const desiredWidth = 880;
  const actualWidth = Math.min(desiredWidth, viewportWidth - padding * 2);

  panel.style.width = `${actualWidth}px`;

  const idealLeft = triggerRect.left;
  const maxLeft = viewportWidth - actualWidth - padding;
  const finalLeft = Math.max(padding, Math.min(idealLeft, maxLeft));

  panel.style.left = `${finalLeft}px`;
  panel.style.right = 'auto';
};

const openMenu = () => {
  if (hideTimeout) clearTimeout(hideTimeout);
  showTimeout = window.setTimeout(() => {
    isOpen.value = true;
    nextTick(() => positionPanel());
  }, 100);
};

const closeMenu = () => {
  if (showTimeout) clearTimeout(showTimeout);
  hideTimeout = window.setTimeout(() => { isOpen.value = false; }, 200);
};

const toggleMenu = () => {
  isOpen.value ? closeMenuImmediate() : openMenuImmediate();
};

const closeMenuImmediate = () => {
  if (hideTimeout) clearTimeout(hideTimeout);
  if (showTimeout) clearTimeout(showTimeout);
  isOpen.value = false;
};

const openMenuImmediate = () => {
  if (hideTimeout) clearTimeout(hideTimeout);
  if (showTimeout) clearTimeout(showTimeout);
  isOpen.value = true;
  nextTick(() => positionPanel());
};

const clickOutsideHandler = (e: MouseEvent) => {
  if (wrapperRef.value && !wrapperRef.value.contains(e.target as Node)) {
    closeMenuImmediate();
  }
};

const keydownHandler = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isOpen.value) closeMenuImmediate();
};

onMounted(() => {
  document.addEventListener('click', clickOutsideHandler);
  document.addEventListener('keydown', keydownHandler);
});

onUnmounted(() => {
  document.removeEventListener('click', clickOutsideHandler);
  document.removeEventListener('keydown', keydownHandler);
});
</script>

<template>
  <div
    ref="wrapperRef"
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
      {{ getNavigationCopy(lang).products }}
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
        aria-hidden="true"
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
            <h3 class="mega-menu-group-label">{{ group.label }}</h3>
            <ul class="mega-menu-items">
              <li v-for="(item, iIdx) in group.items" :key="iIdx">
                <a
                  :href="withBase(getProductNavLink(item, lang))"
                  :target="item.external ? '_blank' : '_self'"
                  :rel="item.external ? 'noopener noreferrer' : undefined"
                  role="menuitem"
                  class="mega-menu-item-link"
                >
                  <img :src="withBase(item.logo)" alt="" class="mega-menu-item-logo" />
                  <div class="mega-menu-item-content">
                    <span class="mega-menu-item-name">
                      {{ item.name }}
                      <svg v-if="item.external" class="mega-menu-external-icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </span>
                    <span class="mega-menu-item-tagline">{{ item.tagline }}</span>
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
  min-height: 44px;
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
  min-width: 720px;
  max-width: calc(100vw - 32px);
  overflow: hidden;
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
  overflow-wrap: break-word;
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
