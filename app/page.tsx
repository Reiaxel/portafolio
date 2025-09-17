'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Palette, 
  Smartphone,
  ArrowRight,
  Star,
  Calendar,
  MapPin
} from 'lucide-react';

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: 'Personal Finance',
      description: 'Aplicación de gestión financiera personal con registro y visualización de ingresos y gastos. Desarrollado con Next.js, React y Tailwind CSS, con diseño responsivo.',
      image: '/WhatsApp Image 2025-08-01 at 01.00.50.jpeg',
      liveUrl: 'https://personal-finance-chi-blond.vercel.app',
      githubUrl: 'https://github.com/Reiaxel/personal-finance',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'Dashboard', 'Responsive'],
      status: 'Live'
    },
    {
      title: 'StreamFlim',
      description: 'Aplicación tipo Netflix, con sección de películas y series, manejo de rutas dinámicas, consumo de API y diseño responsivo. Desarrollado con Next.js, React, Tailwind y TypeScript.',
      image:  '/WhatsApp Image 2025-08-01 at 00.58.50.jpeg',
      liveUrl: '#',
      githubUrl: 'https://github.com/Reiaxel/StreamFlim',
      tags: ['Next.js', 'TypeScript', 'API Integration', 'Dynamic Routes', 'Responsive'],
      status: 'Development'
    },
    {
      title: 'E-commerce TecnoVibe',
      description: 'Tienda online de productos de tecnología con carrito y panel administrativo. Permite gestionar productos (imágenes, precios y descripciones) y confirmar pedidos.',
      image:  '/WhatsApp Image 2025-08-01 at 00.59.53 (1).jpeg',
      liveUrl: 'https://e-commerce-nine-puce-78.vercel.app',
      githubUrl: 'https://github.com/Reiaxel/e-commerce',
      tags: ['Next.js', 'React', 'Tailwind', 'E-commerce', 'Admin Panel'],
      status: 'Live'
    }
  ];

  const skills = [
    { name: 'Next.js', level: 90, icon: Code2 },
    { name: 'React', level: 88, icon: Code2 },
    { name: 'TypeScript', level: 85, icon: Code2 },
    { name: 'Tailwind CSS', level: 92, icon: Palette },
    { name: 'JavaScript', level: 90, icon: Code2 },
    { name: 'Responsive Design', level: 88, icon: Smartphone }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Reimer Campos
            </h1>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Inicio' },
                { id: 'about', label: 'Sobre mí' },
                { id: 'projects', label: 'Proyectos' },
                { id: 'contact', label: 'Contacto' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === id ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="mb-6">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">RC</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              Reimer Alexander Campos
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-600 mb-8">
              Desarrollador Frontend
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Especializado en crear aplicaciones web modernas y experiencias de usuario excepcionales 
              con Next.js, React y TypeScript. Apasionado por el código limpio y el diseño responsive.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 text-lg"
                onClick={() => scrollToSection('projects')}
              >
                Ver Proyectos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 px-8 py-3 text-lg hover:bg-blue-50"
                onClick={() => scrollToSection('contact')}
              >
                Contactar
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              <a 
                href="mailto:camposreimer@gmail.com" 
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
              >
                <Mail className="h-6 w-6 text-gray-600" />
              </a>
              <a 
                href="https://www.linkedin.com/in/reimer-campos-b04406268" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
              >
                <Linkedin className="h-6 w-6 text-blue-600" />
              </a>
              <a 
                href="https://github.com/Reiaxel" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
              >
                <Github className="h-6 w-6 text-gray-800" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
              Sobre mí
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Desarrollador Frontend Apasionado</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Soy un desarrollador frontend especializado en crear aplicaciones web modernas y funcionales. 
                  Mi enfoque se centra en escribir código limpio, crear interfaces de usuario intuitivas y 
                  implementar las mejores prácticas de desarrollo.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Tengo experiencia desarrollando aplicaciones completas desde el diseño hasta el despliegue, 
                  trabajando con tecnologías como Next.js, React, TypeScript y Tailwind CSS.
                </p>
                
                <div className="flex items-center space-x-4">
                  <MapPin className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-600">Disponible para trabajar remotamente</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Habilidades Técnicas</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="relative">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <skill.icon className="h-4 w-4 text-blue-600" />
                          <span className="font-medium text-gray-700">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 150}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
              Proyectos Destacados
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Una selección de mis mejores trabajos, desde aplicaciones financieras hasta plataformas de streaming y e-commerce.
            </p>
            
            <div className="grid gap-8 md:gap-12">
              {projects.map((project, index) => (
                <Card key={project.title} className="overflow-hidden bg-white/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                  <CardContent className="p-0">
                    <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                      <div className={`relative aspect-video lg:aspect-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <Badge 
                          variant={project.status === 'Live' ? 'default' : 'secondary'}
                          className={`absolute top-4 right-4 ${
                            project.status === 'Live' ? 'bg-green-500 hover:bg-green-600' : ''
                          }`}
                        >
                          {project.status === 'Live' ? (
                            <>
                              <Star className="w-3 h-3 mr-1" />
                              En Vivo
                            </>
                          ) : (
                            <>
                              <Calendar className="w-3 h-3 mr-1" />
                              En Desarrollo
                            </>
                          )}
                        </Badge>
                      </div>
                      
                      <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6 text-base lg:text-lg">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs font-medium">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-3">
                          {project.status === 'Live' && project.liveUrl !== '#' && (
                            <Button 
                              asChild
                              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white flex-1"
                            >
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                Ver Demo
                                <ExternalLink className="ml-2 h-4 w-4" />
                              </a>
                            </Button>
                          )}
                          <Button variant="outline" asChild className="flex-1">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              Código
                              <Github className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              ¿Listo para trabajar juntos?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Estoy disponible para nuevas oportunidades y proyectos emocionantes. 
              ¡Conectemos y hagamos algo increíble!
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-white mx-auto mb-4" />
                  <h3 className="font-semibold text-white mb-2">Email</h3>
                  <a 
                    href="mailto:camposreimer@gmail.com" 
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    camposreimer@gmail.com
                  </a>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Linkedin className="h-8 w-8 text-white mx-auto mb-4" />
                  <h3 className="font-semibold text-white mb-2">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/reimer-campos-b04406268" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    Reimer Campos
                  </a>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Github className="h-8 w-8 text-white mx-auto mb-4" />
                  <h3 className="font-semibold text-white mb-2">GitHub</h3>
                  <a 
                    href="https://github.com/Reiaxel" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-100 hover:text-white transition-colors"
                  >
                    @Reiaxel
                  </a>
                </CardContent>
              </Card>
            </div>
            
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold"
              asChild
            >
              <a href="mailto:camposreimer@gmail.com">
                Enviar Mensaje
                <Mail className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Reimer Alexander Campos Hernández. Desarrollado con Next.js y Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}