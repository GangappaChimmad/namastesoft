<script lang="ts">
  import {
    ExternalLink,
    Github,
    ArrowRight,
    Code2,
    Smartphone,
    Globe,
    MessageCircle
  } from "lucide-svelte";
  import Card from "@/components/ui/Card.svelte";
  import CardContent from "@/components/ui/CardContent.svelte";
  import Button from "@/components/ui/button.svelte";

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Application",
      description:
        "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      icon: Globe,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Task Management App",
      category: "Mobile Application",
      description:
        "Cross-platform mobile app for team collaboration with real-time updates and push notifications.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      technologies: ["React Native", "Firebase", "Redux"],
      icon: Smartphone,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "AI Chat Assistant",
      category: "AI/ML Solution",
      description:
        "Intelligent chatbot with natural language processing for customer support automation.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      technologies: ["Python", "TensorFlow", "OpenAI", "Flask"],
      icon: MessageCircle,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 4,
      title: "Business Website",
      category: "Website Development",
      description:
        "Modern responsive website with SEO optimization and content management system.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      icon: Code2,
      color: "from-green-500 to-teal-500"
    }
  ];
</script>

<section id="projects" class="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
  <div class="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-blue-300/20 rounded-full blur-3xl"></div>
  <div class="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-teal-200/20 to-green-300/20 rounded-full blur-3xl"></div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="text-center mb-20 animate-fade-in">
      <div class="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md rounded-full px-6 py-3 border border-white/40 mb-6">
        <Code2 class="h-4 w-4 text-blue-600" />
        <span class="text-sm font-medium text-gray-700">Featured Projects</span>
      </div>

      <h2 class="text-5xl font-bold text-gray-900 mb-6">
        Our Recent <span class="text-gradient">Success Stories</span>
      </h2>
      <p class="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
        Discover how we've helped businesses transform their digital presence and achieve their goals through innovative technology solutions.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-12">
      {#each projects as project, index}
        <Card class="group card-hover border-0 shadow-xl bg-white/80 backdrop-blur-md overflow-hidden animate-scale-in" style={`animation-delay: ${index * 0.1}s`}>
          <div class="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute top-4 left-4">
              <div class={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center shadow-lg`}>
                <svelte:component this={project.icon} class="h-6 w-6 text-white" />
              </div>
            </div>
            <div class="absolute top-4 right-4">
              <span class="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                {project.category}
              </span>
            </div>
          </div>

          <CardContent class="p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
              {project.title}
            </h3>

            <p class="text-gray-600 mb-6 leading-relaxed">
              {project.description}
            </p>

            <div class="flex flex-wrap gap-2 mb-6">
              {#each project.technologies as tech}
                <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                  {tech}
                </span>
              {/each}
            </div>

            <div class="flex space-x-4">
              <Button variant="outline" size="sm" class="flex-1 group-hover:border-blue-400 group-hover:text-blue-600 transition-colors duration-300">
                <ExternalLink class="h-4 w-4 mr-2" />
                View Project
              </Button>
              <Button variant="ghost" size="sm" class="flex-1 hover:bg-gray-100 transition-colors duration-300">
                <Github class="h-4 w-4 mr-2" />
                Source Code
              </Button>
            </div>
          </CardContent>
        </Card>
      {/each}
    </div>

    <div class="text-center mt-16 animate-fade-in">
      <Button
        size="lg"
        class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
      >
        View All Projects
        <ArrowRight class="ml-3 h-5 w-5" />
      </Button>
    </div>
  </div>
</section>
