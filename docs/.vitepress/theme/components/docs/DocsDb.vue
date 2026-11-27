<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'

const DB_ICONS = {
  postgresql: '/db-logos/postgresql-logo.svg',
  mysql: '/db-logos/mysql-logo.svg',
  sqlserver: '/db-logos/sqlserver-logo.svg',
  sqlite: '/db-logos/sqlite-logo.svg',
  sqlcipher: '/db-logos/sqlcipher-logo.svg',
  clickhouse: '/db-logos/clickhouse-logo.svg',
  alloydb: '/db-logos/alloydb-logo.svg',
  redshift: '/db-logos/redshift-logo.svg',
  cloudsqlpg: '/db-logos/cloudsqlpg-logo.svg',
  cockroachdb: '/db-logos/cockroachdb-logo.svg',
  cratedb: '/db-logos/cratedb-logo.svg',
  enterprisedb: '/db-logos/enterprisedb-logo.svg',
  fujitsupg: '/db-logos/postgresql-logo.svg',
  gaussdb: '/db-logos/gaussdb-logo.svg',
  gbase: '/db-logos/gbase-logo.svg',
  greenplum: '/db-logos/greenplum-logo.svg',
  highgo: '/db-logos/highgo-logo.svg',
  materialize: '/db-logos/materialize-logo.svg',
  opengauss: '/db-logos/opengauss-logo.svg',
  questdb: '/db-logos/questdb-logo.svg',
  timescaledb: '/db-logos/timescaledb-logo.svg',
  uxdb: '/db-logos/uxdb-logo.svg',
  vastbase: '/db-logos/vastbase-logo.svg',
  yugabytedb: '/db-logos/yugabytedb-logo.svg',
  doris: '/db-logos/doris-logo.svg',
  cloudsqlmysql: '/db-logos/mysql-logo.svg',
  databend: '/db-logos/databend-logo.svg',
  goldendb: '/db-logos/goldendb-logo.svg',
  manticore: '/db-logos/manticore-logo.svg',
  mariadb: '/db-logos/mariadb-logo.svg',
  oceanbase: '/db-logos/oceanbase-logo.svg',
  polardb: '/db-logos/polardb-logo.svg',
  selectdb: '/db-logos/selectdb-logo.svg',
  singlestore: '/db-logos/singlestorememsql-logo.svg',
  starrocks: '/db-logos/starrocks-logo.svg',
  tdsql: '/db-logos/tdsql-logo.svg',
  tidb: '/db-logos/tidb-logo.svg',
  presto: '/db-logos/presto-logo.svg',
  rqlite: '/db-logos/rqlite-logo.svg',
  trino: '/db-logos/trino-logo.svg',
  turso: '/db-logos/turso-logo.svg',
  oracle: '/db-logos/oracle-logo.svg',
  duckdb: '/db-logos/duckdb-logo.svg',
  cassandra: '/db-logos/cassandra-logo.svg',
  scylladb: '/db-logos/scylladb-logo.png',
  snowflake: '/db-logos/snowflake-logo.svg',
  bigquery: '/db-logos/bigquery-logo.svg',
  databricks: '/db-logos/databricks-logo.svg',
  hive: '/db-logos/hive-logo.svg',
  kylin: '/db-logos/kylin-logo.svg',
  db2: '/db-logos/db2-logo.svg',
  informix: '/db-logos/informix-logo.svg',
  hana: '/db-logos/hana-logo.svg',
  teradata: '/db-logos/teradata-logo.svg',
  vertica: '/db-logos/vertica-logo.svg',
  exasol: '/db-logos/exasol-logo.svg',
  firebird: '/db-logos/firebird-logo.svg',
  h2: '/db-logos/h2-logo.svg',
  derby: '/db-logos/derby-logo.svg',
  iris: '/db-logos/iris-logo.svg',
  access: '/db-logos/access-logo.svg',
  dm8: '/db-logos/dm8-logo.svg',
  kingbasees: '/db-logos/kingbasees-logo.svg',
  xugudb: '/db-logos/xugudb-logo.svg',
  yashandb: '/db-logos/yashandb-logo.svg',
  tdengine: '/db-logos/tdengine-logo.svg',
} as const

type DbId = keyof typeof DB_ICONS

const props = defineProps<{
  id: DbId
  label: string
  href?: string
}>()

const iconSrc = computed(() => withBase(DB_ICONS[props.id]))
</script>

<template>
  <span class="docs-db">
    <span class="docs-db__icon" aria-hidden="true">
      <img :src="iconSrc" alt="" width="18" height="18" loading="lazy" decoding="async" />
    </span>
    <a v-if="href" class="docs-db__link" :href="withBase(href)">{{ label }}</a>
    <span v-else class="docs-db__label">{{ label }}</span>
  </span>
</template>
