<template>
  <main>
    <div class="px-4 py-6 sm:px-0">
      <div class="py-6 sm:px-6 lg:px-8">
        <div class="container relative mx-auto">
          <div
            class="grid grid-cols-2 items-center gap-y-4 gap-x-4 lg:gap-x-24"
          >
            <slot
              name="image"
              imageClass="order-first col-span-2 h-80 justify-self-center md:order-none md:col-span-1 md:justify-self-end lg:h-96"
            />

            <div
              class="prose col-span-2 mt-8 max-w-none px-8 md:order-first md:col-span-1 md:max-w-none md:px-0"
            >
              <slot name="intro" />
            </div>
            <div class="col-span-2">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
