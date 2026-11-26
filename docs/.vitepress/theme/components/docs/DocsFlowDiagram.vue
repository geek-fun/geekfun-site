<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import DocsIcon from './DocsIcon.vue'
import DocsIconStack, { type StackLogo } from './DocsIconStack.vue'

type FlowVariant = 'mcp-bridge' | 'ssh-tunnel'

const props = withDefaults(defineProps<{
  variant?: FlowVariant
}>(), {
  variant: 'mcp-bridge',
})

const { lang } = useData()
const isZh = computed(() => lang.value === 'zh')

const agentLogos: StackLogo[] = [
  { name: 'Claude Code', src: '/agent-logos/claude-code-logo.png' },
  { name: 'Codex', src: '/agent-logos/codex-logo.png' },
  { name: 'Cursor', src: '/agent-logos/cursor-logo.png' },
  { name: 'Windsurf', src: '/agent-logos/windsurf-logo.png' },
]

const databaseLogos: StackLogo[] = [
  { name: 'PostgreSQL', src: '/db-logos/postgresql-logo.svg' },
  { name: 'MySQL', src: '/db-logos/mysql-logo.svg' },
  { name: 'SQL Server', src: '/db-logos/sqlserver-logo.svg' },
  { name: 'Oracle', src: '/db-logos/oracle-logo.svg' },
]

const mcpCopy = computed(() =>
  isZh.value
    ? {
        ariaLabel: 'SqlKit MCP 桥接架构数据流图',
        boundaryTitle: '本机运行边界 · 127.0.0.1',
        boundaryBadge: '凭据不离开 SqlKit',
        agentTitle: '编程智能体',
        agentSubtitle: 'Claude Code · Codex · Cursor · Windsurf · OpenCode',
        agentStackLabel: '支持的编程智能体',
        edge1Protocol: 'stdio MCP',
        edge1Detail: '本机 stdin / stdout JSON-RPC',
        mcpTitle: 'Data Studio Agent',
        mcpSubtitle: 'npx @geek-fun/data-studio-mcp',
        mcpBadge: '本地路由',
        edge2Protocol: 'localhost HTTP',
        edge2Detail: '仅监听 127.0.0.1 本机回环',
        bridgeTitle: 'SqlKit MCP 桥接',
        bridgeSubtitle: '单连接 AI 权限策略 · SQL AST 与 CQL 写防护',
        bridgeBadge: '权限 + AST 防护',
        edge3Protocol: '原生 / SSH / JDBC',
        edge3Detail: '加密 TLS 与本地数据库驱动',
        dbTitle: '目标数据库',
        dbSubtitle: '本地、云端或私有 VPC，支持 68+ SQL 引擎',
        dbStackLabel: '支持的 SQL 数据库引擎',
        caption: 'Data Studio Agent 在本机以 stdio 模式运行，经由 SqlKit 内嵌 MCP 桥接完成权限与 AST 校验后再访问目标数据库。',
      }
    : {
        ariaLabel: 'SqlKit MCP Bridge architecture flow diagram',
        boundaryTitle: 'LOCAL MACHINE · 127.0.0.1',
        boundaryBadge: 'Credentials stay in SqlKit',
        agentTitle: 'Coding Agent',
        agentSubtitle: 'Claude Code · Codex · Cursor · Windsurf · OpenCode',
        agentStackLabel: 'Supported coding agents',
        edge1Protocol: 'stdio MCP',
        edge1Detail: 'Local stdin / stdout JSON-RPC',
        mcpTitle: 'Data Studio Agent',
        mcpSubtitle: 'npx @geek-fun/data-studio-mcp',
        mcpBadge: 'Stdio Router',
        edge2Protocol: 'localhost HTTP',
        edge2Detail: '127.0.0.1 loopback only',
        bridgeTitle: 'SqlKit MCP Bridge',
        bridgeSubtitle: 'Per-connection AI policy · SQL AST & CQL guard',
        bridgeBadge: 'Policy + AST Guard',
        edge3Protocol: 'Native / SSH / JDBC',
        edge3Detail: 'Encrypted TLS & local drivers',
        dbTitle: 'Your Database',
        dbSubtitle: 'Local, cloud, or private VPC across 68+ SQL engines',
        dbStackLabel: 'Supported SQL database engines',
        caption: 'Data Studio Agent runs locally over stdio and routes every database tool call through SqlKit\'s embedded MCP Bridge for policy and AST checks.',
      },
)

const sshCopy = computed(() =>
  isZh.value
    ? {
        ariaLabel: 'SqlKit SSH 多跳隧道与系统代理链路图',
        clientTitle: '本机 SqlKit',
        clientSubtitle: '本地回环端口 127.0.0.1:<随机空闲端口>',
        clientBadge: '客户端',
        edge1Protocol: '可选第 0 跳',
        edge1Detail: '系统 HTTP CONNECT 代理（自动检测）',
        chainTitle: 'SSH-2 加密跳板链路',
        chainBadge: '10s 超时 · 30s 保活',
        hop1Title: '堡垒机 1（SSH）',
        hop1Subtitle: '可复用 SSH 配置 · 密码、私钥或 SSH Agent 认证',
        hop1Badge: '第 1 跳',
        edge2Protocol: '多跳链路转发',
        edge2Detail: '支持拖拽排序 · 自动解析 ~/.ssh/config',
        hop2Title: '堡垒机 2 … N（可选）',
        hop2Subtitle: '按顺序串联更多跳板机进入受限私有子网',
        hop2Badge: '第 N 跳',
        edge3Protocol: '内网 TCP / TLS 转发',
        edge3Detail: '按最后一跳视角连接数据库主机与端口',
        dbTitle: '内网目标数据库',
        dbSubtitle: '私有 VPC、企业内网或堡垒机本机端口',
        dbStackLabel: '目标数据库引擎',
        caption: 'SqlKit 通过本地回环端口与可复用多跳 SSH 链路建立加密转发，可选经由操作系统 HTTP CONNECT 代理发起第一跳。',
      }
    : {
        ariaLabel: 'SqlKit SSH multi-hop tunnel and system proxy flow diagram',
        clientTitle: 'SqlKit on Your Machine',
        clientSubtitle: 'Local loopback listener 127.0.0.1:<ephemeral port>',
        clientBadge: 'Client',
        edge1Protocol: 'Optional Hop 0',
        edge1Detail: 'OS System Proxy (http:// CONNECT)',
        chainTitle: 'ENCRYPTED SSH-2 JUMP CHAIN',
        chainBadge: '10s timeout · 30s keepalive',
        hop1Title: 'Bastion 1 (SSH)',
        hop1Subtitle: 'Reusable SSH profile · Password, Private Key, or SSH Agent',
        hop1Badge: 'Hop 1',
        edge2Protocol: 'Multi-hop Forwarding',
        edge2Detail: 'Drag-and-drop order · ~/.ssh/config alias resolution',
        hop2Title: 'Bastion 2 … N (Optional)',
        hop2Subtitle: 'Chain additional jump hosts into restricted private subnets',
        hop2Badge: 'Hop N',
        edge3Protocol: 'Internal TCP / TLS',
        edge3Detail: 'Target host & port as reachable from the final bastion',
        dbTitle: 'Private Database',
        dbSubtitle: 'Private VPC, corporate subnet, or bastion localhost',
        dbStackLabel: 'Target database engines',
        caption: 'SqlKit binds a local loopback port and forwards database traffic through single or multi-hop SSH bastions, optionally chaining through the OS HTTP CONNECT proxy on hop 0.',
      },
)
</script>

<template>
  <figure
    v-if="props.variant === 'mcp-bridge'"
    class="docs-flow docs-flow--mcp"
    :aria-label="mcpCopy.ariaLabel"
  >
    <div class="docs-flow__canvas">
      <div class="docs-flow__boundary">
        <div class="docs-flow__boundary-bar">
          <span class="docs-flow__boundary-title">
            <span class="docs-flow__beacon" aria-hidden="true"></span>
            {{ mcpCopy.boundaryTitle }}
          </span>
          <span class="docs-flow__boundary-pill">
            <DocsIcon name="lock" :size="12" />
            {{ mcpCopy.boundaryBadge }}
          </span>
        </div>

        <div class="docs-flow__node docs-flow__node--violet docs-flow__node--step-1">
          <div class="docs-flow__visual docs-flow__visual--icon docs-flow__visual--icon-violet">
            <DocsIcon name="terminal" :size="19" />
          </div>
          <div class="docs-flow__body">
            <div class="docs-flow__title">{{ mcpCopy.agentTitle }}</div>
            <div class="docs-flow__subtitle">{{ mcpCopy.agentSubtitle }}</div>
          </div>
          <div class="docs-flow__aside">
            <DocsIconStack
              :items="agentLogos"
              :max="4"
              :extra-count="10"
              size="sm"
              :aria-label="mcpCopy.agentStackLabel"
            />
          </div>
        </div>

        <div class="docs-flow__edge docs-flow__edge--step-1" aria-hidden="true">
          <div class="docs-flow__rail">
            <svg viewBox="0 0 24 42" fill="none">
              <line x1="12" y1="0" x2="12" y2="36" class="docs-flow__wire-bg" />
              <line x1="12" y1="0" x2="12" y2="36" class="docs-flow__wire-dash" />
              <path d="M7.5 31.5L12 37L16.5 31.5" class="docs-flow__arrow" />
            </svg>
            <span class="docs-flow__pulse"></span>
          </div>
          <div class="docs-flow__edge-meta">
            <span class="docs-flow__protocol">{{ mcpCopy.edge1Protocol }}</span>
            <span class="docs-flow__edge-detail">{{ mcpCopy.edge1Detail }}</span>
          </div>
        </div>

        <div class="docs-flow__node docs-flow__node--amber docs-flow__node--step-2">
          <div class="docs-flow__visual docs-flow__visual--logo docs-flow__visual--vector">
            <img :src="withBase('/data-studio-agent.svg')" alt="" width="24" height="24" />
          </div>
          <div class="docs-flow__body">
            <div class="docs-flow__title">{{ mcpCopy.mcpTitle }}</div>
            <div class="docs-flow__subtitle docs-flow__subtitle--mono">{{ mcpCopy.mcpSubtitle }}</div>
          </div>
          <div class="docs-flow__aside">
            <span class="docs-flow__chip docs-flow__chip--amber">{{ mcpCopy.mcpBadge }}</span>
          </div>
        </div>

        <div class="docs-flow__edge docs-flow__edge--step-2" aria-hidden="true">
          <div class="docs-flow__rail">
            <svg viewBox="0 0 24 42" fill="none">
              <line x1="12" y1="0" x2="12" y2="36" class="docs-flow__wire-bg" />
              <line x1="12" y1="0" x2="12" y2="36" class="docs-flow__wire-dash" />
              <path d="M7.5 31.5L12 37L16.5 31.5" class="docs-flow__arrow" />
            </svg>
            <span class="docs-flow__pulse"></span>
          </div>
          <div class="docs-flow__edge-meta">
            <span class="docs-flow__protocol">{{ mcpCopy.edge2Protocol }}</span>
            <span class="docs-flow__edge-detail">{{ mcpCopy.edge2Detail }}</span>
          </div>
        </div>

        <div class="docs-flow__node docs-flow__node--blue docs-flow__node--step-3">
          <div class="docs-flow__visual docs-flow__visual--logo">
            <img :src="withBase('/sqlkit.png')" alt="" width="40" height="40" />
          </div>
          <div class="docs-flow__body">
            <div class="docs-flow__title">{{ mcpCopy.bridgeTitle }}</div>
            <div class="docs-flow__subtitle">{{ mcpCopy.bridgeSubtitle }}</div>
          </div>
          <div class="docs-flow__aside">
            <span class="docs-flow__chip docs-flow__chip--blue">
              <DocsIcon name="shield" :size="12" />
              {{ mcpCopy.bridgeBadge }}
            </span>
          </div>
        </div>
      </div>

      <div class="docs-flow__edge docs-flow__edge--step-3 docs-flow__edge--outbound" aria-hidden="true">
        <div class="docs-flow__rail">
          <svg viewBox="0 0 24 44" fill="none">
            <line x1="12" y1="0" x2="12" y2="38" class="docs-flow__wire-bg" />
            <line x1="12" y1="0" x2="12" y2="38" class="docs-flow__wire-dash docs-flow__wire-dash--emerald" />
            <path d="M7.5 33.5L12 39L16.5 33.5" class="docs-flow__arrow docs-flow__arrow--emerald" />
          </svg>
          <span class="docs-flow__pulse docs-flow__pulse--emerald"></span>
        </div>
        <div class="docs-flow__edge-meta">
          <span class="docs-flow__protocol docs-flow__protocol--emerald">{{ mcpCopy.edge3Protocol }}</span>
          <span class="docs-flow__edge-detail">{{ mcpCopy.edge3Detail }}</span>
        </div>
      </div>

      <div class="docs-flow__node docs-flow__node--emerald docs-flow__node--target docs-flow__node--step-4">
        <div class="docs-flow__visual docs-flow__visual--icon docs-flow__visual--icon-emerald">
          <DocsIcon name="database" :size="19" />
        </div>
        <div class="docs-flow__body">
          <div class="docs-flow__title">{{ mcpCopy.dbTitle }}</div>
          <div class="docs-flow__subtitle">{{ mcpCopy.dbSubtitle }}</div>
        </div>
        <div class="docs-flow__aside">
          <DocsIconStack
            :items="databaseLogos"
            :max="4"
            :extra-count="64"
            size="sm"
            :aria-label="mcpCopy.dbStackLabel"
          />
        </div>
      </div>
    </div>

    <figcaption class="docs-flow__caption">{{ mcpCopy.caption }}</figcaption>
  </figure>

  <figure
    v-else
    class="docs-flow docs-flow--ssh"
    :aria-label="sshCopy.ariaLabel"
  >
    <div class="docs-flow__canvas">
      <div class="docs-flow__node docs-flow__node--blue docs-flow__node--outer docs-flow__node--step-1">
        <div class="docs-flow__visual docs-flow__visual--logo">
          <img :src="withBase('/sqlkit.png')" alt="" width="40" height="40" />
        </div>
        <div class="docs-flow__body">
          <div class="docs-flow__title">{{ sshCopy.clientTitle }}</div>
          <div class="docs-flow__subtitle docs-flow__subtitle--mono">{{ sshCopy.clientSubtitle }}</div>
        </div>
        <div class="docs-flow__aside">
          <span class="docs-flow__chip docs-flow__chip--blue">{{ sshCopy.clientBadge }}</span>
        </div>
      </div>

      <div class="docs-flow__edge docs-flow__edge--step-1 docs-flow__edge--outbound" aria-hidden="true">
        <div class="docs-flow__rail">
          <svg viewBox="0 0 24 44" fill="none">
            <line x1="12" y1="0" x2="12" y2="38" class="docs-flow__wire-bg" />
            <line x1="12" y1="0" x2="12" y2="38" class="docs-flow__wire-dash" />
            <path d="M7.5 33.5L12 39L16.5 33.5" class="docs-flow__arrow" />
          </svg>
          <span class="docs-flow__pulse"></span>
        </div>
        <div class="docs-flow__edge-meta">
          <span class="docs-flow__protocol docs-flow__protocol--dashed">{{ sshCopy.edge1Protocol }}</span>
          <span class="docs-flow__edge-detail">{{ sshCopy.edge1Detail }}</span>
        </div>
      </div>

      <div class="docs-flow__boundary docs-flow__boundary--ssh">
        <div class="docs-flow__boundary-bar">
          <span class="docs-flow__boundary-title">
            <span class="docs-flow__beacon" aria-hidden="true"></span>
            {{ sshCopy.chainTitle }}
          </span>
          <span class="docs-flow__boundary-pill">
            <DocsIcon name="lock" :size="12" />
            {{ sshCopy.chainBadge }}
          </span>
        </div>

        <div class="docs-flow__node docs-flow__node--violet docs-flow__node--step-2">
          <div class="docs-flow__visual docs-flow__visual--icon docs-flow__visual--icon-violet">
            <DocsIcon name="server" :size="19" />
          </div>
          <div class="docs-flow__body">
            <div class="docs-flow__title">{{ sshCopy.hop1Title }}</div>
            <div class="docs-flow__subtitle">{{ sshCopy.hop1Subtitle }}</div>
          </div>
          <div class="docs-flow__aside">
            <span class="docs-flow__chip docs-flow__chip--violet">{{ sshCopy.hop1Badge }}</span>
          </div>
        </div>

        <div class="docs-flow__edge docs-flow__edge--step-2" aria-hidden="true">
          <div class="docs-flow__rail">
            <svg viewBox="0 0 24 42" fill="none">
              <line x1="12" y1="0" x2="12" y2="36" class="docs-flow__wire-bg" />
              <line x1="12" y1="0" x2="12" y2="36" class="docs-flow__wire-dash" />
              <path d="M7.5 31.5L12 37L16.5 31.5" class="docs-flow__arrow" />
            </svg>
            <span class="docs-flow__pulse"></span>
          </div>
          <div class="docs-flow__edge-meta">
            <span class="docs-flow__protocol">{{ sshCopy.edge2Protocol }}</span>
            <span class="docs-flow__edge-detail">{{ sshCopy.edge2Detail }}</span>
          </div>
        </div>

        <div class="docs-flow__node docs-flow__node--amber docs-flow__node--optional docs-flow__node--step-3">
          <div class="docs-flow__visual docs-flow__visual--icon docs-flow__visual--icon-amber">
            <DocsIcon name="layers" :size="19" />
          </div>
          <div class="docs-flow__body">
            <div class="docs-flow__title">{{ sshCopy.hop2Title }}</div>
            <div class="docs-flow__subtitle">{{ sshCopy.hop2Subtitle }}</div>
          </div>
          <div class="docs-flow__aside">
            <span class="docs-flow__chip docs-flow__chip--amber">{{ sshCopy.hop2Badge }}</span>
          </div>
        </div>
      </div>

      <div class="docs-flow__edge docs-flow__edge--step-3 docs-flow__edge--outbound" aria-hidden="true">
        <div class="docs-flow__rail">
          <svg viewBox="0 0 24 44" fill="none">
            <line x1="12" y1="0" x2="12" y2="38" class="docs-flow__wire-bg" />
            <line x1="12" y1="0" x2="12" y2="38" class="docs-flow__wire-dash docs-flow__wire-dash--emerald" />
            <path d="M7.5 33.5L12 39L16.5 33.5" class="docs-flow__arrow docs-flow__arrow--emerald" />
          </svg>
          <span class="docs-flow__pulse docs-flow__pulse--emerald"></span>
        </div>
        <div class="docs-flow__edge-meta">
          <span class="docs-flow__protocol docs-flow__protocol--emerald">{{ sshCopy.edge3Protocol }}</span>
          <span class="docs-flow__edge-detail">{{ sshCopy.edge3Detail }}</span>
        </div>
      </div>

      <div class="docs-flow__node docs-flow__node--emerald docs-flow__node--target docs-flow__node--step-4">
        <div class="docs-flow__visual docs-flow__visual--icon docs-flow__visual--icon-emerald">
          <DocsIcon name="database" :size="19" />
        </div>
        <div class="docs-flow__body">
          <div class="docs-flow__title">{{ sshCopy.dbTitle }}</div>
          <div class="docs-flow__subtitle">{{ sshCopy.dbSubtitle }}</div>
        </div>
        <div class="docs-flow__aside">
          <DocsIconStack
            :items="databaseLogos"
            :max="4"
            :extra-count="64"
            size="sm"
            :aria-label="sshCopy.dbStackLabel"
          />
        </div>
      </div>
    </div>

    <figcaption class="docs-flow__caption">{{ sshCopy.caption }}</figcaption>
  </figure>
</template>
