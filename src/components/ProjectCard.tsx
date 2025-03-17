
import React, { useState } from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  repoUrl,
  featured = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border transition-all duration-500",
        featured ? "md:col-span-2" : "",
        "bg-card hover:shadow-xl transform hover:-translate-y-1"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video md:aspect-auto md:h-full overflow-hidden bg-secondary">
        <div className="relative w-full h-full overflow-hidden">
          <img 
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div 
            className={cn(
              "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-500",
              isHovered ? "opacity-100" : "opacity-0"
            )}
          ></div>
        </div>
      </div>

      <div 
        className={cn(
          "absolute inset-0 flex flex-col justify-end p-6 text-white transition-all duration-500",
          isHovered ? "backdrop-blur-sm bg-black/20 opacity-100" : "opacity-0"
        )}
      >
        <div className="transform transition-transform duration-500 group-hover:translate-y-0 translate-y-8">
          <div className="flex items-center gap-2 mb-2">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="inline-block py-1 px-2.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p className="text-white/90 mb-4 line-clamp-2">{description}</p>
          
          <div className="flex gap-3">
            {liveUrl && (
              <a 
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 bg-white text-black font-medium rounded-lg flex items-center gap-2 hover:bg-white/90 transition-colors"
              >
                <span>View Live</span>
                <ExternalLinkIcon size={16} />
              </a>
            )}
            
            {repoUrl && (
              <a 
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-4 bg-black/50 text-white rounded-lg flex items-center gap-2 hover:bg-black/70 transition-colors"
              >
                <span>Code</span>
                <GithubIcon size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
