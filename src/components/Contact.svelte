<script lang="ts">
  import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe } from 'lucide-svelte';
  import Card from '@/components/ui/Card.svelte';
  import CardContent from '@/components/ui/CardContent.svelte';
  import Input from '@/components/ui/Input.svelte';
  import Textarea from '@/components/ui/Textarea.svelte';
  import Button from '@/components/ui/button.svelte';
  import { toast } from '@/lib/toastStore.js';
  import { config } from '@/lib/config.js';

  let formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  let isSubmitting = false;

  async function handleSubmit(event: Event) {
    event.preventDefault();
    
    if (isSubmitting) return;
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Validation Error',
        description: 'Please fill in all required fields.',
        type: 'error'
      });
      return;
    }

    isSubmitting = true;

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: 'Message Sent!',
        description: 'Thank you for your message. We\'ll get back to you soon!',
        type: 'success'
      });

      formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        type: 'error'
      });
    } finally {
      isSubmitting = false;
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'contact@namastesoft.com',
      color: 'text-blue-600',
      bg: 'from-blue-500 to-cyan-500',
      description: 'Get in touch via email'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 8150828833',
      color: 'text-green-600',
      bg: 'from-green-500 to-teal-500',
      description: 'Speak with our team'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Tech Hub, Innovation Street, Digital City',
      color: 'text-purple-600',
      bg: 'from-purple-500 to-pink-500',
      description: 'Come see us in person'
    }
  ];

  const workingHours = [
    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', time: 'Closed' }
  ];

  let currentYear = new Date().getFullYear();
</script>

<section id="contact" class="py-24 relative overflow-hidden">
  <!-- Fixed: Background layers should not block interactions -->
  <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 pointer-events-none"></div>
  <div class="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-300/30 rounded-full blur-3xl animate-float pointer-events-none"></div>
  <div class="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-teal-200/30 to-cyan-300/30 rounded-full blur-3xl animate-float pointer-events-none" style="animation-delay: 2s"></div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="text-center mb-20 animate-fade-in">
      <div class="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md rounded-full px-6 py-3 border border-white/40 mb-6">
        <MessageCircle class="h-4 w-4 text-blue-600" />
        <span class="text-sm font-medium text-gray-700">Let's Connect</span>
      </div>
      <h2 class="text-5xl font-bold text-gray-900 mb-6">
        Ready to Start Your <span class="text-gradient">Next Project?</span>
      </h2>
      <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
        Let's discuss how we can help bring your ideas to life with our expertise in software development,
        design, and digital innovation.
      </p>
    </div>

    <div class="grid lg:grid-cols-3 gap-8 mb-20">
      {#each contactInfo as info, index}
        <Card class="text-center card-hover border-0 shadow-xl bg-white/70 backdrop-blur-md animate-scale-in group overflow-hidden" style={`animation-delay: ${index * 0.1}s`}>
          <CardContent class="p-10 relative">
            <div class={`absolute inset-0 bg-gradient-to-br ${info.bg} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
            <div class="relative z-10">
              <div class={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.bg} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                <svelte:component this={info.icon} class="h-8 w-8 text-white" />
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
              <p class="text-sm text-gray-500 mb-3">{info.description}</p>
              <p class={`${info.color} font-semibold text-lg`}>{info.content}</p>
            </div>
          </CardContent>
        </Card>
      {/each}
    </div>

    <div class="grid lg:grid-cols-3 gap-12">
      <div class="lg:col-span-2">
        <Card class="shadow-2xl border-0 bg-white/80 backdrop-blur-md animate-fade-in overflow-hidden">
          <CardContent class="p-10">
            <div class="flex items-center space-x-3 mb-8">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <Send class="h-5 w-5 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900">Send us a Message</h3>
            </div>
            <form class="space-y-6" on:submit={handleSubmit}>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="block text-sm font-semibold text-gray-700">Full Name</label>
                  <Input 
                    placeholder="Your full name" 
                    class="h-12 w-full border-gray-200 focus:border-blue-400 focus:ring-blue-400 bg-white/50" 
                    bind:value={formData.name}
                    required
                  />
                </div>
                <div class="space-y-2">
                  <label class="block text-sm font-semibold text-gray-700">Email Address</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    class="h-12 w-full border-gray-200 focus:border-blue-400 focus:ring-blue-400 bg-white/50" 
                    bind:value={formData.email}
                    required
                  />
                </div>

                <div class="space-y-2">
                  <label class="block text-sm font-semibold text-gray-700">Phone Number</label>
                  <Input 
                    type="text" 
                    placeholder="(123) 456-7890" 
                    class="h-12 w-full border-gray-200 focus:border-blue-400 focus:ring-blue-400 bg-white/50" 
                    bind:value={formData.Phone}
                    required
                  />
                </div>

                <div class="space-y-2">
                    <label class="block text-sm font-semibold text-gray-700">Project Type</label>
                    <Input 
                    placeholder="Web Development, Mobile App, AI/ML, etc." 
                    class="h-12 w-full border-gray-200 focus:border-blue-400 focus:ring-blue-400 bg-white/50" 
                    bind:value={formData.subject}
                    />
                </div>
              </div>
             
              <div class="space-y-">
                <label class="block text-sm font-semibold text-gray-700">Project Details</label>
                <Textarea 
                  placeholder="Tell us about your project requirements, timeline, and any specific features you need..." 
                  class="min-h-[110px] w-full resize-none border-gray-200 focus:border-blue-400 focus:ring-blue-400 bg-white/50" 
                  bind:value={formData.message}
                  required
                />
              </div>
              <Button 
                type="submit" 
                class="flex justify-center items-center gap-2 w-full bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 hover:from-blue-700 hover:via-purple-700 hover:to-teal-700 text-white h-12 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                disabled={isSubmitting}
              >
                {#if isSubmitting}
                  Sending...
                {:else}
                  Send Message
                  <Send class="ml-3 h-5 w-5" />
                {/if}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div class="space-y-8">
        <!-- Quick Contact Card -->
        <Card class="shadow-xl border-0 bg-gradient-to-br from-blue-100/95 to-indigo-100/95 backdrop-blur-md animate-fade-in overflow-hidden group">
          <CardContent class="p-6">
            <div class="flex items-center space-x-4 mb-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg">
                <MessageCircle class="h-6 w-6 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-blue-900">Quick Contact</h3>
            </div>
            <p class="text-blue-800 mb-6 font-medium leading-relaxed">Need immediate assistance? Contact us directly through WhatsApp for faster response.</p>
            <Button 
              class="flex justify-center items-center gap-2 w-full bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white h-12 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 focus:ring-4 focus:ring-blue-400/50"
              on:click={() => {
                const whatsappUrl = `https://wa.me/918150828833?text=${encodeURIComponent('Hi! I need assistance with my project.')}`;
                window.open(whatsappUrl, '_blank');
                toast({
                  title: 'Redirecting to WhatsApp',
                  description: 'Opening WhatsApp for instant support.',
                  type: 'info'
                });
              }}
            >
              <MessageCircle class="mr-3 h-6 w-6" />
              Chat on WhatsApp
            </Button>
          </CardContent>
        </Card>

        <!-- Social Links Card -->
        <Card class="shadow-xl border-0 bg-blue-50/95 backdrop-blur-md animate-fade-in overflow-hidden group">
          <CardContent class="p-6">
            <div class="flex items-center space-x-4 mb-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg">
                <Globe class="h-6 w-6 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-blue-900">Follow Us</h3>
            </div>
            <p class="text-blue-800 mb-8 font-medium leading-relaxed">Stay updated with our latest projects and insights.</p>
            <div class="grid grid-cols-2 gap-4">
              <a 
                href="https://linkedin.com/company/namastesoft" 
                target="_blank" 
                class="bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white py-2 px-4 rounded-xl font-bold text-center transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl border-0 focus:ring-4 focus:ring-blue-400/50"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/namastesoft" 
                target="_blank" 
                class="bg-gradient-to-r from-blue-800 to-indigo-900 hover:from-blue-900 hover:to-indigo-950 text-white py-2 px-4 rounded-xl font-bold text-center transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl border-0 focus:ring-4 focus:ring-blue-400/50"
              >
                GitHub
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>

    <div class="text-center mt-20 pt-12 border-t border-gray-200">
      <div class="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
        <p class="text-gray-600 text-lg">
          <span class="text-gradient font-semibold ml-2">
            © {currentYear} Namaste Soft. All rights reserved.
          </span>
        </p>
      </div>
    </div>
  </div>
</section>
