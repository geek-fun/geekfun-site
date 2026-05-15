<template>
  <footer class="geekfun-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>{{ t.products }}</h3>
          <ul>
            <li><a :href="localePath('/products/dockit/')">DocKit</a></li>
            <li><a :href="localePath('/products/sqlkit/')">SqlKit</a></li>
            <li><a href="https://serverlessinsight.com/" target="_blank" rel="noopener">ServerlessInsight</a></li>
            <li><a href="https://github.com/geek-fun/serverless-adapter" target="_blank" rel="noopener">serverless-adapter</a></li>
            <li><a href="https://github.com/geek-fun/jest-search" target="_blank" rel="noopener">jest-search</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>{{ t.dbClients }}</h3>
          <ul>
            <li><a :href="localePath('/products/dockit/elasticsearch-gui-client')">{{ t.elasticsearchGui }}</a></li>
            <li><a :href="localePath('/products/dockit/opensearch-gui-client')">{{ t.opensearchGui }}</a></li>
            <li><a :href="localePath('/products/dockit/dynamodb-gui-client')">{{ t.dynamodbGui }}</a></li>
            <li><a :href="localePath('/products/dockit/dockit-vs-dynobase')">{{ t.dynobaseAlt }}</a></li>
            <li><a :href="localePath('/products/dockit/dockit-vs-kibana')">{{ t.vsKibana }}</a></li>
            <li><a :href="localePath('/products/dockit/dockit-vs-opensearch-dashboards')">{{ t.vsOpensearchDashboards }}</a></li>
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
    dbClients: 'Database Clients',
    dynamodbGui: 'DynamoDB GUI Client',
    dynobaseAlt: 'DocKit vs Dynobase',
    vsKibana: 'DocKit vs Kibana',
    vsOpensearchDashboards: 'DocKit vs OpenSearch Dashboards',
    elasticsearchGui: 'Elasticsearch GUI Client',
    opensearchGui: 'OpenSearch GUI Client',
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
    dbClients: '数据库客户端',
    dynamodbGui: 'DynamoDB GUI 客户端',
    dynobaseAlt: 'DocKit vs Dynobase',
    vsKibana: 'DocKit vs Kibana',
    vsOpensearchDashboards: 'DocKit vs OpenSearch Dashboards',
    elasticsearchGui: 'Elasticsearch GUI 客户端',
    opensearchGui: 'OpenSearch GUI 客户端',
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
  background-color: var(--vp-c-bg);
  border-top: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
  padding: 4rem 1.5rem 2rem;
  margin-top: 4rem;

  @media (min-width: 1440px) {
    padding: 4.5rem 3rem 2.5rem;
  }

  @media (min-width: 1920px) {
    padding: 5rem 4rem 3rem;
    margin-top: 0;
  }

  @media (min-width: 2560px) {
    padding: 6rem 5rem 3.5rem;
  }

  .container {
    max-width: 1152px;
    margin: 0 auto;

    @media (min-width: 1440px) {
      max-width: 1320px;
    }

    @media (min-width: 1920px) {
      max-width: 1536px;
    }

    @media (min-width: 2560px) {
      max-width: 1800px;
    }
  }

  .footer-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin-bottom: 4rem;
  }

  .footer-section {
    h3 {
      font-size: 0.8125rem;
      font-weight: 500;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      margin: 0 0 1rem 0;
      color: var(--vp-c-text-1);

      @media (min-width: 1920px) {
        font-size: 0.875rem;
        margin: 0 0 1.25rem 0;
      }

      @media (min-width: 2560px) {
        font-size: 0.9375rem;
      }
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 0.75rem;

        a {
          color: var(--vp-c-text-2);
          font-size: 0.875rem;
          text-decoration: none;
          transition: color 0.2s ease;

          @media (min-width: 1920px) {
            font-size: 0.9375rem;
          }

          @media (min-width: 2560px) {
            font-size: 1rem;
          }

          &:hover {
            color: var(--vp-c-text-1);
          }
        }
      }
    }
  }

  .footer-bottom {
    border-top: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;

    .footer-message {
      color: var(--vp-c-text-2);
      font-size: 0.875rem;
      margin: 0;
      line-height: 1.6;
      text-align: center;

      @media (min-width: 1920px) {
        font-size: 0.9375rem;
      }

      @media (min-width: 2560px) {
        font-size: 1rem;
      }
    }

    .footer-copyright {
      color: var(--vp-c-text-3);
      font-size: 0.8125rem;
      margin: 0;

      @media (min-width: 1920px) {
        font-size: 0.875rem;
      }

      @media (min-width: 2560px) {
        font-size: 0.9375rem;
      }

      :deep(a) {
        color: var(--vp-c-text-3);
        text-decoration: none;
        transition: color 0.2s ease;

        &:hover {
          color: var(--vp-c-text-2);
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .geekfun-footer {
    .footer-content {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }
  }
}

@media (max-width: 480px) {
  .geekfun-footer {
    .footer-content {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
}
</style>
