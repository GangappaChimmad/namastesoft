<script lang="ts">
  export let className: string = '';
  export let variant: 'default' | 'outlined' | 'elevated' = 'default';
  
  const variants = {
    default: 'bg-card text-card-foreground rounded-lg border shadow-sm',
    outlined: 'bg-card text-card-foreground rounded-lg border-2 border-border',
    elevated: 'bg-card text-card-foreground rounded-lg border shadow-lg'
  };
  
  $: classes = `${variants[variant]} ${className}`;
</script>

<div class={classes}>
  <slot />
</div>
