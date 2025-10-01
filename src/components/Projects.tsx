import React from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'StreamMovi React',
      description: 'Aplicación de streaming de películas desarrollada con React.js. Incluye funcionalidades de búsqueda, filtros avanzados, reproducción de trailers y diseño responsivo.',
      technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'API Integration'],
      github: 'https://github.com/Reiaxel/streammovi-react.git',
      demo: 'https://streammovi-react-2moaxmlqn-reiaxels-projects.vercel.app',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      title: 'E-commerce React',
      description: 'Plataforma de comercio electrónico completa con carrito de compras, gestión de productos, sistema de pagos y panel administrativo desarrollada en React.',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'State Management'],
      github: 'https://github.com/Reiaxel/e-commerce-react.git',
      demo: 'https://e-commerce-react-git-main-reiaxels-projects.vercel.app',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Finanzas React',
      description: 'Aplicación de gestión financiera personal con dashboard interactivo, gráficos de gastos e ingresos, categorización automática y reportes detallados.',
      technologies: ['React.js', 'Chart.js', 'Local Storage', 'Responsive Design'],
      github: 'https://github.com/Reiaxel/finanzas-react.git',
      demo: 'https://finanzas-react-e0txuskv4-reiaxels-projects.vercel.app',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="proyectos" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades en desarrollo frontend moderno
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">Código</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                  >
                    <Play size={16} />
                    <span className="text-sm font-medium">Ver Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Reiaxel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-200"
          >
            <Github size={20} />
            <span>Ver más proyectos en GitHub</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;