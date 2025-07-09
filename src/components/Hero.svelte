<script lang="ts">
  import { ArrowRight, Code, Sparkles, Zap, Star, MessageCircle } from "lucide-svelte";
  import Button from "@/components/ui/button.svelte";

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/918150828833?text=Hi! I would like to discuss a project with Namaste Soft.",
      "_blank"
    );
  };

  const stats = [
    { number: "5+", label: "Projects Delivered", icon: Code },
    { number: "2", label: "Years Experience", icon: Zap },
    { number: "24/7", label: "Support", icon: Star }
  ];
</script>

<section id="home" class="pt-20 min-h-screen flex items-center relative overflow-hidden">
  <div class="absolute inset-0 gradient-mesh"></div>
  <div class="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-float"></div>
  <div class="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-teal-400/20 to-cyan-600/20 rounded-full blur-3xl animate-float" style="animation-delay:2s"></div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <!-- LEFT SIDE -->
      <div class="space-y-10 animate-fade-in">
        <div class="space-y-8">
          <div class="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
            <Star class="h-4 w-4 text-yellow-500" />
            <span class="text-sm font-medium text-gray-700">2 Years Experience • 5+ Successful Projects</span>
          </div>

          <h1 class="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Let's Build
            <span class="text-gradient block mt-2">Together</span>
          </h1>

          <p class="text-xl text-gray-600 leading-relaxed max-w-2xl">
            We specialize in creating cutting-edge digital solutions for startups and enterprises.
            From websites to AI-powered automation, we transform your ideas into reality.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-6">
          <Button on:click={scrollToContact} class="flex items-center gap-2 neon-border bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 hover:from-blue-700 hover:via-purple-700 hover:to-teal-700 text-white px-10 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 group">
            Get Free Consultation
            <ArrowRight class="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button on:click={openWhatsApp} variant="outline" size="lg" class="flex items-center justify-center glass-effect border-2 border-white/30 hover:border-green-400/50 px-10 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 hover:bg-green-50 backdrop-blur-md">
            <MessageCircle class="mr-3 h-5 w-5 text-green-600" />
            WhatsApp Us
          </Button>
        </div>

        <div class="flex items-center justify-between pt-12 max-w-2xl">
          {#each stats as stat}
            <div class="text-center group">
              <div class="flex items-center justify-center mb-2">
                <svelte:component this={stat.icon} class="h-6 w-6 text-blue-600 mr-2 group-hover:scale-110 transition-transform" />
                <div class="text-4xl font-bold text-gradient">{stat.number}</div>
              </div>
              <div class="text-gray-600 text-sm font-medium">{stat.label}</div>
            </div>
          {/each}
        </div>
      </div>

      <!-- RIGHT SIDE: OUR PROCESS -->
      <div class="relative lg:pl-10">
        <div class="relative z-10 glass-effect rounded-3xl shadow-2xl p-10 animate-fade-in space-y-8">
          <h2 class="text-2xl font-bold text-gray-800">Our Working Process</h2>
          <ol class="space-y-6">
            <li class="flex items-start space-x-4">
              <div class="w-10 h-10 bg-blue-100 text-blue-600 font-bold flex items-center justify-center rounded-full">1</div>
              <div>
                <h3 class="text-lg font-semibold">Requirement Gathering</h3>
                <p class="text-sm text-gray-600">We understand your goals and define clear deliverables.</p>
              </div>
            </li>
            <li class="flex items-start space-x-4">
              <div class="w-10 h-10 bg-purple-100 text-purple-600 font-bold flex items-center justify-center rounded-full">2</div>
              <div>
                <h3 class="text-lg font-semibold">Design & Development</h3>
                <p class="text-sm text-gray-600">Our creative team brings your ideas to life with modern UI/UX and scalable backend.</p>
              </div>
            </li>
            <li class="flex items-start space-x-4">
              <div class="w-10 h-10 bg-green-100 text-green-600 font-bold flex items-center justify-center rounded-full">3</div>
              <div>
                <h3 class="text-lg font-semibold">Testing & Delivery</h3>
                <p class="text-sm text-gray-600">We rigorously test for bugs, optimize performance, and deliver the final product on time.</p>
              </div>
            </li>
          </ol>
        </div>

        <div class="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl opacity-20 blur-xl animate-bounce-slow"></div>
        <div class="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl opacity-20 blur-xl animate-bounce-slow" style="animation-delay:1s"></div>
      </div>
    </div>
  </div>
</section>
