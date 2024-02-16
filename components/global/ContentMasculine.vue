<template>
  <Tooltip
    ><template #trigger="{ defaultTriggerClass, accentClass }">
      <span
        ><span :class="defaultTriggerClass">masculine</span
        ><span :class="accentClass" class="accent">*</span></span
      ></template
    >Le terme "masculine" est choisi en faveur de contraception testiculaire ou
    thermique car il est plus populaire. Mais nous ne voulons pas invisibiliser
    les problèmes de genre que celà implique. D'où la
    <span class="text-accent-500">petite étoile</span> et cette note.
    <Icon name="noto-sparkling-heart" />
  </Tooltip>
</template>
