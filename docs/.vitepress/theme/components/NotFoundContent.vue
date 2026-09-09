<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {inBrowser} from 'vitepress';

// The 404 page is served by the static host for ANY missing path — English
// and /zh/ URLs alike. VitePress builds it once (English locale), so at
// runtime we detect the originally requested path and render the matching
// language. SSR always emits the English variant; onMounted swaps it.
const isZhPath = ref(false);

onMounted(() => {
    try {
        const path = window.location.pathname;
        isZhPath.value = path === '/zh' || path.startsWith('/zh/');
        if (isZhPath.value) {
            document.title = '页面未找到 | 极客范 | 可持续的开源软件社区';
        }
    } catch {
        /* ignore — keep the English default */
    }
});
</script>

<template>
    <div v-if="isZhPath">
        <h1>页面未找到</h1>

        <p>抱歉，您访问的页面不存在或已被移动。</p>

        <h2>可能的原因</h2>
        <ul>
            <li>网址拼写有误</li>
            <li>页面已被移动或删除</li>
            <li>您点击了过期的链接</li>
        </ul>

        <h2>您可以做什么？</h2>
        <ul>
            <li><strong>返回<a href="/zh/">首页</a></strong></li>
            <li><strong>浏览<a href="/zh/download">下载页面</a></strong></li>
            <li><strong>阅读<a href="/zh/blog">博客</a></strong></li>
            <li><strong>查看<a href="/zh/docs">文档</a></strong></li>
        </ul>

        <h2>正在寻找 DocKit？</h2>
        <p>
            如果您是从 <code>dockit.geekfun.club</code> 跳转过来的，该子域名已停用。DocKit 现已迁移至：
        </p>
        <ul>
            <li><strong><a href="/zh/docs/dockit/">DocKit 文档</a></strong></li>
            <li><strong><a href="/zh/download">下载 DocKit</a></strong></li>
        </ul>

        <h2>需要帮助？</h2>
        <p>
            欢迎访问我们的 <a href="https://github.com/geek-fun">GitHub</a>，
            或发送邮件至 <a href="mailto:support@geekfun.club">support@geekfun.club</a>。
        </p>
    </div>
    <div v-else>
        <h1>Page Not Found</h1>

        <p>Sorry, the page you're looking for doesn't exist or has been moved.</p>

        <h2>What happened?</h2>
        <ul>
            <li>The URL may have been mistyped</li>
            <li>The page may have been moved or deleted</li>
            <li>You may have followed an old link</li>
        </ul>

        <h2>What can you do?</h2>
        <ul>
            <li><strong>Return to <a href="/">Homepage</a></strong></li>
            <li><strong>Browse <a href="/download">Downloads</a></strong></li>
            <li><strong>Read our <a href="/blog">Blog</a></strong></li>
            <li><strong>Check <a href="/docs">Documentation</a></strong></li>
        </ul>

        <h2>Looking for DocKit?</h2>
        <p>
            If you came from <code>dockit.geekfun.club</code>, that subdomain has been retired.
            DocKit is now available at:
        </p>
        <ul>
            <li><strong><a href="/docs/dockit/">DocKit Documentation</a></strong></li>
            <li><strong><a href="/download">Download DocKit</a></strong></li>
        </ul>

        <h2>Need Help?</h2>
        <p>
            Visit our <a href="https://github.com/geek-fun">GitHub</a> or contact us at
            <a href="mailto:support@geekfun.club">support@geekfun.club</a>.
        </p>
    </div>
</template>
