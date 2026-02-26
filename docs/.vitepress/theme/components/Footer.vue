<template>
  <footer class="geekfun-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>{{ t.products }}</h3>
          <ul>
            <li><a :href="localePath('/products/dockit/')">DocKit</a></li>
            <li><a href="http://serverlessinsight.com/" target="_blank">ServerlessInsight</a></li>
            <li><a href="https://github.com/geek-fun/jest-search" target="_blank">jest-search</a></li>
            <li><a href="https://github.com/geek-fun/serverless-adapter" target="_blank">serverless-adapter</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>{{ t.dockit }}</h3>
          <ul>
            <li><a :href="localePath('/blog/dynamodb-gui')">{{ t.dynamodbGui }}</a></li>
            <li><a :href="localePath('/blog/elasticsearch-gui')">{{ t.elasticsearchGui }}</a></li>
            <li><a :href="localePath('/blog/opensearch-gui')">{{ t.opensearchGui }}</a></li>
            <li><a :href="localePath('/download')">{{ t.download }}</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>{{ t.resources }}</h3>
          <ul>
            <li><a :href="localePath('/docs/')">{{ t.docs }}</a></li>
            <li><a :href="localePath('/blog/')">{{ t.blog }}</a></li>
            <li><a :href="localePath('/news/')">{{ t.news }}</a></li>
            <li><a href="https://github.com/geek-fun" target="_blank">{{ t.opensource }}</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>{{ t.community }}</h3>
          <ul>
            <li><a href="https://x.com/Blankll31075" target="_blank">Twitter/X</a></li>
            <li><a href="https://www.youtube.com/@geekfun-club" target="_blank">YouTube</a></li>
            <li><a href="https://github.com/geek-fun/dockit/issues" target="_blank">{{ t.support }}</a></li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p class="footer-message">{{ t.message }}</p>
        <p class="footer-copyright" v-html="t.copyright"></p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { lang } = useData()

const translations = {
  en: {
    products: 'Products',
    dockit: 'DocKit',
    resources: 'Resources',
    community: 'Community',
    dynamodbGui: 'DynamoDB GUI',
    elasticsearchGui: 'Elasticsearch GUI',
    opensearchGui: 'OpenSearch GUI',
    download: 'Download',
    docs: 'Documentation',
    blog: 'Blog',
    news: 'News',
    opensource: 'Open Source',
    support: 'Support & Issues',
    message: 'GEEKFUN is a software community for opensource projects, our goal is to build sustainable open source projects for the world',
    copyright: 'Copyright © 2023-present <a href="https://github.com/geek-fun">geek-fun</a>'
  },
  zh: {
    products: '产品',
    dockit: 'DocKit',
    resources: '资源',
    community: '社区',
    dynamodbGui: 'DynamoDB GUI',
    elasticsearchGui: 'Elasticsearch GUI',
    opensearchGui: 'OpenSearch GUI',
    download: '下载',
    docs: '文档',
    blog: '博客',
    news: '新闻',
    opensource: '开源',
    support: '支持与问题',
    message: '极客范是一个软件社区，致力于构建可持续的开源软件和服务',
    copyright: 'Copyright © 2023-present <a href="https://github.com/geek-fun">geek-fun</a>'
  }
}

const t = computed(() => {
  return translations[lang.value as keyof typeof translations] || translations.en
})

const localePath = (path: string) => {
  return lang.value === 'zh' ? `/zh${path}` : path
}
</script>

<style scoped lang="scss">
.geekfun-footer {
  background-color: var(--vp-c-bg-soft);
  border-top: 1px solid var(--vp-c-divider);
  padding: 48px 24px 24px;
  margin-top: 64px;

  .container {
    max-width: 1152px;
    margin: 0 auto;
  }

  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 48px;
    margin-bottom: 48px;
  }

  .footer-section {
    h3 {
      font-size: 16px;
      font-weight: 600;
      margin: 0 0 16px 0;
      color: var(--vp-c-text-1);
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 12px;

        a {
          color: var(--vp-c-text-2);
          text-decoration: none;
          transition: color 0.2s;

          &:hover {
            color: var(--vp-c-brand-1);
          }
        }
      }
    }
  }

  .footer-bottom {
    border-top: 1px solid var(--vp-c-divider);
    padding-top: 24px;
    text-align: center;

    .footer-message {
      color: var(--vp-c-text-2);
      font-size: 14px;
      margin: 0 0 12px 0;
      line-height: 1.6;
    }

    .footer-copyright {
      color: var(--vp-c-text-3);
      font-size: 14px;
      margin: 0;

      :deep(a) {
        color: var(--vp-c-text-3);
        text-decoration: none;
        transition: color 0.2s;

        &:hover {
          color: var(--vp-c-brand-1);
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .geekfun-footer {
    .footer-content {
      grid-template-columns: 1fr;
      gap: 32px;
    }
  }
}
</style>
