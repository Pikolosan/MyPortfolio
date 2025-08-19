import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { 
  Github, 
  ExternalLink, 
  Mail, 
  Phone, 
  Linkedin, 
  Twitter, 
  Globe,
  Code,
  Cpu
} from "lucide-react";

type ProjectCategory = "all" | "fullstack" | "ai-ml" | "frontend" | "css-animations" | "open-source";

interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  badge: string;
  badgeColor: string;
}

const projects: Project[] = [
  {
    id: "stayease",
    title: "StayEase",
    description: "A full-featured Airbnb clone with booking system, user authentication, property management, and payment integration. Built as a team project showcasing collaborative development skills.",
    category: "fullstack",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/Pikolosan/StayEase-Airbnb-Clone-",
    badge: "Full Stack",
    badgeColor: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
  },
  {
    id: "football-analysis",
    title: "Football Analysis System",
    description: "Real-time football match analysis using YOLO object detection, OpenCV for computer vision, and Python for data processing.",
    category: "ai-ml",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    technologies: ["Python", "YOLO", "OpenCV"],
    githubUrl: "https://github.com/Pikolosan/Football-Analysis-system-with-YOLO-OpenCV-and-Python",
    badge: "AI/ML",
    badgeColor: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200"
  },
  {
    id: "nike-landing",
    title: "Nike Landing Page",
    description: "Modern, responsive landing page showcasing Nike products with smooth animations and interactive elements.",
    category: "frontend",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Pikolosan/Nike-Landing-Page",
    badge: "Frontend",
    badgeColor: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
  },
  {
    id: "rentacar",
    title: "RentACar",
    description: "Complete car rental platform with booking system, fleet management, user profiles, and payment processing. Developed as a collaborative team project.",
    category: "fullstack",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    technologies: ["React", "Express", "MySQL"],
    githubUrl: "https://github.com/Pikolosan/Car-Rental-Website---College-Project-",
    badge: "Full Stack",
    badgeColor: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
  },
  {
    id: "iphone-launch",
    title: "iPhone 15 Launch",
    description: "Recreated Apple's iPhone 15 launch page with smooth animations, 3D interactions, and responsive design.",
    category: "frontend",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    technologies: ["React", "Three.js", "GSAP"],
    githubUrl: "https://github.com/Pikolosan/IPhone-15-Web-Clone-SourceCode",
    liveUrl: "https://pikolosan.github.io/IPhone15-Pro-Hosting/",
    badge: "Frontend",
    badgeColor: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
  },
  {
    id: "instagram-reach",
    title: "Instagram Reach Analysis",
    description: "Machine learning model to analyze and predict Instagram post reach using engagement metrics and content features.",
    category: "ai-ml",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    technologies: ["Python", "Pandas", "Scikit-learn"],
    githubUrl: "https://github.com/Pikolosan/Instagram-Reach-Analysis",
    badge: "AI/ML",
    badgeColor: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200"
  },
  {
    id: "twitter-sentiment",
    title: "Twitter Sentiment Analysis",
    description: "Natural language processing system to analyze sentiment patterns in Twitter data using machine learning algorithms.",
    category: "ai-ml",
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    technologies: ["Python", "NLTK", "TensorFlow"],
    githubUrl: "https://github.com/Pikolosan/Twitter-Setiment-Analysis",
    badge: "AI/ML",
    badgeColor: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200"
  },
  {
    id: "cursor-tracer",
    title: "Adaptive Cursor Tracer",
    description: "Interactive cursor animation that adapts to different UI elements with smooth transitions and physics-based movement.",
    category: "css-animations",
    image: "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    technologies: ["JavaScript", "CSS", "GSAP"],
    githubUrl: "https://github.com/Pikolosan/Web-Dev-Proj---Cursor-Tracer-Animation",
    badge: "CSS Animations",
    badgeColor: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200"
  },
  {
    id: "3d-logo",
    title: "3D Logo Effect",
    description: "Three-dimensional logo animation with interactive hover effects and dynamic lighting using pure CSS and JavaScript.",
    category: "css-animations",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    technologies: ["CSS3", "JavaScript", "WebGL"],
    githubUrl: "https://github.com/Pikolosan/Web-Dev-Proj---Logo-Effect",
    badge: "CSS Animations",
    badgeColor: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200"
  },
  {
    id: "hover-loop",
    title: "Hover-Loop Effect",
    description: "Mesmerizing hover animation with continuous loop effects and smooth transitions for enhanced user interaction.",
    category: "css-animations",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    technologies: ["CSS3", "JavaScript", "Framer Motion"],
    githubUrl: "https://github.com/Pikolosan/Web-Dev-Proj---Hoverloop",
    badge: "CSS Animations",
    badgeColor: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200"
  }
];

const filterButtons = [
  { key: "all" as const, label: "All" },
  { key: "ai-ml" as const, label: "AI/ML" },
  { key: "fullstack" as const, label: "FullStack" },
  { key: "frontend" as const, label: "Frontend" },
  { key: "css-animations" as const, label: "CSS Animations" },
  { key: "open-source" as const, label: "Open Source" }
];

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    title: "Backend Development", 
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Authentication"]
  },
  {
    title: "AI/ML Engineering",
    skills: ["Python", "YOLO", "OpenCV", "Computer Vision", "Machine Learning"]
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel"]
  },
  {
    title: "Development Practices",
    skills: ["Responsive Design", "Version Control", "Agile", "Testing", "Deployment"]
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Team Collaboration", "Communication", "Learning Agility", "Adaptability"]
  }
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const filteredProjects = projects.filter(project => 
    activeFilter === "all" || project.category === activeFilter
  );

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-mono text-lg font-semibold">
              Parth Chaudhary
            </div>
            
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-6">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-sm hover:text-primary transition-colors"
                  data-testid="nav-about"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-sm hover:text-primary transition-colors"
                  data-testid="nav-projects"
                >
                  Projects
                </button>
                <button 
                  onClick={() => scrollToSection('skills')}
                  className="text-sm hover:text-primary transition-colors"
                  data-testid="nav-skills"
                >
                  Skills
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-sm hover:text-primary transition-colors"
                  data-testid="nav-contact"
                >
                  Contact
                </button>
              </div>
              
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-slide-up">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150" 
                alt="Professional headshot" 
                className="w-32 h-32 rounded-full mx-auto mb-8 object-cover border-4 border-background shadow-lg"
                data-testid="profile-image"
              />
              
              <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
                Parth<br />
                <span className="text-primary">Chaudhary</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
                Full Stack Developer & AI/ML Engineer
              </p>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                Crafting intelligent web applications and machine learning solutions. 
                Passionate about creating seamless user experiences powered by cutting-edge technology.
              </p>
              
              <div className="flex justify-center space-x-4">
                <Button 
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3"
                  data-testid="view-projects-btn"
                >
                  View Projects
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3"
                  data-testid="contact-btn"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">About Me</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Clean workspace with laptop" 
                  className="rounded-2xl shadow-lg w-full"
                  data-testid="workspace-image"
                />
              </div>
              
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I'm a passionate developer with expertise in <strong className="text-foreground">Full Stack Web Development</strong> 
                  and <strong className="text-foreground">Artificial Intelligence/Machine Learning</strong>.
                </p>
                
                <p className="text-lg leading-relaxed text-muted-foreground">
                  My journey spans from building responsive, user-centric web applications to developing 
                  intelligent systems that can analyze, predict, and automate complex tasks. I believe in 
                  the power of technology to solve real-world problems.
                </p>
                
                <p className="text-lg leading-relaxed text-muted-foreground">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or analyzing the latest trends in AI and web development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Projects</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              A showcase of my work in web development and machine learning
            </p>

            {/* Project Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filterButtons.map((filter) => (
                <Button
                  key={filter.key}
                  variant={activeFilter === filter.key ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter.key)}
                  className="px-6 py-2 rounded-full"
                  data-testid={`filter-${filter.key}`}
                >
                  {filter.label}
                </Button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card 
                  key={project.id} 
                  className="project-card overflow-hidden h-full"
                  data-testid={`project-${project.id}`}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-52 object-cover"
                  />
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className={project.badgeColor}>
                        {project.badge}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="text-xs bg-muted px-2 py-1 rounded font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-end space-x-2 mt-auto">
                      {project.githubUrl && (
                        <Button
                          variant="ghost"
                          size="icon"
                          asChild
                          data-testid={`github-${project.id}`}
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button
                          variant="ghost"
                          size="icon"
                          asChild
                          data-testid={`live-${project.id}`}
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Tech Skills</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Technologies and tools I work with
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category) => (
                <div key={category.title} className="space-y-4">
                  <h3 className="text-xl font-semibold text-center mb-4">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary"
                        className="text-sm py-1 px-3"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Let's connect and discuss opportunities or collaborations
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Button 
                variant="outline" 
                className="flex items-center gap-2 px-6 py-3"
                asChild
                data-testid="email-contact"
              >
                <a href="mailto:parth@example.com">
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                className="flex items-center gap-2 px-6 py-3"
                asChild
                data-testid="linkedin-contact"
              >
                <a href="https://linkedin.com/in/parthchaudhary" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                className="flex items-center gap-2 px-6 py-3"
                asChild
                data-testid="github-contact"
              >
                <a href="https://github.com/Pikolosan" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                className="flex items-center gap-2 px-6 py-3"
                asChild
                data-testid="twitter-contact"
              >
                <a href="https://twitter.com/parthchaudhary" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-4 h-4" />
                  Twitter
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}