<script setup>
const availablePlatform = [
  {
    platform: 'macOS',
    binaries: [{
      name: 'Universal.dmg',
      tail: 'universal.dmg'
    }]
  },
  {
    platform: 'Windows',
    binaries: [{
      name: 'x86_64.setup.exe',
      tail: 'x64-setup.exe'
    }]
  },
  {
    platform: 'Linux',
    binaries: [
      {
        name: 'x86_64.deb',
        tail: 'amd64.deb'
      },
      {
        name: 'x86_64.AppImage',
        tail: 'amd64.AppImage'
      }
    ]
  }
];

const getLatestLinks = async () => {
  const data = await fetch('https://api.github.com/repos/geek-fun/dockit/releases/latest')
    .then((res) => res.json())
    .catch((err) => console.error(err));
  return data.assets.map((item) => ({
    name: item.name,
    url: item.browser_download_url
  }));
}
  const downloadBinary = async (binaryTail) => {

    const links = await getLatestLinks();
    const link = links.find((item) => item.name.endsWith(binaryTail));
    if (link) {
      window.open(link.url, '_blank').focus();
    } else {
      console.error('downloadBinary', 'no link found')
    }
    console.log('downloadBinary', { links })
  }
</script>
<template>
  <div class="download-box">
    <div class="card" v-for="platform in availablePlatform" :key="platform.platform">
      <div class="card-body">
        <h5 class="card-title">{{ platform.platform }}</h5>
        <button class="downloadButton" @click="downloadBinary(binary.tail)"
                v-for="binary in platform.binaries" :key="binary.name"><span>{{ binary.name }}</span>
          <span class="download-arrow">
<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path
  d="M12 12V19M12 19L9.75 16.6667M12 19L14.25 16.6667M6.6 17.8333C4.61178 17.8333 3 16.1917 3 14.1667C3 12.498 4.09438 11.0897 5.59198 10.6457C5.65562 10.6268 5.7 10.5675 5.7 10.5C5.7 7.46243 8.11766 5 11.1 5C14.0823 5 16.5 7.46243 16.5 10.5C16.5 10.5582 16.5536 10.6014 16.6094 10.5887C16.8638 10.5306 17.1284 10.5 17.4 10.5C19.3882 10.5 21 12.1416 21 14.1667C21 16.1917 19.3882 17.8333 17.4 17.8333"
  stroke="#464455" stroke-linecap="round" stroke-linejoin="round"/></svg>

        </span>
        </button>
      </div>
    </div>
  </div>
  <p>
    Download the the latest of DocKit for your platform, or you can find the historic/cross-platforms version in
    <a href="https://github.com/geek-fun/dockit/releases">github release</a>
  </p>
</template>
<style scoped lang="scss">
.download-box {
  display: flex;
  //justify-content: center;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}

.card {
  margin: 10px;
  width: 200px;
  height: 100%;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 1px 1px rgba(236, 240, 241, 0.5);
}

.downloadButton {
  display: flex; /* Use Flexbox */
  align-items: center; /* Vertically center items */
  justify-content: center;
  padding: 10px;
  margin: 10px auto;
  font-weight: bold;
  text-align: center;
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-sidebar-bg-color);
  border-radius: 10px; /* Rounded corners */
  cursor: pointer;
  width: 99%;
  transition: background-color 0.3s;

  &:hover {
    border: 1px solid var(--vp-c-primary);
  }

  .download-arrow {
    padding-left: 10px;
  }
}

</style>
