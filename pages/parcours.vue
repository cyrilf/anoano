<template>
  <div>
    <div class="bg-zinc-100">
      <div class="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">
          Le parcours
        </h1>
      </div>
    </div>
    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <div class="mx-auto py-12 divide-y">
            <h2 class="text-2xl font-bold">
              Étape 1 : <span class="text-slate-400">Choisis ton anneau</span>
            </h2>
            <StepsRingChooser />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
