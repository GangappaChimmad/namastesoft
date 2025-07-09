<script lang="ts">
  import { Zap, TrendingUp, Bot, Clock, Users, CheckCircle, MessageCircle, ArrowRight } from 'lucide-svelte';
  import Button from '@/components/ui/button.svelte';
  import { generateWhatsAppLink } from '@/lib/utils.js';
  import { config } from '@/lib/config.js';
  import { toast } from '@/lib/toastStore.js';

  const features = [
    {
      icon: Bot,
      title: 'Auto Responses',
      description: 'Intelligent automated responses to customer inquiries 24/7',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Lead Generation',
      description: 'Capture and qualify leads automatically through WhatsApp',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock customer support without human intervention',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Broadcast Messages',
      description: 'Send targeted messages to multiple customers simultaneously',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const benefits = [
    'Reduce response time by 90%',
    'Increase customer satisfaction',
    'Generate more qualified leads',
    'Save operational costs',
    'Scale customer support effortlessly',
    'Improve conversion rates'
  ];

  const openWhatsApp = () => {
    const phone = config.whatsapp.supportNumber;
    const message = 'Hi! I want to know more about WhatsApp automation solutions.';
    const whatsappUrl = generateWhatsAppLink(phone, message);
    
    toast({
      title: 'Redirecting to WhatsApp...',
      description: 'You will be redirected to WhatsApp to start the conversation.',
      type: 'info'
    });
    
    window.open(whatsappUrl, '_blank');
  };
</script>

<section id="whatsapp-automation" class="py-24 bg-gradient-to-br from-green-50 to-emerald-50/30 relative overflow-hidden">
  <div class="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-green-200/20 to-emerald-300/20 rounded-full blur-3xl"></div>
  <div class="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-teal-200/20 to-green-300/20 rounded-full blur-3xl"></div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="text-center mb-20 animate-fade-in">
      <div class="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md rounded-full px-6 py-3 border border-white/40 mb-6">
        <MessageCircle class="h-4 w-4 text-green-600" />
        <span class="text-sm font-medium text-gray-700">WhatsApp Automation</span>
      </div>

      <h2 class="text-5xl font-bold text-gray-900 mb-6">
        Transform Your Business with <span class="text-gradient">WhatsApp Automation</span>
      </h2>
      <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
        Automate customer interactions, generate leads, and provide 24/7 support through
        intelligent WhatsApp automation solutions tailored for your business.
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-16 items-center mb-20">
      <div class="space-y-8 animate-slide-up">
        <div class="glass-effect rounded-3xl p-8 shadow-xl">
          <div class="flex items-center space-x-4 mb-6">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
              <Zap class="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900">Boost Your Business</h3>
              <p class="text-gray-600">With intelligent automation</p>
            </div>
          </div>

          <div class="space-y-4">
            {#each benefits as benefit}
              <div class="flex items-center space-x-3">
                <CheckCircle class="h-5 w-5 text-green-600 flex-shrink-0" />
                <span class="text-gray-700 font-medium">{benefit}</span>
              </div>
            {/each}
          </div>
        </div>

        <div class="flex justify-center">
          <Button
            on:click={openWhatsApp}
            size="lg"
            class="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-10 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <MessageCircle class="mr-3 h-6 w-6" />
            Get WhatsApp Automation
            <ArrowRight class="ml-3 h-5 w-5" />
          </Button>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6 animate-scale-in">
        {#each features as feature}
          <div class="group card-hover border-0 shadow-xl bg-white/80 backdrop-blur-md overflow-hidden">
            <div class="p-8 text-center relative">
              <div class={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              <div class="relative z-10">
                <div class={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <svelte:component this={feature.icon} class="h-8 w-8 text-white" />
                </div>

                <h4 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                  {feature.title}
                </h4>

                <p class="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <div class="glass-effect rounded-3xl p-12 text-center animate-fade-in">
      <div class="max-w-4xl mx-auto">
        <div class="flex items-center justify-center space-x-4 mb-8">
          <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
            <TrendingUp class="h-8 w-8 text-white" />
          </div>
          <div>
            <h3 class="text-3xl font-bold text-gray-900">Success Story</h3>
            <p class="text-gray-600">Real results from our WhatsApp automation</p>
          </div>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mb-8">
          <div class="text-center">
            <div class="text-4xl font-bold text-green-600 mb-2">300%</div>
            <div class="text-gray-600">Increase in Lead Generation</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-blue-600 mb-2">90%</div>
            <div class="text-gray-600">Faster Response Time</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-purple-600 mb-2">50%</div>
            <div class="text-gray-600">Cost Reduction</div>
          </div>
        </div>

        <p class="text-lg text-gray-600 italic">
          "{config.company.name}'s WhatsApp automation transformed our customer service. We now handle 300% more inquiries
          with faster response times and happier customers."
        </p>
        <p class="text-sm text-gray-500 mt-2">- Happy Client</p>
      </div>
    </div>
  </div>
</section>
