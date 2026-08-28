import React, { useState } from 'react';

function App() {
  // 1. DADOS DOS PROJETOS COM CATEGORIAS E FOTOS CORRIGIDAS
  const projetos = [
    { id: 1, categoria: "Cozinhas", titulo: "Cozinha Minimalista", desc: "MDF Grafite com puxadores ocultos", img: "imagens/cozinhas/cozinhas1.jpg" },
    { id: 2, categoria: "Cozinhas", titulo: "Cozinha Gourmet", desc: "Ilha central com bancada americana", img: "imagens/cozinhas/cozinhas2.jpg" },
    { id: 3, categoria: "Banheiros", titulo: "Gabinete Luxo", desc: "MDF naval resistente a umidade", img: "imagens/banheiros/banheiros1.jpg" },
    { id: 4, categoria: "Quartos", titulo: "Dormitório Suíte", desc: "Painel ripado com nichos embutidos", img: "imagens/quartos/quartos1.jpg" },
    { id: 5, categoria: "Quartos", titulo: "Closet Integrado", desc: "Divisórias personalizadas com vidro", img: "imagens/quartos/quartos2.jpg" },
    { id: 6, categoria: "Escritórios", titulo: "Home Office Premium", desc: "Mesa ergonômica com calhas organizadoras", img: "imagens/escritorios/escritorios1.jpg" },
  ];

  const mensagemPadrao = "Olá! Vi o portfólio digital da Stilo BR e gostaria de fazer um orçamento de móveis planejados.";
  const linkWhatsApp = `https://wa.me/5531995587012?text=${encodeURIComponent(mensagemPadrao)}`;

  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');
  
  // Filtra os projetos com base na categoria selecionada
  const projetosFiltrados = categoriaAtiva === 'Todos' 
    ? projetos 
    : projetos.filter(p => p.categoria === categoriaAtiva);

  const categorias = ['Todos', 'Cozinhas', 'Banheiros', 'Quartos', 'Escritórios'];

  return (
    <div className="bg-marcenaria-fundo min-h-screen text-white font-sans antialiased">
      
      {/* HEADER */}
      <header className="border-b border-marcenaria-borda bg-marcenaria-fundo/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-wider">
            STILO<span className="text-dourado-principal">BR</span>
            <span className="block text-[10px] text-gray-400 tracking-[0.2em] uppercase font-light leading-none">Móveis Planejados</span>
          </div>
          
          <nav className="hidden md:flex space-x-8 text-xs uppercase tracking-widest text-gray-400">
            <a href="#inicio" className="hover:text-dourado-principal transition">Início</a>
            <a href="#projetos" className="hover:text-dourado-principal transition">Projetos</a>
            <a href="#contato" className="hover:text-dourado-principal transition">Contato</a>
          </nav>

          <a 
            href= {linkWhatsApp}
            target="_blank" 
            rel="noreferrer"
            className="bg-dourado-principal hover:bg-dourado-claro text-marcenaria-fundo font-bold text-[10px] uppercase tracking-widest px-5 py-2.5 rounded shadow-lg transition-all active:scale-95"
          >
            Orçamento via WhatsApp
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="inicio" className="relative py-20 md:py-32 overflow-hidden border-b border-marcenaria-borda">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block border border-dourado-principal/30 px-3 py-1 rounded-full mb-6">
              <span className="text-dourado-principal text-[10px] font-bold tracking-[0.2em] uppercase">
                ✦ Inovação & Transformação Digital
              </span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
              Ambientes <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cca45c] via-[#f3db9e] to-[#997433]">
                Exclusivos
              </span>
            </h1>
            <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
              Elevando o padrão da sua casa com móveis sob medida que unem tecnologia de ponta e acabamento artesanal.
            </p>
            <div className="flex gap-4">
              <a 
                href="#projetos" 
                className="bg-white/5 border border-marcenaria-borda hover:border-dourado-principal text-white text-center font-bold uppercase tracking-widest text-xs px-8 py-4 rounded transition-all"
              >
                Explorar Galeria
              </a>
            </div>
          </div>
          
          {/* CARD DIFERENCIAIS */}
          <div className="bg-marcenaria-card border border-marcenaria-borda p-8 rounded-2xl shadow-2xl relative group overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-dourado-principal/10 rounded-full blur-3xl group-hover:bg-dourado-principal/20 transition-all duration-700" />
            <h3 className="text-xl font-bold uppercase tracking-widest text-dourado-principal mb-8 border-b border-marcenaria-borda pb-4">
              Por que nos escolher?
            </h3>
            <div className="space-y-6">
              {[
                { t: "100% MDF Premium", d: "Máxima durabilidade e resistência contra umidade." },
                { t: "Projetos em 3D", d: "Visualize cada detalhe antes do primeiro corte." },
                { t: "Tecnologia de Encaixe", d: "Precisão milimétrica com maquinário moderno." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-dourado-principal font-bold">0{i+1}.</span>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-tight text-gray-100">{item.t}</h4>
                    <p className="text-xs text-gray-500 mt-1">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="projetos" className="py-24 max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-[0.2em]">
            Nossos <span className="text-dourado-principal font-black">Projetos</span>
          </h2>
          <div className="w-20 h-1 bg-dourado-principal mt-4"></div>
        </div>

        {/* BOTÕES DE FILTRO (Posicionados fora da Hero e logo acima das fotos) */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categorias.map(cat => (
            <button
              key={cat}
              onClick={() => setCategoriaAtiva(cat)}
              className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${
                categoriaAtiva === cat 
                ? 'bg-dourado-principal text-marcenaria-fundo border-dourado-principal' 
                : 'border-marcenaria-borda text-gray-400 hover:border-dourado-principal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {/* GRID DE PROJETOS COM AS IMAGENS REAIS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetosFiltrados.map((p) => (
            <div key={p.id} className="group relative bg-marcenaria-card border border-marcenaria-borda rounded-xl overflow-hidden hover:border-dourado-principal/50 transition-all duration-500">
              <div className="aspect-video bg-zinc-900 relative overflow-hidden group">
                
                {/* Imagem real renderizada com zoom sutil no hover */}
                <img 
                  src={p.img} 
                  alt={p.titulo} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Cortina escura com o botão do WhatsApp ao passar o mouse */}
                <div className="absolute inset-0 bg-marcenaria-fundo/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                   <a 
                     href={linkWhatsApp}
                     target="_blank"
                     rel="noreferrer"
                     className="bg-dourado-principal text-marcenaria-fundo text-[10px] font-black uppercase px-4 py-2 rounded tracking-wider"
                   >
                     Quero um igual
                   </a>
                </div>
              </div>
              <div className="p-6">
                <span className="text-[9px] uppercase tracking-widest text-dourado-principal font-bold block mb-2">{p.categoria}</span>
                <h4 className="font-bold uppercase tracking-wider text-sm group-hover:text-dourado-principal transition-colors">{p.titulo}</h4>
                <p className="text-xs text-gray-500 mt-2 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER COMPLETO */}
      <footer id="contato" className="bg-marcenaria-card border-t border-marcenaria-borda py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <div className="text-xl font-bold tracking-wider mb-6">
              STILO<span className="text-dourado-principal font-black">BR</span>
            </div>
            
            {/* TEXTO EM UMA LINHA SÓ: A classe md:whitespace-nowrap impede a quebra em telas maiores */}
            <p className="text-gray-500 text-sm mb-8 md:whitespace-nowrap leading-relaxed">
              Atendimento especializado em toda região metropolitana de BH.
            </p>
            
            <div className="space-y-4">
               {/* LOCALIZAÇÃO COM ÍCONE DE MAPA */}
               <div className="flex items-center text-sm group">
                  <a 
                    href="https://google.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-gray-400 group-hover:text-white transition-colors flex items-center gap-3"
                  >
                    {/* Vetor gráfico do Pin de Mapa */}
                    <svg xmlns="http://w3.org" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#cca45c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    Contagem / MG
                  </a>
               </div>

               {/* TELEFONE COM ÍCONE DO WHATSAPP */}
               <div className="flex items-center text-sm group">
                <a 
                  href={linkWhatsApp} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-gray-400 group-hover:text-white transition-colors flex items-center gap-3"
                >
                  {/* Vetor gráfico oficial do WhatsApp */}
                  <svg xmlns="http://w3.org" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#cca45c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                  (31) 99558-7012
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:text-right flex flex-col justify-end">
            <p className="text-xs text-zinc-600">© {new Date().getFullYear()} Stilo BR Móveis Planejados.</p>
            <p className="text-[9px] text-zinc-700 mt-2 uppercase tracking-widest font-mono">
              Projeto de Extensão: Inovação e Transformação Digital <br />
              Desenvolvido por Matheus Antonio - Curso ADS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;