<template>
  <span
    class="relative after:absolute after:left-0 after:-bottom-1
           after:h-[2px] after:w-0
           after:bg-primary
           after:transition-all after:duration-300
           group-hover:after:w-full"
  >
    <slot />
  </span>
</template>
