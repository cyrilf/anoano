<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import * as Swetrix from "swetrix";

if (import.meta.client && !import.meta.dev) {
  const { SWETRIX_PID } = useAppConfig();
  Swetrix.init(SWETRIX_PID, { respectDNT: false });
  Swetrix.trackViews();
}
</script>
