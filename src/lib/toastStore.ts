import { writable } from 'svelte/store';

export interface Toast {
  id: number;
  title: string;
  description?: string;
  type?: 'default' | 'success' | 'error' | 'warning' | 'info';
  duration?: number;
}

export interface ToastOptions {
  title: string;
  description?: string;
  type?: 'default' | 'success' | 'error' | 'warning' | 'info';
  duration?: number;
}

export const toasts = writable<Toast[]>([]);

export function toast(options: ToastOptions): void {
  const id = Date.now();
  const duration = options.duration ?? 5000;
  const newToast: Toast = {
    id,
    title: options.title,
    description: options.description,
    type: options.type ?? 'default',
    duration
  };
  
  toasts.update(t => [...t, newToast]);
  
  if (duration > 0) {
    setTimeout(() => dismiss(id), duration);
  }
}

export function dismiss(id: number): void {
  toasts.update(t => t.filter(toast => toast.id !== id));
}

export function clearAll(): void {
  toasts.set([]);
}
