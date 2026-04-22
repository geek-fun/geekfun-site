<script setup lang="ts">
type ShowcaseItem = {
  title: string
  body: string
  image: string
  align: 'left' | 'right'
}

defineProps<{ showcase: ShowcaseItem[] }>()
</script>

<template>
  <div class="product-showcase">
    <section
      v-for="(item, index) in showcase"
      :key="item.title"
      :class="['showcase-section', index % 2 === 0 ? 'bg-default' : 'bg-alt']"
    >
      <div :class="['container', 'showcase-grid', item.align === 'right' ? 'align-right' : 'align-left']">
        <div class="showcase-visual">
          <img :src="item.image" :alt="item.title" class="showcase-image" loading="lazy" />
        </div>
        <div class="showcase-content">
          <h2 class="showcase-title">{{ item.title }}</h2>
          <p class="showcase-body">{{ item.body }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.product-showcase {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.showcase-section {
  padding: 96px 0;
  width: 100%;

  @media (max-width: 768px) {
    padding: 64px 0;
  }
}

.bg-default {
  background-color: var(--vp-c-bg);
}

.bg-alt {
  background-color: var(--vp-c-bg-alt);
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

.showcase-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
}

/* Image left, copy right */
.align-left {
  .showcase-visual {
    order: 1;
    @media (max-width: 1024px) {
      order: 1;
    }
  }
  .showcase-content {
    order: 2;
    @media (max-width: 1024px) {
      order: 2;
    }
  }
}

/* Image right, copy left */
.align-right {
  .showcase-visual {
    order: 2;
    @media (max-width: 1024px) {
      order: 1; /* On mobile, image is always first */
    }
  }
  .showcase-content {
    order: 1;
    @media (max-width: 1024px) {
      order: 2;
    }
  }
}

.showcase-visual {
  width: 100%;
}

.showcase-image {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: var(--vp-shadow-3, 0 16px 48px rgba(0, 0, 0, 0.12));
  border: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
}

.showcase-content {
  display: flex;
  flex-direction: column;
}

.showcase-title {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin: 0 0 1.25rem;
  color: var(--vp-c-text-1);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
}

.showcase-body {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
  margin: 0;
  max-width: 48ch;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
}
</style>
