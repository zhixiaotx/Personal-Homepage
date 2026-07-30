/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {motion} from 'motion/react';
import {Github, Linkedin, Mail} from 'lucide-react';
import backgroundImage from './assets/images/homepage_background_1785452739969.jpg';
import profileImage from './assets/images/profile_picture_1785452753555.jpg';

export default function App() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center p-6 text-neutral-900"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        className="max-w-md w-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-neutral-200 p-8 text-center"
      >
        <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-md">
            <img src={profileImage} alt="Jane Doe" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-3xl font-semibold mb-2">Sky</h1>
        <p className="text-neutral-600 mb-8 leading-relaxed">
          Full-stack developer passionate about building clean, performant, and user-friendly web experiences.
        </p>

        <div className="flex justify-center gap-4">
          <a href="https://github.com/zhixiaotx/" className="p-3 bg-white/50 rounded-full hover:bg-white/80 transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="p-3 bg-white/50 rounded-full hover:bg-white/80 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:skylay199610@gmail.com" className="p-3 bg-white/50 rounded-full hover:bg-white/80 transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

