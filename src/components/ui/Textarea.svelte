<script lang="ts">
  export let placeholder: string = '';
  export let value: string = '';
  export let disabled: boolean = false;
  export let required: boolean = false;
  export let rows: number = 4;
  export let className: string = '';
  
  $: classes = `flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`;
</script>

<textarea
  {placeholder}
  {disabled}
  {required}
  {rows}
  bind:value
  class={classes}
  {...$$restProps}
  on:input
  on:change
  on:focus
  on:blur
></textarea>
