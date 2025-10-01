import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Reimer Campos
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Desarrollador Frontend especializado en crear experiencias web modernas y escalables
              con React.js, Next.js y TypeScript.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {['Inicio', 'Habilidades', 'Proyectos', 'Contacto'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Conectemos</h4>
            <div className="space-y-3">
              <a
                href="mailto:camposreimer@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Mail size={18} />
                <span>camposreimer@gmail.com</span>
              </a>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://github.com/Reiaxel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/reimer-campos-b04406268"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-1">
            <span>© {currentYear} Reimer Campos. Hecho con</span>
            <Heart size={16} className="text-red-400" />
            <span>usando React.js y Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;