<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="product-card">
    <div class="product-header">
      <div class="product-logo-wrapper">
        <img class="product-logo" :src="props.product.logo" :alt="props.product.name + ' logo'" width="24" height="24">
      </div>
      <h3 class="product-title">{{ props.product.name }}</h3>
    </div>
    
    <div class="product-preview-wrapper">
      <img class="product-preview" :src="props.product.preview" :alt="props.product.name + ' preview screenshot'" width="640" height="360" loading="lazy">
    </div>
    
    <p class="product-desc">{{ props.product.description }}</p>
    
    <div class="product-footer">
      <a class="product-link" :href="props.product.url" target="_blank" rel="noopener noreferrer">
        Learn More <span class="arrow">&rarr;</span>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-card {
  display: flex;
  flex-direction: column;
  margin: 16px;
  width: calc(50% - 32px);
  min-width: 320px;
  padding: 20px 24px;
  border-radius: 12px;
  background-color: var(--gf-c-bg-card, var(--vp-c-bg-soft));
  border: 1px solid var(--gf-c-border-subtle, var(--vp-c-border));
  box-shadow: var(--vp-shadow-1);
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px var(--gf-c-glow, rgba(248,155,64,0.1)), var(--vp-shadow-2);
    border-color: var(--gf-c-border-hover, var(--vp-c-brand-1));
    
    .product-preview {
      transform: scale(1.03);
    }
  }
}

.product-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.product-logo-wrapper {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--vp-c-bg);
  border-radius: 10px;
  box-shadow: var(--vp-shadow-1);
  margin-right: 16px;
  border: 1px solid var(--gf-c-border-subtle, var(--vp-c-border));
  transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-logo {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.product-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  letter-spacing: -0.01em;
  line-height: 1.4;
}

.product-preview-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
  border: 1px solid var(--gf-c-border-subtle, var(--vp-c-border));
  background-color: var(--vp-c-bg-alt);
}

.product-preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-desc {
  margin: 0 0 24px 0;
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  flex-grow: 1;
}

.product-footer {
  margin-top: auto;
  display: flex;
  justify-content: flex-start;
}

.product-link {
  display: inline-flex;
  align-items: center;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  
  .arrow {
    margin-left: 6px;
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    color: var(--vp-c-brand-2);
    text-decoration: none;
    
    .arrow {
      transform: translateX(4px);
    }
  }
}

@media screen and (max-width: 768px) {
  .product-card {
    width: 100%;
    margin: 16px 0;
    padding: 20px;
    min-width: 100%;
  }
  
  .product-header {
    margin-bottom: 16px;
  }
  
  .product-desc {
    margin-bottom: 20px;
  }
}
</style>