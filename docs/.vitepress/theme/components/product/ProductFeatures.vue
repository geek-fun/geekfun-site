<script setup lang="ts">
type FeatureItem = {
  title: string
  body: string
  icon?: string
}

defineProps<{ features: FeatureItem[] }>()

const getIcon = (name?: string) => {
  const icons: Record<string, string> = {
    database: '<path d="M3 9a9 3 0 0 1 9-3 9 3 0 0 1 9 3 9 3 0 0 1-9 3-9 3 0 0 1-9-3z"/><path d="M3 9v6a9 3 0 0 0 9 3 9 3 0 0 0 9-3V9M3 15v6a9 3 0 0 0 9 3 9 3 0 0 0 9-3v-6"/>',
    code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    table: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>',
    history: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    import: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
    sparkles: '<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>',
    cluster: '<rect x="14" y="14" width="8" height="8" rx="2" ry="2"/><rect x="2" y="14" width="8" height="8" rx="2" ry="2"/><rect x="8" y="2" width="8" height="8" rx="2" ry="2"/><line x1="12" y1="10" x2="12" y2="14"/><line x1="12" y1="14" x2="18" y2="14"/><line x1="6" y1="14" x2="12" y2="14"/>',
    terminal: '<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>',
    layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
    search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    dot: '<circle cx="12" cy="12" r="4"/>'
  }
  const path = name && icons[name] ? icons[name] : icons.dot
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`
}
</script>

<template>
  <section class="features-section">
    <div class="container">
      <div class="features-grid">
        <div v-for="feature in features" :key="feature.title" class="feature-card">
          <div class="feature-icon" v-html="getIcon(feature.icon)"></div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-body">{{ feature.body }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.features-section {
  padding: 80px 0 120px;
  background-color: var(--vp-c-bg);

  @media (max-width: 768px) {
    padding: 64px 0 80px;
  }
}

.container {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;

  @media (min-width: 1440px) {
    max-width: 1320px;
    padding: 0 48px;
  }
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.feature-card {
  padding: 28px;
  background-color: var(--gf-c-bg-card);
  border: 1px solid var(--gf-c-border-subtle);
  border-radius: 12px;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-2px);
    border-color: var(--gf-c-border-hover);
    box-shadow: 0 12px 24px var(--gf-c-glow), var(--vp-shadow-2);
  }
}

.feature-icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background-color: var(--vp-c-brand-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  color: var(--vp-c-brand-1);

  :deep(svg) {
    width: 24px;
    height: 24px;
  }
}

.feature-title {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 12px;
  color: var(--vp-c-text-1);
  letter-spacing: -0.01em;
}

.feature-body {
  font-size: 0.9375rem;
  line-height: 1.6;
  margin: 0;
  color: var(--vp-c-text-2);
}
</style>
