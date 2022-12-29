<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import * as Swetrix from "swetrix";

if (process.client && !process.dev) {
  const { SWETRIX_PID } = useAppConfig();
  Swetrix.init(SWETRIX_PID, { respectDNT: false });
  Swetrix.trackViews();
}
</script>
