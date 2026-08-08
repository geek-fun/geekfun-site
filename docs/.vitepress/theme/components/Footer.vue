<template>
  <footer class="geekfun-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>{{ t.products }}</h3>
          <ul class="footer-links">
            <li><a :href="localePath('/products/dockit/')"><img src="/dockit.png" alt="" class="footer-icon" loading="lazy" />DocKit</a></li>
            <li><a :href="localePath('/products/sqlkit/')"><img src="/sqlkit.png" alt="" class="footer-icon" loading="lazy" />SqlKit</a></li>
            <li><a :href="localePath('/products/data-studio-agent/')"><img src="/data-studio-agent.svg" alt="" class="footer-icon" loading="lazy" />Data Studio Agent</a></li>
            <li><a href="https://serverlessinsight.com/" target="_blank" rel="noopener"><img src="/serverlessinsight.png" alt="" class="footer-icon" loading="lazy" />ServerlessInsight</a></li>
            <li><a href="https://github.com/geek-fun/serverless-adapter" target="_blank" rel="noopener"><img src="/serverless-adapter.svg" alt="" class="footer-icon" loading="lazy" />serverless-adapter</a></li>
            <li><a href="https://github.com/geek-fun/jest-search" target="_blank" rel="noopener"><img src="/jest-search.png" alt="" class="footer-icon" loading="lazy" />jest-search</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>{{ t.dbClients }}</h3>
          <ul>
            <li><a :href="localePath('/products/dockit/elasticsearch-gui-client')">{{ t.elasticsearchGui }}</a></li>
            <li><a :href="localePath('/products/dockit/opensearch-gui-client')">{{ t.opensearchGui }}</a></li>
            <li><a :href="localePath('/products/dockit/mongodb-gui-client')">{{ t.mongodbGui }}</a></li>
            <li><a :href="localePath('/products/dockit/dynamodb-gui-client')">{{ t.dynamodbGui }}</a></li>
            <li><a :href="localePath('/products/sqlkit/agentic-sql-client')">{{ t.agenticSqlClient }}</a></li>
            <li><a :href="localePath('/products/dockit/dockit-vs-dynobase')">{{ t.dynobaseAlt }}</a></li>
            <li><a :href="localePath('/products/dockit/dockit-vs-kibana')">{{ t.vsKibana }}</a></li>
            <li><a :href="localePath('/products/dockit/dockit-vs-opensearch-dashboards')">{{ t.vsOpensearchDashboards }}</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>{{ t.resources }}</h3>
          <ul>
            <li><a :href="localePath('/docs/')">{{ t.docs }}</a></li>
            <li><a :href="localePath('/blog/')">{{ t.blog }}</a></li>
            <li><a :href="localePath('/news/')">{{ t.news }}</a></li>
            <li><a href="https://github.com/geek-fun" target="_blank">{{ t.opensource }}</a></li>
            <li><a :href="localePath('/download')">{{ t.download }}</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>{{ t.community }}</h3>
          <ul class="footer-links">
            <li><a href="https://x.com/geekfun_club" target="_blank"><svg class="footer-icon footer-svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>Twitter/X</a></li>
            <li><a href="https://www.youtube.com/@geekfun-club" target="_blank"><svg class="footer-icon footer-svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12z"/></svg>YouTube</a></li>
            <li><a href="https://github.com/geek-fun" target="_blank"><svg class="footer-icon footer-svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>{{ t.opensource }}</a></li>
            <li><a href="https://github.com/geek-fun/dockit/issues" target="_blank"><svg class="footer-icon footer-svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>{{ t.support }}</a></li>
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
    mongodbGui: 'MongoDB GUI Client',
    dynamodbGui: 'DynamoDB GUI Client',
    dynobaseAlt: 'DocKit vs Dynobase',
    vsKibana: 'DocKit vs Kibana',
    vsOpensearchDashboards: 'DocKit vs OpenSearch Dashboards',
    elasticsearchGui: 'Elasticsearch GUI Client',
	    opensearchGui: 'OpenSearch GUI Client',
	    agenticSqlClient: 'Agentic SQL GUI Client',
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
    mongodbGui: 'MongoDB GUI 客户端',
    dynamodbGui: 'DynamoDB GUI 客户端',
    dynobaseAlt: 'DocKit vs Dynobase',
    vsKibana: 'DocKit vs Kibana',
    vsOpensearchDashboards: 'DocKit vs OpenSearch Dashboards',
    elasticsearchGui: 'Elasticsearch GUI 客户端',
	    opensearchGui: 'OpenSearch GUI 客户端',
	    agenticSqlClient: 'Agentic SQL GUI 客户端',
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
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
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

  .footer-icon {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    object-fit: contain;
    border-radius: 3px;
  }

  .footer-svg {
    opacity: 0.85;
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
