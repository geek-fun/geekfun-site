<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

type NotFoundLocale = 'en' | 'zh' | 'pt-BR' | 'ja' | 'ko' | 'es'

type NotFoundCopy = {
  pageTitle: string
  heading: string
  intro: string
  reasonsTitle: string
  reasons: string[]
  actionsTitle: string
  homePrefix: string
  homeLink: string
  downloadPrefix: string
  downloadLink: string
  blogPrefix: string
  blogLink: string
  docsPrefix: string
  docsLink: string
  dockitTitle: string
  dockitIntroBefore: string
  dockitIntroAfter: string
  dockitDocs: string
  dockitDownload: string
  helpTitle: string
  helpBeforeGithub: string
  helpBetween: string
  helpAfterEmail: string
  prefix: string
}

const copyByLocale: Record<NotFoundLocale, NotFoundCopy> = {
  en: {
    pageTitle: 'Page Not Found | GEEKFUN',
    heading: 'Page Not Found',
    intro: "Sorry, the page you're looking for doesn't exist or has been moved.",
    reasonsTitle: 'What happened?',
    reasons: [
      'The URL may have been mistyped',
      'The page may have been moved or deleted',
      'You may have followed an old link',
    ],
    actionsTitle: 'What can you do?',
    homePrefix: 'Return to ',
    homeLink: 'Homepage',
    downloadPrefix: 'Browse ',
    downloadLink: 'Downloads',
    blogPrefix: 'Read our ',
    blogLink: 'Blog',
    docsPrefix: 'Check ',
    docsLink: 'Documentation',
    dockitTitle: 'Looking for DocKit?',
    dockitIntroBefore: 'If you came from ',
    dockitIntroAfter: ', that subdomain has been retired. DocKit is now available at:',
    dockitDocs: 'DocKit Documentation',
    dockitDownload: 'Download DocKit',
    helpTitle: 'Need Help?',
    helpBeforeGithub: 'Visit our ',
    helpBetween: ' or contact us at ',
    helpAfterEmail: '.',
    prefix: '',
  },
  zh: {
    pageTitle: '页面未找到 | 极客范',
    heading: '页面未找到',
    intro: '抱歉，您访问的页面不存在或已被移动。',
    reasonsTitle: '可能的原因',
    reasons: ['网址拼写有误', '页面已被移动或删除', '您点击了过期的链接'],
    actionsTitle: '您可以做什么？',
    homePrefix: '返回',
    homeLink: '首页',
    downloadPrefix: '浏览',
    downloadLink: '下载页面',
    blogPrefix: '阅读',
    blogLink: '博客',
    docsPrefix: '查看',
    docsLink: '文档',
    dockitTitle: '正在寻找 DocKit？',
    dockitIntroBefore: '如果您是从 ',
    dockitIntroAfter: ' 跳转过来的，该子域名已停用。DocKit 现已迁移至：',
    dockitDocs: 'DocKit 文档',
    dockitDownload: '下载 DocKit',
    helpTitle: '需要帮助？',
    helpBeforeGithub: '欢迎访问我们的 ',
    helpBetween: '，或发送邮件至 ',
    helpAfterEmail: '。',
    prefix: '/zh',
  },
  'pt-BR': {
    pageTitle: 'Página não encontrada | GEEKFUN',
    heading: 'Página não encontrada',
    intro: 'A página que você procura não existe ou foi movida.',
    reasonsTitle: 'O que pode ter acontecido',
    reasons: [
      'O endereço pode ter sido digitado incorretamente',
      'A página foi movida ou removida',
      'O link acessado pode estar desatualizado',
    ],
    actionsTitle: 'O que você pode fazer',
    homePrefix: 'Voltar para o ',
    homeLink: 'Início',
    downloadPrefix: 'Abrir ',
    downloadLink: 'Downloads',
    blogPrefix: 'Ler o ',
    blogLink: 'Blog',
    docsPrefix: 'Consultar a ',
    docsLink: 'Documentação',
    dockitTitle: 'Procurando o DocKit?',
    dockitIntroBefore: 'Se você veio de ',
    dockitIntroAfter: ', esse subdomínio foi desativado. O DocKit agora está disponível em:',
    dockitDocs: 'Documentação do DocKit',
    dockitDownload: 'Baixar DocKit',
    helpTitle: 'Precisa de ajuda?',
    helpBeforeGithub: 'Visite nosso ',
    helpBetween: ' ou escreva para ',
    helpAfterEmail: '.',
    prefix: '/pt-BR',
  },
  ja: {
    pageTitle: 'ページが見つかりません | GEEKFUN',
    heading: 'ページが見つかりません',
    intro: 'お探しのページは存在しないか、移動された可能性があります。',
    reasonsTitle: '考えられる原因',
    reasons: [
      'URL の入力に誤りがある',
      'ページが移動または削除された',
      '古いリンクからアクセスした',
    ],
    actionsTitle: '次のページをご覧ください',
    homePrefix: '',
    homeLink: 'ホームに戻る',
    downloadPrefix: '',
    downloadLink: 'ダウンロード一覧を見る',
    blogPrefix: '',
    blogLink: 'ブログを読む',
    docsPrefix: '',
    docsLink: 'ドキュメントを見る',
    dockitTitle: 'DocKit をお探しですか？',
    dockitIntroBefore: '',
    dockitIntroAfter: ' は廃止されました。DocKit の最新ページはこちらです：',
    dockitDocs: 'DocKit ドキュメント',
    dockitDownload: 'DocKit をダウンロード',
    helpTitle: 'お困りですか？',
    helpBeforeGithub: '',
    helpBetween: ' または ',
    helpAfterEmail: ' までお問い合わせください。',
    prefix: '/ja',
  },
  ko: {
    pageTitle: '페이지를 찾을 수 없습니다 | GEEKFUN',
    heading: '페이지를 찾을 수 없습니다',
    intro: '요청하신 페이지가 존재하지 않거나 이동되었습니다.',
    reasonsTitle: '가능한 원인',
    reasons: [
      'URL을 잘못 입력한 경우',
      '페이지가 이동되었거나 삭제된 경우',
      '오래된 링크를 통해 접속한 경우',
    ],
    actionsTitle: '다음 페이지로 이동해 보세요',
    homePrefix: '',
    homeLink: '홈으로 돌아가기',
    downloadPrefix: '',
    downloadLink: '다운로드 페이지 보기',
    blogPrefix: '',
    blogLink: '블로그 읽기',
    docsPrefix: '',
    docsLink: '문서 보기',
    dockitTitle: 'DocKit을 찾고 계신가요?',
    dockitIntroBefore: '',
    dockitIntroAfter: ' 서브도메인은 종료되었습니다. DocKit은 아래 페이지에서 확인할 수 있습니다:',
    dockitDocs: 'DocKit 문서',
    dockitDownload: 'DocKit 다운로드',
    helpTitle: '도움이 필요하신가요?',
    helpBeforeGithub: '',
    helpBetween: ' 또는 ',
    helpAfterEmail: '으로 문의해 주세요.',
    prefix: '/ko',
  },
  es: {
    pageTitle: 'Página no encontrada | GEEKFUN',
    heading: 'Página no encontrada',
    intro: 'La página que buscas no existe o se ha movido.',
    reasonsTitle: 'Qué puede haber ocurrido',
    reasons: [
      'La URL puede estar mal escrita',
      'La página se ha movido o eliminado',
      'El enlace al que accediste puede estar desactualizado',
    ],
    actionsTitle: 'Qué puedes hacer',
    homePrefix: 'Volver al ',
    homeLink: 'Inicio',
    downloadPrefix: 'Ir a ',
    downloadLink: 'Descargas',
    blogPrefix: 'Leer el ',
    blogLink: 'Blog',
    docsPrefix: 'Consultar la ',
    docsLink: 'Documentación',
    dockitTitle: '¿Buscas DocKit?',
    dockitIntroBefore: 'Si llegaste desde ',
    dockitIntroAfter: ', ese subdominio fue retirado. DocKit ahora está disponible en:',
    dockitDocs: 'Documentación de DocKit',
    dockitDownload: 'Descargar DocKit',
    helpTitle: '¿Necesitas ayuda?',
    helpBeforeGithub: 'Visita nuestro ',
    helpBetween: ' o escríbenos a ',
    helpAfterEmail: '.',
    prefix: '/es',
  },
}

const detectLocaleFromPath = (pathname: string): NotFoundLocale => {
  const match = pathname.match(/^\/(zh|pt-BR|ja|ko|es)(?:\/|$)/)
  return (match?.[1] as NotFoundLocale) ?? 'en'
}

// The 404 page is served by the static host for any missing path. VitePress
// builds it once (English locale), so onMounted detects the requested path
// prefix and swaps to the matching locale.
const locale = ref<NotFoundLocale>('en')
const copy = computed(() => copyByLocale[locale.value])

onMounted(() => {
  try {
    const detected = detectLocaleFromPath(window.location.pathname)
    locale.value = detected
    if (detected !== 'en') {
      document.documentElement.lang = detected
      document.title = copyByLocale[detected].pageTitle
    }
  } catch {
    /* ignore, keep the English default */
  }
})
</script>

<template>
  <div>
    <h1>{{ copy.heading }}</h1>

    <p>{{ copy.intro }}</p>

    <h2>{{ copy.reasonsTitle }}</h2>
    <ul>
      <li v-for="reason in copy.reasons" :key="reason">{{ reason }}</li>
    </ul>

    <h2>{{ copy.actionsTitle }}</h2>
    <ul>
      <li><strong>{{ copy.homePrefix }}<a :href="`${copy.prefix}/`">{{ copy.homeLink }}</a></strong></li>
      <li><strong>{{ copy.downloadPrefix }}<a :href="`${copy.prefix}/download`">{{ copy.downloadLink }}</a></strong></li>
      <li><strong>{{ copy.blogPrefix }}<a :href="`${copy.prefix}/blog`">{{ copy.blogLink }}</a></strong></li>
      <li><strong>{{ copy.docsPrefix }}<a :href="`${copy.prefix}/docs`">{{ copy.docsLink }}</a></strong></li>
    </ul>

    <h2>{{ copy.dockitTitle }}</h2>
    <p>
      {{ copy.dockitIntroBefore }}<code>dockit.geekfun.club</code>{{ copy.dockitIntroAfter }}
    </p>
    <ul>
      <li><strong><a :href="`${copy.prefix}/docs/dockit/`">{{ copy.dockitDocs }}</a></strong></li>
      <li><strong><a :href="`${copy.prefix}/download`">{{ copy.dockitDownload }}</a></strong></li>
    </ul>

    <h2>{{ copy.helpTitle }}</h2>
    <p>
      {{ copy.helpBeforeGithub }}<a href="https://github.com/geek-fun">GitHub</a>{{ copy.helpBetween
      }}<a href="mailto:support@geekfun.club">support@geekfun.club</a>{{ copy.helpAfterEmail }}
    </p>
  </div>
</template>
