<script lang="ts">
  import { onMount } from 'svelte';
  import { toasts, dismiss, type Toast } from '@/lib/toastStore.js';
  import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from 'lucide-svelte';

  const icons = {
    default: Info,
    success: CheckCircle,
    error: AlertCircle,
    warning: AlertTriangle,
    info: Info
  };

  const variants = {
    default: 'bg-background border-border text-foreground',
    success: 'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-200',
    error: 'bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-800 dark:text-yellow-200',
    info: 'bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-200'
  };

  const iconColors = {
    default: 'text-gray-500',
    success: 'text-green-500',
    error: 'text-red-500',
    warning: 'text-yellow-500',
    info: 'text-blue-500'
  };

  let mounted = false;

  onMount(() => {
    mounted = true;
    return () => {
      mounted = false;
    };
  });

  function handleDismiss(id: number) {
    dismiss(id);
  }
</script>

{#if mounted}
  <div class="fixed top-4 right-4 z-50 flex flex-col gap-2 max-w-sm w-full">
    {#each $toasts as toast (toast.id)}
      <div
        class={`rounded-lg border p-4 shadow-lg transition-all duration-300 ease-in-out ${variants[toast.type || 'default']}`}
        role="alert"
      >
        <div class="flex items-start gap-3">
          <div class={`flex-shrink-0 ${iconColors[toast.type || 'default']}`}>
            <svelte:component this={icons[toast.type || 'default']} class="h-5 w-5" />
          </div>
          
          <div class="flex-1 min-w-0">
            <h4 class="text-sm font-semibold leading-tight">
              {toast.title}
            </h4>
            {#if toast.description}
              <p class="text-xs mt-1 opacity-90">
                {toast.description}
              </p>
            {/if}
          </div>
          
          <button
            on:click={() => handleDismiss(toast.id)}
            class="flex-shrink-0 p-1 rounded-md hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
            aria-label="Dismiss"
          >
            <X class="h-4 w-4" />
          </button>
        </div>
      </div>
    {/each}
  </div>
{/if}
