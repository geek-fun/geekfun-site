<script setup lang="ts">
import { computed } from 'vue';
import { useData } from 'vitepress';

const props = defineProps<{ variant: 'bar' | 'screen' }>();

const { lang } = useData();
const isZh = computed(() => lang.value === 'zh');
const label = computed(() => (isZh.value ? '登录' : 'Log in'));
</script>

<template>
  <div class="nav-auth" :class="props.variant">
    <span v-if="variant === 'bar'" class="nav-auth-divider" aria-hidden="true"></span>
    <a class="gf-btn gf-btn-primary nav-auth-link" href="https://console.geekfun.club/login">
      {{ label }}
    </a>
  </div>
</template>

<style scoped lang="scss">
.nav-auth.bar {
  display: flex;
  align-items: center;
  margin-left: 16px;

  @media (max-width: 767px) {
    display: none;
  }
}

.nav-auth-divider {
  width: 1px;
  height: 24px;
  margin: 0 8px;
  background-color: var(--vp-c-divider);
}

.nav-auth.screen {
  display: block;
  margin-top: 16px;
}

.nav-auth.screen .nav-auth-link {
  display: flex;
  width: 100%;
}
</style>
