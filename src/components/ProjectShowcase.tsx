import React, { useState } from 'react';
import {
  Search,
  Download,
  ExternalLink,
  Github,
  Star,
  Tag,
  Wrench,
  Printer,
  Info,
  X,
  CheckCircle,
  ArrowRight,
  Layers,
} from 'lucide-react';
import { Language, Project, Category } from '../types';
import { translations } from '../data/translations';
import { projectsData } from '../data/projects';

interface ProjectShowcaseProps {
  lang: Language;
  onSelectProjectForOrder: (project: Project) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  lang,
  onSelectProjectForOrder,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const t = translations[lang].projects;

  const categories: { id: Category; label: string }[] = [
    { id: 'all', label: t.all },
    { id: '3d_print', label: t.print3d },
    { id: 'electronics', label: t.electronics },
    { id: 'desk_gadget', label: t.deskGadget },
    { id: 'open_source', label: t.openSource },
  ];

  const filteredProjects = projectsData.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const titleText = `${p.title.vi} ${p.title.en}`.toLowerCase();
    const descText = `${p.shortDesc.vi} ${p.shortDesc.en}`.toLowerCase();
    const tagsText = p.tags.join(' ').toLowerCase();
    const matchesSearch =
      titleText.includes(searchQuery.toLowerCase()) ||
      descText.includes(searchQuery.toLowerCase()) ||
      tagsText.includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 bg-slate-900 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-block px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-orange-400 font-mono text-xs font-semibold">
            {t.tagline}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-slate-400 text-base">
            {t.subtitle}
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30'
                    : 'bg-slate-950 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>
        </div>

        {/* Grid of Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const title = project.title[lang];
            const shortDesc = project.shortDesc[lang];

            return (
              <div
                key={project.id}
                className="group rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden hover:border-slate-700 hover:shadow-2xl hover:shadow-orange-900/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail Image */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                    <img
                      src={project.imageUrl}
                      alt={title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                    {/* Featured badge */}
                    {project.featured && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-orange-600 text-white text-[10px] font-bold font-mono tracking-wider uppercase shadow-md">
                        FEATURED
                      </span>
                    )}

                    {/* Rating & Downloads */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300 font-mono">
                      {project.rating && (
                        <div className="flex items-center gap-1 bg-slate-900/80 backdrop-blur px-2 py-0.5 rounded border border-slate-700/60">
                          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                          <span>{project.rating}</span>
                        </div>
                      )}
                      {project.downloadsCount && (
                        <div className="flex items-center gap-1 bg-slate-900/80 backdrop-blur px-2 py-0.5 rounded border border-slate-700/60">
                          <Download className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{project.downloadsCount.toLocaleString()}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors line-clamp-1">
                      {title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
                      {shortDesc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-slate-900 mt-4">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="flex-1 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-800 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Info className="w-3.5 h-3.5 text-orange-400" />
                    <span>{t.viewDetails}</span>
                  </button>

                  <button
                    onClick={() => onSelectProjectForOrder(project)}
                    className="py-2.5 px-3 rounded-xl bg-orange-600/20 hover:bg-orange-600 text-orange-300 hover:text-white text-xs font-semibold border border-orange-500/30 transition-all flex items-center gap-1"
                    title={t.orderCustom}
                  >
                    <Printer className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-3xl rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6 my-8 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-8">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-xs font-semibold">
                  {activeModalProject.category.toUpperCase().replace('_', ' ')}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {t.difficulty}: <span className="text-slate-200 font-bold">{activeModalProject.difficulty}</span>
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {activeModalProject.title[lang]}
              </h3>
            </div>

            {/* Modal Hero Image */}
            <div className="rounded-xl overflow-hidden h-64 sm:h-72 bg-slate-950">
              <img
                src={activeModalProject.imageUrl}
                alt={activeModalProject.title[lang]}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Full Description */}
            <div className="space-y-2">
              <h4 className="text-sm font-mono font-bold text-slate-300 uppercase tracking-wider">
                {lang === 'vi' ? 'Mô Tả Chi Tiết' : 'Detailed Description'}
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {activeModalProject.fullDesc[lang]}
              </p>
            </div>

            {/* 3D Print Specs & Dimensions */}
            {activeModalProject.printSpecs && (
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <h4 className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Printer className="w-4 h-4" />
                  <span>{t.printSpecsTitle}</span>
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
                  <div>
                    <span className="text-slate-500 block">{lang === 'vi' ? 'Chất liệu' : 'Material'}</span>
                    <span className="text-white font-semibold">{activeModalProject.printSpecs.material}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Infill %</span>
                    <span className="text-white font-semibold">{activeModalProject.printSpecs.infill}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Layer Height</span>
                    <span className="text-white font-semibold">{activeModalProject.printSpecs.layerHeight}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">{lang === 'vi' ? 'Thời Gian In' : 'Print Time'}</span>
                    <span className="text-white font-semibold">{activeModalProject.printSpecs.printTimeHours} hrs</span>
                  </div>
                </div>
              </div>
            )}

            {/* Bill of Materials (BOM) */}
            {activeModalProject.bom && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Wrench className="w-4 h-4 text-cyan-400" />
                  <span>{t.bomList}</span>
                </h4>
                <div className="divide-y divide-slate-800 rounded-xl border border-slate-800 bg-slate-950 overflow-hidden">
                  {activeModalProject.bom.map((item, idx) => (
                    <div key={idx} className="p-3 flex items-center justify-between text-xs font-mono text-slate-300">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{item.name}</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 font-bold text-orange-400">
                        x{item.qty}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {activeModalProject.stlUrl && (
                  <a
                    href={activeModalProject.stlUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-all flex items-center gap-2"
                  >
                    <Download className="w-4 h-4 text-orange-400" />
                    <span>{t.downloadSTL}</span>
                  </a>
                )}
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-all flex items-center gap-2"
                  >
                    <Github className="w-4 h-4 text-slate-300" />
                    <span>GitHub Code</span>
                  </a>
                )}
              </div>

              <button
                onClick={() => {
                  const proj = activeModalProject;
                  setActiveModalProject(null);
                  onSelectProjectForOrder(proj);
                }}
                className="px-6 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold transition-all shadow-lg shadow-orange-600/30 flex items-center gap-2"
              >
                <span>{t.orderCustom}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
