<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useData } from 'vitepress';

const props = defineProps<{ variant: 'bar' | 'screen' }>();
const CONSOLE_URL = 'https://console.geekfun.club';

const { lang } = useData();
const isZh = computed(() => lang.value === 'zh');

/**
 * Auth-aware nav entry (mirrors serverlessinsight-site's AuthNav): renders
 * 「登录 / Log in」 for anonymous visitors and 「控制台 / Console」 for
 * logged-in users. The state is the lightweight gfc_auth cookie the console
 * writes at login and clears at logout/expiry (scoped to geekfun.club).
 * Presentational only — the console API owns the real session.
 */
const isLoggedIn = ref(false);

const update = () => {
  isLoggedIn.value = document.cookie.includes('gfc_auth=');
};

let poll: ReturnType<typeof setInterval> | undefined;
onMounted(() => {
  update();
  // cheap cookie poll: covers logging in/out in another console tab
  poll = setInterval(update, 3000);
  window.addEventListener('focus', update);
});
onUnmounted(() => {
  if (poll) clearInterval(poll);
  window.removeEventListener('focus', update);
});

const linkHref = computed(() =>
  isLoggedIn.value ? `${CONSOLE_URL}/home` : `${CONSOLE_URL}/login`,
);
const label = computed(() => {
  if (isZh.value) return isLoggedIn.value ? '控制台' : '登录';
  return isLoggedIn.value ? 'Console' : 'Log in';
});
</script>

<template>
  <div class="nav-auth" :class="props.variant">
    <span v-if="variant === 'bar'" class="nav-auth-divider" aria-hidden="true"></span>
    <a class="gf-btn gf-btn-primary nav-auth-link" :href="linkHref">
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
