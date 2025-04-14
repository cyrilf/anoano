<template>
  <div class="relative rounded-lg border-4 border-dashed border-zinc-200 p-8">
    <div
      class="bg-primary-100 absolute -top-8 left-1/2 -ml-8 flex items-center justify-center rounded-full border-4 border-zinc-200 p-3 md:ml-0 xl:-left-8"
    >
      <Icon name="noto-construction" size="2em" />
    </div>
    <slot></slot>
  </div>
</template>
