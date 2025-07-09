<script lang="ts">
  import { Users, Award, Zap, CheckCircle, Target, Heart, Lightbulb, Shield, Trophy } from 'lucide-svelte';
  import Card from '@/components/ui/Card.svelte';
  import CardContent from '@/components/ui/CardContent.svelte';

  const stats = [
    { icon: Users, value: '5+', label: 'Projects Delivered', color: 'text-blue-600', bg: 'from-blue-500 to-cyan-500' },
    { icon: Award, value: '2', label: 'Years Experience', color: 'text-purple-600', bg: 'from-purple-500 to-pink-500' },
    { icon: Zap, value: '24/7', label: 'Support Available', color: 'text-orange-600', bg: 'from-orange-500 to-red-500' },
    { icon: CheckCircle, value: '100%', label: 'Client Satisfaction', color: 'text-green-600', bg: 'from-green-500 to-teal-500' },
  ];

  const whyChooseUs = [
    {
      icon: Trophy,
      title: 'Quality First',
      description: 'We deliver high-quality solutions that exceed expectations and stand the test of time.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality or functionality.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Dedicated Support',
      description: '24/7 technical support and maintenance to keep your solutions running smoothly.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'We focus on your business objectives and deliver solutions that drive real results.',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Robust, secure, and maintainable solutions you can depend on.',
      color: 'from-blue-500 to-cyan-500'
    }
  ];
</script>

<section id="about" class="py-24 bg-white relative overflow-hidden">
  <div class="absolute top-0 left-0 w-full h-full opacity-30">
    <div class="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-teal-200 to-cyan-200 rounded-full blur-3xl"></div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="grid lg:grid-cols-2 gap-20 items-center">
      <div class="space-y-10 animate-fade-in">
        <div>
          <div class="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-6 py-3 border border-blue-100 mb-6">
            <Users class="h-4 w-4 text-blue-600" />
            <span class="text-sm font-medium text-blue-700">About Namaste Soft</span>
          </div>

          <h2 class="text-5xl font-bold text-gray-900 mb-8">
            Your Trusted Technology 
            <span class="text-gradient block mt-2">Partner</span>
          </h2>

          <div class="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              At Namaste Soft, we are a dedicated team of technology enthusiasts with 2 years of hands-on experience 
              in delivering innovative digital solutions. We specialize in transforming ideas into powerful, 
              user-friendly applications that drive business success.
            </p>
            <p>
              Having successfully completed 5+ client projects, we understand the unique challenges faced by 
              startups and enterprises in their digital transformation journey. Our mission is to provide 
              cutting-edge technology solutions that help businesses thrive in the digital age.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-8">
          {#each stats as stat}
            <div class="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-white/40 hover:bg-white/80 transition-all duration-300 card-hover group">
              <div class={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.bg} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <svelte:component this={stat.icon} class="h-6 w-6 text-white" />
              </div>
              <div class={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div class="text-gray-600 text-sm font-medium">{stat.label}</div>
            </div>
          {/each}
        </div>
      </div>

      <div class="space-y-8 animate-scale-in">
        <div class="text-center lg:text-left mb-8">
          <h3 class="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
          <p class="text-lg text-gray-600">What sets us apart in the competitive tech landscape</p>
        </div>

        {#each whyChooseUs as item}
          <Card class="group card-hover border-0 shadow-lg bg-white/80 backdrop-blur-md overflow-hidden">
            <CardContent class="p-6 relative">
              <div class={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              <div class="relative z-10 flex items-start space-x-4">
                <div class={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <svelte:component this={item.icon} class="h-6 w-6 text-white" />
                </div>
                <div class="flex-1">
                  <h4 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p class="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        {/each}
      </div>
    </div>

    <div class="mt-24 grid md:grid-cols-2 gap-8">
      {#each values as value}
        <Card class="group card-hover border-0 shadow-xl bg-white/80 backdrop-blur-md overflow-hidden">
          <CardContent class="p-8 text-center relative">
            <div class={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            <div class="relative z-10">
              <div class={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <svelte:component this={value.icon} class="h-8 w-8 text-white" />
              </div>
              <h4 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {value.title}
              </h4>
              <p class="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          </CardContent>
        </Card>
      {/each}
    </div>
  </div>
</section>
