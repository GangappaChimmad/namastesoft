// Utility functions for the project
export const cn = (...classes: (string | undefined | null | boolean)[]) => {
  return classes.filter(Boolean).join(' ');
};

export const formatPhoneNumber = (phone: string) => {
  return phone.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
};

export const generateWhatsAppLink = (phone: string, message: string) => {
  const cleanPhone = phone.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
};

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
