<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="product-container">
    <div class="product-header">
      <img :src="props.product.logo" alt="product-image">
      <h3 class="card-title">{{ props.product.name }}</h3>
    </div>
    <img class="product-preview-img" :src="props.product.preview" alt="preview-image">
    <p>{{ props.product.description }}</p>
    <div class="refer-container">
      <a :href="props.product.url" target="_blank" rel="noopener noreferrer">Learn More</a>
    </div>
  </div>
</template>
<style scoped lang="scss">
.product-container {
  margin: 10px;
  width: 45%;
  min-width: 500px;
  height: 500px;
  padding: 15px;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  //box-shadow: 0 0 1px 1px rgba(236, 240, 241, 0.5);

  .product-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;

    img {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }

    h3 {
      margin: 0;
    }
  }

  .product-preview-img {
    margin: 0 auto;
    width: 100%;
    height: 300px;
    overflow: hidden;
    border-radius: 8px;
  }

  .refer-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;

    a {
      color: #3498db;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
}
</style>
