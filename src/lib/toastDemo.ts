// Demo script for testing toast notifications
import { toast } from './toastStore.js';

export function showDemoToasts() {
  // Show different types of toasts with delays
  toast({
    title: 'Welcome!',
    description: 'This is an info toast notification.',
    type: 'info'
  });

  setTimeout(() => {
    toast({
      title: 'Success!',
      description: 'Your action was completed successfully.',
      type: 'success'
    });
  }, 1000);

  setTimeout(() => {
    toast({
      title: 'Warning',
      description: 'This is a warning message.',
      type: 'warning'
    });
  }, 2000);

  setTimeout(() => {
    toast({
      title: 'Error Example',
      description: 'This is how errors would be displayed.',
      type: 'error'
    });
  }, 3000);
}
