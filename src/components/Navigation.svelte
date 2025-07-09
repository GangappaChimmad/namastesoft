<script lang="ts">
  import { onMount } from 'svelte';
  import { Menu, X, Sparkles } from 'lucide-svelte';
  import Button from '@/components/ui/button.svelte';

  let isOpen = false;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    isOpen = false;
  };

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    // { name: 'Projects', id: 'projects' },
    { name: 'WhatsApp', id: 'whatsapp-automation' },
    // { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' }
  ];
</script>

<nav class="fixed top-0 w-full glass-effect backdrop-blur-xl z-50 border-b border-white/20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-20">
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 flex items-center justify-center animate-glow">
          <Sparkles class="h-6 w-6 text-white" />
        </div>
        <h1 class="text-2xl font-bold text-gradient">Namaste Soft</h1>
      </div>

      <div class="hidden md:block">
        <div class="ml-10 flex items-baseline space-x-8">
          {#each menuItems as item}
            <button
              on:click={() => scrollToSection(item.id)}
              class="relative text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-semibold transition-all duration-300 group"
            >
              {item.name}
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
          {/each}
        </div>
      </div>

      <div class="md:hidden">
        <Button
          variant="ghost"
          size="sm"
          on:click={() => (isOpen = !isOpen)}
          class="hover:bg-white/20"
        >
          {#if isOpen}
            <X class="h-6 w-6" />
          {:else}
            <Menu class="h-6 w-6" />
          {/if}
        </Button>
      </div>
    </div>
  </div>

  {#if isOpen}
    <div class="md:hidden glass-effect border-t border-white/20">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {#each menuItems as item}
          <button
            on:click={() => scrollToSection(item.id)}
            class="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-white/20 text-sm font-semibold rounded-lg transition-all duration-300"
          >
            {item.name}
          </button>
        {/each}
      </div>
    </div>
  {/if}
</nav>

<style>
  nav {
    transition: background 0.3s ease;
  }
</style>
