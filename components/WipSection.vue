<template>
  <div class="relative rounded-lg border-4 border-dashed border-zinc-200 p-8">
    <div
      class="absolute -top-8 left-1/2 -ml-8 flex items-center justify-center rounded-full border-4 border-zinc-200 bg-amber-100 p-3 md:ml-0 xl:-left-8"
    >
      <icon name="🚧️" class="-mt-1 mb-1 mr-1 !text-2xl" />
    </div>
    <slot />
  </div>
</template>
