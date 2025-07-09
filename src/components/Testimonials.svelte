<script lang="ts">
  import { onMount } from 'svelte';
  import { Globe, Smartphone, Code, Brain, ArrowRight, Sparkles, MessageCircle, Headphones, Quote, Star, ArrowLeft, ArrowRight as ArrowRightIcon } from 'lucide-svelte';
  import Button from '@/components/ui/button.svelte';

  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Create stunning, responsive websites that captivate your audience and drive business growth with modern design and optimal performance.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile-First'],
      color: 'from-blue-500 to-cyan-500',
      delay: '0s'
    },
    {
      icon: Code,
      title: 'Web Applications',
      description: 'Build powerful, scalable web applications with cutting-edge technologies that streamline your business processes.',
      features: ['Custom Solutions', 'Cloud Integration', 'Real-time Features', 'Secure & Scalable'],
      color: 'from-purple-500 to-pink-500',
      delay: '0.1s'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Develop native and cross-platform mobile applications that provide seamless user experiences across iOS and Android.',
      features: ['Native Performance', 'Cross-Platform', 'User-Friendly UI', 'App Store Ready'],
      color: 'from-green-500 to-teal-500',
      delay: '0.2s'
    },
    {
      icon: Brain,
      title: 'AI & ML Solutions',
      description: 'Harness the power of artificial intelligence and machine learning to automate processes and gain valuable insights.',
      features: ['Custom AI Models', 'Data Analysis', 'Automation', 'Predictive Analytics'],
      color: 'from-orange-500 to-red-500',
      delay: '0.3s'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Automation',
      description: 'Streamline your business communication with intelligent WhatsApp automation solutions for customer support and engagement.',
      features: ['Auto Responses', 'Lead Generation', 'Customer Support', 'Broadcast Messages'],
      color: 'from-green-600 to-emerald-600',
      delay: '0.4s'
    },
    {
      icon: Headphones,
      title: 'Technical Support',
      description: 'Ongoing technical support and maintenance services to ensure your digital solutions run smoothly 24/7.',
      features: ['24/7 Support', 'Bug Fixes', 'Performance Optimization', 'Security Updates'],
      color: 'from-indigo-500 to-purple-600',
      delay: '0.5s'
    }
  ];
</script>

<section id="services" class="py-24 relative overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30"></div>
  <div class="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-purple-300/20 rounded-full blur-3xl"></div>
  <div class="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-teal-200/20 to-cyan-300/20 rounded-full blur-3xl"></div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="text-center mb-20 animate-fade-in">
      <div class="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md rounded-full px-6 py-3 border border-white/40 mb-6">
        <Sparkles class="h-4 w-4 text-blue-600" />
        <span class="text-sm font-medium text-gray-700">Our Services</span>
      </div>

      <h2 class="text-5xl font-bold text-gray-900 mb-6">
        Comprehensive <span class="text-gradient">Digital Solutions</span>
      </h2>
      <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
        From startups to enterprises, we deliver end-to-end technology solutions that drive growth
        and digital transformation for your business.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each services as service, index}
        <div
          class="group card-hover border-0 shadow-xl bg-white/70 backdrop-blur-md animate-slide-up overflow-hidden"
          style={`animation-delay: ${service.delay}`}
        >
          <div class="p-8 h-full flex flex-col relative">
            <div class={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

            <div class="relative z-10">
              <div class={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-xl`}>
                <svelte:component this={service.icon} class="h-8 w-8 text-white" />
              </div>

              <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>

              <p class="text-gray-600 mb-6 flex-grow leading-relaxed">
                {service.description}
              </p>

              <div class="space-y-3 mb-8">
                {#each service.features as feature}
                  <div class="flex items-center text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                    <div class={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3 shadow-sm`}></div>
                    <span class="font-medium">{feature}</span>
                  </div>
                {/each}
              </div>

              <Button
                variant="ghost"
                class="w-full justify-between group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300 font-semibold"
              >
                Learn More
                <ArrowRight class="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <div class="text-center mt-16 animate-fade-in">
      <div class="glass-effect rounded-3xl p-12 max-w-4xl mx-auto">
        <h3 class="text-3xl font-bold text-gray-900 mb-4">
          Ready to Start Your <span class="text-gradient">Digital Journey?</span>
        </h3>
        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's discuss your project requirements and create something amazing together.
        </p>
        <Button
          size="lg"
          class="flex items-center gap-2 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 hover:from-blue-700 hover:via-purple-700 hover:to-teal-700 text-white px-10 py-6 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1"
        >
          Get Free Consultation
          <ArrowRight class="ml-3 h-5 w-5" />
        </Button>
      </div>
    </div>
  </div>
</section>
