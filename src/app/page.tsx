"use client";

import { useState } from "react";
import { Dumbbell, Apple, TrendingUp, Users, Zap, Award, ArrowRight, Menu, X, CreditCard, Copy, Check } from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [copiedLink, setCopiedLink] = useState(false);

  const paymentLinks = {
    mensal: "https://pay.kiwify.com.br/tT6sUvG",
    trimestral: "https://pay.kiwify.com.br/tT6sUvG",
    anual: "https://pay.kiwify.com.br/tT6sUvG"
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(paymentLinks.mensal);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-950 via-green-900 to-emerald-950 relative overflow-hidden">
      {/* Padrão de fundo com traços */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, #22c55e 35px, #22c55e 37px),
                           repeating-linear-gradient(-45deg, transparent, transparent 35px, #10b981 35px, #10b981 37px)`
        }}></div>
      </div>

      {/* Imagem de fundo sutil */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header */}
      <header className="relative z-50 bg-black/30 backdrop-blur-md border-b border-green-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-green-400 to-emerald-600 p-2 rounded-xl">
                <Dumbbell className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white">FIT PRO</h1>
                <p className="text-xs text-green-300">Treinos e Dietas</p>
              </div>
            </div>

            {/* Menu Desktop */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#home" className="text-white hover:text-green-400 transition-colors font-medium">Início</a>
              <a href="#treinos" className="text-white hover:text-green-400 transition-colors font-medium">Treinos</a>
              <a href="#dietas" className="text-white hover:text-green-400 transition-colors font-medium">Dietas</a>
              <a href="#transformacao" className="text-white hover:text-green-400 transition-colors font-medium">Transformação</a>
              <a href="#pagamento" className="text-white hover:text-green-400 transition-colors font-medium">Pagamento</a>
              <a href="#planos" className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full font-bold hover:shadow-lg hover:shadow-green-500/50 transition-all">
                Começar Agora
              </a>
            </nav>

            {/* Menu Mobile */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white p-2"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Menu Mobile Dropdown */}
          {menuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3">
              <a href="#home" className="text-white hover:text-green-400 transition-colors font-medium py-2">Início</a>
              <a href="#treinos" className="text-white hover:text-green-400 transition-colors font-medium py-2">Treinos</a>
              <a href="#dietas" className="text-white hover:text-green-400 transition-colors font-medium py-2">Dietas</a>
              <a href="#transformacao" className="text-white hover:text-green-400 transition-colors font-medium py-2">Transformação</a>
              <a href="#pagamento" className="text-white hover:text-green-400 transition-colors font-medium py-2">Pagamento</a>
              <a href="#planos" className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-bold text-center">
                Começar Agora
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <div className="inline-block bg-green-500/20 border border-green-400 rounded-full px-4 py-2 mb-6">
              <span className="text-green-300 font-semibold text-sm">🔥 Mais de 10.000 transformações</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transforme Seu Corpo em
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400"> 90 Dias</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Treinos personalizados e dietas calculadas especialmente para você. 
              Resultados comprovados para iniciantes e intermediários!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#planos" className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all hover:scale-105 flex items-center justify-center gap-2">
                Começar Agora <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#transformacao" className="bg-white/10 backdrop-blur-sm border-2 border-green-400 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                Ver Resultados <TrendingUp className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=800&fit=crop" 
              alt="Fitness" 
              className="rounded-3xl shadow-2xl shadow-green-500/20 border-4 border-green-500/30"
            />
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-2xl shadow-xl">
              <p className="text-white font-bold text-3xl">90 Dias</p>
              <p className="text-green-100 text-sm">Para Resultados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-md border border-green-500/30 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-105">
            <div className="bg-gradient-to-br from-green-400 to-emerald-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <Dumbbell className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Treinos Personalizados</h3>
            <p className="text-gray-300">Treinos criados especialmente para seu nível e objetivo, diferenciados por sexo</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-green-500/30 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-105">
            <div className="bg-gradient-to-br from-green-400 to-emerald-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <Apple className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Dietas Calculadas</h3>
            <p className="text-gray-300">Planos alimentares baseados na sua taxa metabólica basal e objetivos</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-green-500/30 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-105">
            <div className="bg-gradient-to-br from-green-400 to-emerald-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Acompanhamento</h3>
            <p className="text-gray-300">Compare seu antes e depois e veja sua evolução em tempo real</p>
          </div>
        </div>
      </section>

      {/* Link de Pagamento Section */}
      <section id="pagamento" className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-green-400">
            <div className="text-center mb-8">
              <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Links de Pagamento</h2>
              <p className="text-xl text-green-50">Acesse nosso checkout seguro e comece sua transformação agora!</p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <p className="text-green-100 text-sm font-semibold mb-3">PLANO MENSAL - R$ 29/mês:</p>
                <div className="flex flex-col sm:flex-row gap-3 items-center">
                  <input 
                    type="text" 
                    value={paymentLinks.mensal}
                    readOnly
                    className="flex-1 bg-white/20 border-2 border-white/30 rounded-xl px-4 py-3 text-white font-mono text-sm w-full"
                  />
                  <a
                    href={paymentLinks.mensal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-green-600 px-6 py-3 rounded-xl font-bold hover:bg-green-50 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
                  >
                    <CreditCard className="w-5 h-5" />
                    Pagar Agora
                  </a>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <p className="text-green-100 text-sm font-semibold mb-3">PLANO TRIMESTRAL - R$ 119/3 meses:</p>
                <div className="flex flex-col sm:flex-row gap-3 items-center">
                  <input 
                    type="text" 
                    value={paymentLinks.trimestral}
                    readOnly
                    className="flex-1 bg-white/20 border-2 border-white/30 rounded-xl px-4 py-3 text-white font-mono text-sm w-full"
                  />
                  <a
                    href={paymentLinks.trimestral}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-green-600 px-6 py-3 rounded-xl font-bold hover:bg-green-50 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
                  >
                    <CreditCard className="w-5 h-5" />
                    Pagar Agora
                  </a>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <p className="text-green-100 text-sm font-semibold mb-3">PLANO ANUAL - R$ 399/ano:</p>
                <div className="flex flex-col sm:flex-row gap-3 items-center">
                  <input 
                    type="text" 
                    value={paymentLinks.anual}
                    readOnly
                    className="flex-1 bg-white/20 border-2 border-white/30 rounded-xl px-4 py-3 text-white font-mono text-sm w-full"
                  />
                  <a
                    href={paymentLinks.anual}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-green-600 px-6 py-3 rounded-xl font-bold hover:bg-green-50 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
                  >
                    <CreditCard className="w-5 h-5" />
                    Pagar Agora
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-white font-bold text-lg mb-1">🔒 Seguro</p>
                <p className="text-green-100 text-sm">Pagamento 100% protegido</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-white font-bold text-lg mb-1">⚡ Rápido</p>
                <p className="text-green-100 text-sm">Acesso imediato após pagamento</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-white font-bold text-lg mb-1">💳 Flexível</p>
                <p className="text-green-100 text-sm">Cartão, PIX e boleto</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treinos Section */}
      <section id="treinos" className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Treinos Personalizados</h2>
          <p className="text-xl text-gray-300">Escolha seu nível e comece sua transformação</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Iniciante */}
          <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-md border-2 border-green-500/50 rounded-3xl p-8 hover:border-green-400 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-8 h-8 text-green-400" />
              <h3 className="text-3xl font-bold text-white">Iniciante</h3>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop" 
              alt="Treino Iniciante" 
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-green-400 font-semibold mb-2">👨 Masculino</p>
                <p className="text-gray-300 text-sm">• 3x por semana • Foco em fundamentos • Exercícios básicos</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-green-400 font-semibold mb-2">👩 Feminino</p>
                <p className="text-gray-300 text-sm">• 3x por semana • Tonificação • Exercícios adaptados</p>
              </div>
            </div>
          </div>

          {/* Intermediário */}
          <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-md border-2 border-green-500/50 rounded-3xl p-8 hover:border-green-400 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-green-400" />
              <h3 className="text-3xl font-bold text-white">Intermediário</h3>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop" 
              alt="Treino Intermediário" 
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-green-400 font-semibold mb-2">👨 Masculino</p>
                <p className="text-gray-300 text-sm">• 4-5x por semana • Hipertrofia • Exercícios avançados</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-green-400 font-semibold mb-2">👩 Feminino</p>
                <p className="text-gray-300 text-sm">• 4-5x por semana • Definição • Treinos intensivos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dietas Section */}
      <section id="dietas" className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Dietas Personalizadas</h2>
          <p className="text-xl text-gray-300">Calculadas com base na sua taxa metabólica basal</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-md border-2 border-green-500/50 rounded-3xl p-8">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-4">Ganho de Massa</h3>
            <img 
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop" 
              alt="Ganho de Massa" 
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <span>Superávit calórico calculado</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <span>Alto teor proteico</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <span>Refeições estratégicas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <span>Diferenciado por sexo</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-md border-2 border-green-500/50 rounded-3xl p-8">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-4">Perda de Gordura</h3>
            <img 
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop" 
              alt="Perda de Gordura" 
              className="w-full h-48 object-cover rounded-2xl mb-6"
            />
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <span>Déficit calórico controlado</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <span>Preservação muscular</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <span>Alimentos termogênicos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <span>Adaptado ao seu metabolismo</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Transformação Section */}
      <section id="transformacao" className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Transformações Reais</h2>
          <p className="text-xl text-gray-300">Veja os resultados de quem já transformou o corpo</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-md border border-green-500/30 rounded-2xl overflow-hidden hover:scale-105 transition-all">
            <img 
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=500&fit=crop" 
              alt="Transformação 1" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-bold text-white mb-2">João Silva</h4>
              <p className="text-green-400 font-semibold mb-2">-15kg em 90 dias</p>
              <p className="text-gray-300 text-sm">"Nunca imaginei que conseguiria esses resultados!"</p>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-green-500/30 rounded-2xl overflow-hidden hover:scale-105 transition-all">
            <img 
              src="https://images.unsplash.com/photo-1550345332-09e3ac987658?w=400&h=500&fit=crop" 
              alt="Transformação 2" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-bold text-white mb-2">Maria Santos</h4>
              <p className="text-green-400 font-semibold mb-2">+8kg de massa magra</p>
              <p className="text-gray-300 text-sm">"O app mudou completamente minha vida!"</p>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-green-500/30 rounded-2xl overflow-hidden hover:scale-105 transition-all">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop" 
              alt="Transformação 3" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-bold text-white mb-2">Pedro Costa</h4>
              <p className="text-green-400 font-semibold mb-2">-20kg em 120 dias</p>
              <p className="text-gray-300 text-sm">"Resultados incríveis e sustentáveis!"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Planos Section */}
      <section id="planos" className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Comece Sua Transformação</h2>
          <p className="text-xl text-gray-300">Escolha o plano ideal para você</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md border border-green-500/30 rounded-3xl p-8 hover:scale-105 transition-all">
            <h3 className="text-2xl font-bold text-white mb-2">Mensal</h3>
            <p className="text-4xl font-bold text-green-400 mb-6">R$ 29<span className="text-lg text-gray-400">/mês</span></p>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Treinos personalizados</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Dietas calculadas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Acompanhamento básico</span>
              </li>
            </ul>
            <a href={paymentLinks.mensal} target="_blank" rel="noopener noreferrer" className="block w-full bg-green-600 hover:bg-green-500 text-white text-center py-3 rounded-full font-bold transition-all">
              Assinar Agora
            </a>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-emerald-600 border-4 border-green-400 rounded-3xl p-8 hover:scale-105 transition-all relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
              MAIS POPULAR
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Trimestral</h3>
            <p className="text-4xl font-bold text-white mb-6">R$ 119<span className="text-lg text-green-100">/3 meses</span></p>
            <ul className="space-y-3 text-white mb-8">
              <li className="flex items-start gap-2">
                <span className="text-yellow-300">✓</span>
                <span>Tudo do plano Mensal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-300">✓</span>
                <span>Suporte prioritário</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-300">✓</span>
                <span>Comparação antes/depois</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-300">✓</span>
                <span>Economia de 20%</span>
              </li>
            </ul>
            <a href={paymentLinks.trimestral} target="_blank" rel="noopener noreferrer" className="block w-full bg-white text-green-600 text-center py-3 rounded-full font-bold hover:bg-gray-100 transition-all">
              Assinar Agora
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-green-500/30 rounded-3xl p-8 hover:scale-105 transition-all">
            <h3 className="text-2xl font-bold text-white mb-2">Anual</h3>
            <p className="text-4xl font-bold text-green-400 mb-6">R$ 399<span className="text-lg text-gray-400">/ano</span></p>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Tudo do plano Trimestral</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Consultoria mensal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Grupo VIP</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Economia de 35%</span>
              </li>
            </ul>
            <a href={paymentLinks.anual} target="_blank" rel="noopener noreferrer" className="block w-full bg-green-600 hover:bg-green-500 text-white text-center py-3 rounded-full font-bold transition-all">
              Assinar Agora
            </a>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Pronto Para Transformar Seu Corpo?</h2>
          <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
            Junte-se a mais de 10.000 pessoas que já transformaram suas vidas com o FIT PRO
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={paymentLinks.mensal} target="_blank" rel="noopener noreferrer" className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all inline-flex items-center justify-center gap-2">
              Acessar Pagamento <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#planos" className="bg-green-800 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-700 transition-all">
              Ver Planos
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black/50 backdrop-blur-md border-t border-green-500/20 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Dumbbell className="w-6 h-6 text-green-400" />
                <span className="text-xl font-bold text-white">FIT PRO</span>
              </div>
              <p className="text-gray-400 text-sm">Transforme seu corpo com treinos e dietas personalizadas</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#treinos" className="hover:text-green-400">Treinos</a></li>
                <li><a href="#dietas" className="hover:text-green-400">Dietas</a></li>
                <li><a href="#transformacao" className="hover:text-green-400">Transformações</a></li>
                <li><a href="#planos" className="hover:text-green-400">Planos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="https://fitpro.com.br/faq" className="hover:text-green-400">FAQ</a></li>
                <li><a href="https://fitpro.com.br/contato" className="hover:text-green-400">Contato</a></li>
                <li><a href="https://fitpro.com.br/termos" className="hover:text-green-400">Termos de Uso</a></li>
                <li><a href="https://fitpro.com.br/privacidade" className="hover:text-green-400">Privacidade</a></li>
              </ul>
              <div className="mt-4 pt-4 border-t border-green-500/20">
                <p className="text-gray-400 text-xs font-semibold mb-1">Proprietários:</p>
                <p className="text-gray-300 text-xs">Lucas Gabriel Munhoz Moreira</p>
                <p className="text-gray-300 text-xs">Eduardo Pereira De Souza</p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Baixe o App</h4>
              <div className="space-y-3">
                <a href="https://play.google.com/store/apps/fitpro" className="block bg-white/10 hover:bg-white/20 border border-green-500/30 rounded-lg p-3 transition-all">
                  <p className="text-white font-semibold text-sm">Google Play</p>
                </a>
                <a href="https://apps.apple.com/br/app/fitpro" className="block bg-white/10 hover:bg-white/20 border border-green-500/30 rounded-lg p-3 transition-all">
                  <p className="text-white font-semibold text-sm">App Store</p>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-green-500/20 pt-6 text-center">
            <p className="text-gray-400 text-sm">© 2024 FIT PRO - Todos os direitos reservados | www.fitpro.com.br</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
