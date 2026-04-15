<script setup lang="ts">
export type ValueIconName = 'impact' | 'transparent' | 'lasting' | 'value' | 'evolve' | 'community'

defineProps<{
  name: ValueIconName
}>()
</script>

<template>
  <div class="value-icon-wrapper">
    <svg width="0" height="0" class="svg-defs">
      <defs>
        <linearGradient id="gf-icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f89b40" />
          <stop offset="100%" stop-color="#bd34fe" />
        </linearGradient>
      </defs>
    </svg>

    <svg v-if="name === 'impact'" class="v-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" opacity="0.3" />
      <circle cx="12" cy="12" r="4" stroke="url(#gf-icon-gradient)" stroke-width="2" />
    </svg>

    <svg v-if="name === 'transparent'" class="v-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 21a9 9 0 0 0 9-9a9 9 0 0 0-9-9a9 9 0 0 0-9 9a9 9 0 0 0 9 9z" opacity="0.3" />
      <path d="M12 3v18" stroke="url(#gf-icon-gradient)" stroke-width="2" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" />
    </svg>

    <svg v-if="name === 'lasting'" class="v-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" opacity="0.3" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" stroke="url(#gf-icon-gradient)" stroke-width="2" />
    </svg>

    <svg v-if="name === 'value'" class="v-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 3h12l4 6-10 12L2 9l4-6z" opacity="0.3" />
      <path d="M2 9h20M12 21l4-12" />
      <path d="M12 21L8 9" stroke="url(#gf-icon-gradient)" stroke-width="2" />
    </svg>

    <svg v-if="name === 'evolve'" class="v-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="8" cy="12" r="6" opacity="0.3" />
      <circle cx="16" cy="12" r="6" stroke="url(#gf-icon-gradient)" stroke-width="2" />
      <path d="M12 6c3 0 6 3 6 6s-3 6-6 6" />
    </svg>

    <svg v-if="name === 'community'" class="v-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 6l-6 6-6-6M12 12v6" opacity="0.3" />
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="6" r="3" stroke="url(#gf-icon-gradient)" stroke-width="2" />
      <circle cx="12" cy="18" r="3" />
    </svg>
  </div>
</template>

<style scoped>
.svg-defs {
  position: absolute;
  width: 0;
  height: 0;
  visibility: hidden;
}

.value-icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin-bottom: 1.25rem;
  border-radius: 12px;
  background: var(--gf-c-bg-card, var(--vp-c-bg));
  border: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
  box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.03), 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 1;
}

/* Base icon styles */
.v-icon {
  width: 22px;
  height: 22px;
  color: var(--vp-c-text-1);
  transition: color 0.3s ease, transform 0.3s ease;
}

/* Hover effects propagated from parent value-card */
:global(.value-card:hover) .value-icon-wrapper {
  transform: translateY(-4px) scale(1.05);
  border-color: rgba(189, 52, 254, 0.3);
  box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.1), 0 8px 16px rgba(189, 52, 254, 0.1);
  background: var(--gf-gradient-brand-subtle);
}

:global(.value-card:hover) .v-icon {
  transform: scale(1.05);
}

@media (min-width: 1440px) {
  .value-icon-wrapper {
    width: 48px;
    height: 48px;
    margin-bottom: 1.5rem;
  }
  .v-icon {
    width: 24px;
    height: 24px;
  }
}
</style>
