<script lang="ts">
  export let className: string = '';
  
  $: classes = `p-6 ${className}`;
</script>

<div class={classes}>
  <slot />
</div>
