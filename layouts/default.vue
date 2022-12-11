<template>
  <div class="flex min-h-screen flex-col">
    <MainHeader />
    <Breadcrumb />
    <div class="flex-grow"><slot /></div>
    <MainFooter />
  </div>
</template>
