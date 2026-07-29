<script setup lang="ts">
import { useData } from 'vitepress'

type DatabaseItem = {
  name: string
  logo: string
  link?: string
}

type DatabaseData = {
  title?: string
  items: DatabaseItem[]
}

const props = defineProps<{ databases: DatabaseData }>()
const { lang } = useData()

const dbTones: Record<string, string> = {
  MySQL: '#4479a1',
  PostgreSQL: '#4169e1',
  'SQL Server': '#cc2927',
  Oracle: '#f80000',
  SQLite: '#5aa6d6',
  DuckDB: '#fff000',
  ClickHouse: '#fccb00',
  Snowflake: '#29b5e8',
  BigQuery: '#669df6',
  MariaDB: '#c0765a',
  MongoDB: '#47a248',
  Redis: '#ff4438',
  Elasticsearch: '#00bfb3',
  DynamoDB: '#4053d6',
  TiDB: '#e6002b',
  OceanBase: '#ff6a00',
  PolarDB: '#00a1d6',
  'SAP HANA': '#0099cc',
  Teradata: '#f37421',
  DB2: '#054ada',
  Informix: '#0089d1',
  Cassandra: '#1287b1',
  Hive: '#fdee00',
  Trino: '#dd00a1',
  Presto: '#58c1c8',
  Redshift: '#8b4dff',
  CockroachDB: '#6933ff',
  Firebird: '#e66510',
  Exasol: '#e20074',
  Neo4j: '#008cc1',
  DM8: '#c9372d',
  KingbaseES: '#0d6efd',
  GaussDB: '#1e88e5',
  GBase: '#1a73e8',
  TDSQL: '#0052d9',
  openGauss: '#0056d2',
  YashanDB: '#0a5c8a',
  Vastbase: '#0066b4',
  StarRocks: '#5b2ad4',
  Doris: '#1b7dfa',
  Databend: '#e5143d',
  TDengine: '#f90',
  HighGo: '#1ba0e2',
  UXDB: '#1e3a5f',
  Xugudb: '#004080',
  SelectDB: '#ff6900',
  Kylin: '#00968b',
  Databricks: '#ff3621',
  Manticore: '#f68121',
  Derby: '#9b2b2b',
  H2: '#1a6b3c',
  rqlite: '#3b66bc',
  Turso: '#4ff8d2',
  QuestDB: '#e34a6f',
  TimescaleDB: '#fdb515',
  YugabyteDB: '#1a8cff',
  Vertica: '#e6742d',
  InterSystems: '#ba0c2f',
}

function getDbTone(name: string): string {
  return dbTones[name] || '#888'
}
</script>

<template>
  <section class="database-section">
    <div class="container">
      <div class="database-header">
        <span class="database-label">{{ lang === 'zh' ? '支持的数据库' : 'Databases' }}</span>
        <h2 v-if="databases.title" class="database-title">{{ databases.title }}</h2>
      </div>

      <div class="database-grid">
        <div
          v-for="item in databases.items"
          :key="item.name"
          class="database-item"
          :style="{ '--db-tone': getDbTone(item.name) }"
        >
          <div class="database-chip">
            <img :src="item.logo" :alt="item.name" class="database-logo" loading="lazy" />
          </div>
          <span class="database-name">{{ item.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
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

.database-section {
  padding: 48px 0 64px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 50% 0%, color-mix(in srgb, var(--vp-c-brand-1) 6%, transparent) 0%, transparent 70%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 32px 0 48px;
  }
}

.database-header {
  text-align: center;
  margin-bottom: 40px;
}

.database-label {
  display: inline-block;
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--vp-c-brand-1);
  margin-bottom: 8px;
}

.database-title {
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
  margin: 0;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.375rem;
  }
}

.database-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 12px;

  @media (max-width: 768px) {
    gap: 10px;
  }
}

.database-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100px;
  aspect-ratio: 1 / 1;
  border-radius: 12px;
  background: color-mix(in srgb, var(--vp-c-bg-soft) 70%, transparent);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid var(--gf-c-border-subtle, var(--vp-c-divider));
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px color-mix(in srgb, var(--db-tone) 20%, transparent);
    border-color: var(--db-tone);
  }

  @media (max-width: 768px) {
    width: 88px;
  }
}

.database-chip {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background: var(--vp-c-bg);
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);

  @media (max-width: 768px) {
    width: 38px;
    height: 38px;
  }
}

.database-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.database-name {
  font-size: 0.6875rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  text-align: center;
  line-height: 1.3;
  max-width: 88px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 0.625rem;
    max-width: 74px;
  }
}
</style>
