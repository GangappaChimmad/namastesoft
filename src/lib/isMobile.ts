import { writable } from 'svelte/store';

function detectMobile() {
  const { subscribe, set } = writable(false);

  const update = () => set(window.innerWidth < 768);

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', update);
    update();
  }

  return { subscribe };
}

export const isMobile = detectMobile();
