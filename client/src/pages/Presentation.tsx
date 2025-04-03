import React, { useState, useEffect, useRef } from 'react';
import Section from '@/components/presentation/Section';
import NavigationDots from '@/components/presentation/NavigationDots';
import ProgressBar from '@/components/presentation/ProgressBar';
import '../styles/presentation.css';

const Presentation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const sections = ['intro', 'ai-confusion', 'ai-spectrum', 'cognitive-architecture', 'future-trends', 'use-cases', 'roadmap', 'conclusion'];
  const slideInRefs = useRef<Array<HTMLDivElement | null>>([]);

  const handleSectionVisibilityChange = (id: string, isVisible: boolean) => {
    if (isVisible) {
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    slideInRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      slideInRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="font-sans text-gray-800 overflow-x-hidden bg-white">
      <NavigationDots sections={sections} activeSection={activeSection} />
      <ProgressBar />

      {/* Section 1: Introduction */}
      <Section id="intro" className="gradient-background text-white" onVisibilityChange={handleSectionVisibilityChange}>
        <div className="container mx-auto px-6 py-16 md:px-12 relative">
          <div className="slide-in" ref={el => slideInRefs.current[0] = el}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Understanding AI Agents</h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl">What problems are we solving? A non-technical presentation</p>
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <p className="text-lg mb-4">In this presentation we'll explore:</p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-orange-300 mr-3"></i>
                    <span>The confusion around AI terminology</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-orange-300 mr-3"></i>
                    <span>The spectrum of AI technologies</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-orange-300 mr-3"></i>
                    <span>The evolution toward AI agents</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check-circle text-orange-300 mr-3"></i>
                    <span>Real-world use cases and solutions</span>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <div className="absolute inset-0 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
                  <div className="absolute inset-4 bg-white bg-opacity-20 rounded-full"></div>
                  <div className="absolute inset-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <i className="fas fa-robot text-6xl text-orange-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#ai-confusion" className="text-white opacity-80 hover:opacity-100">
              <i className="fas fa-chevron-down text-xl"></i>
            </a>
          </div>
        </div>
      </Section>

      {/* Section 2: AI Terminology Confusion */}
      <Section id="ai-confusion" className="bg-white" onVisibilityChange={handleSectionVisibilityChange}>
        <div className="container mx-auto px-6 py-16 md:px-12">
          <div className="slide-in" ref={el => slideInRefs.current[1] = el}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-950">The Confusing World of AI Terminology</h2>
            <p className="text-lg mb-10">Have you ever found yourself confused when people talk about:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md grid-item">
                <h3 className="text-xl font-semibold mb-3 text-blue-800 flex items-center">
                  <i className="fas fa-comments mr-3 text-orange-500"></i>
                  AI Chatbots
                </h3>
                <p>Communication-focused AI that interacts through text or voice conversations.</p>
                <p className="mt-2 text-sm text-gray-600 italic">Example: ChatGPT, Customer Service Bots</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md grid-item">
                <h3 className="text-xl font-semibold mb-3 text-blue-800 flex items-center">
                  <i className="fas fa-hand-holding-heart mr-3 text-orange-500"></i>
                  AI Assistants
                </h3>
                <p>Helpers that provide information and perform simple tasks on command.</p>
                <p className="mt-2 text-sm text-gray-600 italic">Example: Siri, Alexa, Google Assistant</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md grid-item">
                <h3 className="text-xl font-semibold mb-3 text-blue-800 flex items-center">
                  <i className="fas fa-user-astronaut mr-3 text-orange-500"></i>
                  AI Copilots
                </h3>
                <p>Collaborative tools that work alongside humans to enhance productivity.</p>
                <p className="mt-2 text-sm text-gray-600 italic">Example: GitHub Copilot, Microsoft 365 Copilot</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md grid-item">
                <h3 className="text-xl font-semibold mb-3 text-blue-800 flex items-center">
                  <i className="fas fa-robot mr-3 text-orange-500"></i>
                  AI Agents
                </h3>
                <p>Semi-autonomous systems that can take actions based on goals and reasoning.</p>
                <p className="mt-2 text-sm text-gray-600 italic">Example: AutoGPT, BabyAGI</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md grid-item">
                <h3 className="text-xl font-semibold mb-3 text-blue-800 flex items-center">
                  <i className="fas fa-cogs mr-3 text-orange-500"></i>
                  Autonomous Agents
                </h3>
                <p>Systems that can operate independently with minimal human supervision.</p>
                <p className="mt-2 text-sm text-gray-600 italic">Example: Self-driving vehicles, Trading bots</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md grid-item">
                <h3 className="text-xl font-semibold mb-3 text-blue-800 flex items-center">
                  <i className="fas fa-sitemap mr-3 text-orange-500"></i>
                  Agentic Workflows
                </h3>
                <p>Systems where multiple AI components work together to accomplish complex goals.</p>
                <p className="mt-2 text-sm text-gray-600 italic">Example: Enterprise automation pipelines</p>
              </div>
            </div>
            
            <div className="bg-blue-800 bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-950">Key Insight</h3>
              <p className="text-lg">These aren't technical terms with precise definitions! They often describe:</p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-arrow-right text-orange-500 mt-1 mr-3"></i>
                  <span><strong>Communication style</strong> (chatbot = conversation-based)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-arrow-right text-orange-500 mt-1 mr-3"></i>
                  <span><strong>Relationship to humans</strong> (assistant vs. autonomous agent)</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-arrow-right text-orange-500 mt-1 mr-3"></i>
                  <span><strong>Level of independence</strong> (copilot vs. autonomous agent)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 3: AI Technology Spectrum */}
      <Section id="ai-spectrum" className="bg-gray-50" onVisibilityChange={handleSectionVisibilityChange}>
        <div className="container mx-auto px-6 py-16 md:px-12">
          <div className="slide-in" ref={el => slideInRefs.current[2] = el}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-950">The AI Technology Spectrum</h2>
            <p className="text-lg mb-8">Rather than getting caught up in terminology, let's understand how AI technologies exist on a spectrum from simple to complex:</p>
            
            <div className="overflow-x-auto">
              <div className="mobile-scroll md:grid md:grid-cols-6 gap-4 mb-10">
                <div className="spectrum-item bg-white p-5 rounded-lg shadow-md flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-800 bg-opacity-20 flex items-center justify-center mb-4">
                    <i className="fas fa-comment-dots text-2xl text-blue-800"></i>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Chatbots</h3>
                  <p className="text-sm">Simple conversational interfaces focused on specific tasks</p>
                </div>
                
                <div className="spectrum-item bg-white p-5 rounded-lg shadow-md flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-800 bg-opacity-20 flex items-center justify-center mb-4">
                    <i className="fas fa-database text-2xl text-blue-800"></i>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Knowledge Base</h3>
                  <p className="text-sm">Organized information collections for reference and retrieval</p>
                </div>
                
                <div className="spectrum-item bg-white p-5 rounded-lg shadow-md flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-800 bg-opacity-20 flex items-center justify-center mb-4">
                    <i className="fas fa-search text-2xl text-blue-800"></i>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">RAG Systems</h3>
                  <p className="text-sm">Retrieval-Augmented Generation combining search with AI responses</p>
                </div>
                
                <div className="spectrum-item bg-white p-5 rounded-lg shadow-md flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-800 bg-opacity-20 flex items-center justify-center mb-4">
                    <i className="fas fa-magic text-2xl text-blue-800"></i>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">AI Assistants</h3>
                  <p className="text-sm">Helpful AI systems that respond to queries and commands</p>
                </div>
                
                <div className="spectrum-item bg-white p-5 rounded-lg shadow-md flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-800 bg-opacity-20 flex items-center justify-center mb-4">
                    <i className="fas fa-user-astronaut text-2xl text-blue-800"></i>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Copilots</h3>
                  <p className="text-sm">AI systems that work alongside humans to enhance capabilities</p>
                </div>
                
                <div className="spectrum-item bg-white p-5 rounded-lg shadow-md flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-800 bg-opacity-20 flex items-center justify-center mb-4">
                    <i className="fas fa-robot text-2xl text-blue-800"></i>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">AI Agents</h3>
                  <p className="text-sm">Systems that can make decisions and take actions toward goals</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center mb-8">
              <div className="h-2 w-full bg-gradient-to-r from-blue-800 to-orange-500 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Key Observations</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
                    <span>Each technology serves different purposes and solves different problems</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
                    <span>Technologies often build upon each other's capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
                    <span>Understanding commonality is more important than the delineation</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Real-World Example</h3>
                <p className="mb-4">Consider a smart assistant like Amazon Alexa:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <i className="fas fa-arrow-right text-orange-500 mt-1 mr-3"></i>
                    <span>It's a <span className="font-semibold">chatbot</span> when you have a conversation with it</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-arrow-right text-orange-500 mt-1 mr-3"></i>
                    <span>It's an <span className="font-semibold">assistant</span> when it answers questions</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-arrow-right text-orange-500 mt-1 mr-3"></i>
                    <span>It's an <span className="font-semibold">agent</span> when it orders products or controls your smart home</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 4: Cognitive Architecture */}
      <Section id="cognitive-architecture" className="gradient-background text-white" onVisibilityChange={handleSectionVisibilityChange}>
        <div className="container mx-auto px-6 py-16 md:px-12">
          <div className="slide-in" ref={el => slideInRefs.current[3] = el}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">AI Tech: The Gradient of Cognitive Architecture</h2>
            <p className="text-lg mb-10">As we move across the AI spectrum, systems gain more sophisticated "cognitive" abilities:</p>
            
            <div className="relative">
              {/* Vertical Timeline */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-white bg-opacity-30 transform -translate-x-1/2 z-0"></div>
              
              {/* Timeline Items */}
              <div className="space-y-16 relative z-10">
                {/* Item 1 */}
                <div className="timeline-item md:flex items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 md:text-right">
                    <h3 className="text-xl font-bold mb-2 text-orange-300">Basic Understanding</h3>
                    <p>Simple pattern recognition and predefined responses based on keywords.</p>
                  </div>
                  <div className="timeline-dot hidden md:block absolute left-1/2 w-6 h-6 rounded-full bg-white transform -translate-x-1/2"></div>
                  <div className="md:w-1/2 md:pl-12">
                    <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                      <p className="text-sm"><strong>Example:</strong> Basic customer service chatbot that responds to predefined queries like "What are your hours?" with templated answers.</p>
                    </div>
                  </div>
                </div>
                
                {/* Item 2 */}
                <div className="timeline-item md:flex items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                    <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                      <p className="text-sm"><strong>Example:</strong> Google Search that understands your question, finds relevant information, and presents it in context.</p>
                    </div>
                  </div>
                  <div className="timeline-dot hidden md:block absolute left-1/2 w-6 h-6 rounded-full bg-white transform -translate-x-1/2"></div>
                  <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 order-1 md:order-2">
                    <h3 className="text-xl font-bold mb-2 text-orange-300">Contextual Understanding</h3>
                    <p>Can interpret meaning based on context, search for information, and generate relevant responses.</p>
                  </div>
                </div>
                
                {/* Item 3 */}
                <div className="timeline-item md:flex items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 md:text-right">
                    <h3 className="text-xl font-bold mb-2 text-orange-300">Tool Use & Reasoning</h3>
                    <p>Can use external tools, follow reasoning steps, and retain information across interactions.</p>
                  </div>
                  <div className="timeline-dot hidden md:block absolute left-1/2 w-6 h-6 rounded-full bg-white transform -translate-x-1/2"></div>
                  <div className="md:w-1/2 md:pl-12">
                    <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                      <p className="text-sm"><strong>Example:</strong> Microsoft Copilot that accesses your calendars, emails, and documents to help draft a comprehensive project update.</p>
                    </div>
                  </div>
                </div>
                
                {/* Item 4 */}
                <div className="timeline-item md:flex items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                    <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                      <p className="text-sm"><strong>Example:</strong> An AI agent that, when given the goal "Plan my anniversary dinner," can search restaurants, check reviews, make a reservation, and add it to your calendar.</p>
                    </div>
                  </div>
                  <div className="timeline-dot hidden md:block absolute left-1/2 w-6 h-6 rounded-full bg-white transform -translate-x-1/2"></div>
                  <div className="md:w-1/2 md:pl-12 mb-6 md:mb-0 order-1 md:order-2">
                    <h3 className="text-xl font-bold mb-2 text-orange-300">Goal-Directed Autonomy</h3>
                    <p>Can pursue multi-step goals independently, making decisions and adjusting based on outcomes.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white bg-opacity-10 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">The Building Blocks Approach</h3>
              <p className="mb-4">Think of these systems as constructed from the same fundamental building blocks, but with increasing sophistication and autonomy as you move up the spectrum.</p>
              <p>Just as a smartphone is both a phone, a calculator, a camera, and more — modern AI systems increasingly combine multiple capabilities in one package.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 5: Future Trends */}
      <Section id="future-trends" className="bg-white" onVisibilityChange={handleSectionVisibilityChange}>
        <div className="container mx-auto px-6 py-16 md:px-12">
          <div className="slide-in" ref={el => slideInRefs.current[4] = el}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-950">Future Trends & Convergence</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-800">Where We're Headed</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500 bg-opacity-20 flex items-center justify-center mr-4">
                      <i className="fas fa-robot text-orange-500"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Increasing Autonomy</h4>
                      <p>All AI technologies are moving toward greater independence and decision-making abilities.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500 bg-opacity-20 flex items-center justify-center mr-4">
                      <i className="fas fa-puzzle-piece text-orange-500"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Blurring Boundaries</h4>
                      <p>The lines between assistants, copilots, and agents are becoming increasingly indistinct.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500 bg-opacity-20 flex items-center justify-center mr-4">
                      <i className="fas fa-search-plus text-orange-500"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Knowledge Integration</h4>
                      <p>RAG capabilities are being incorporated into agents for better decision-making.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500 bg-opacity-20 flex items-center justify-center mr-4">
                      <i className="fas fa-users-cog text-orange-500"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1">Multi-Agent Systems</h4>
                      <p>Multiple specialized agents working together to tackle complex problems.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-blue-800">Technology Timeline</h3>
                
                <div className="relative">
                  {/* Vertical Timeline */}
                  <div className="absolute left-8 top-0 h-full w-1 bg-gray-200 z-0"></div>
                  
                  {/* Timeline Items */}
                  <div className="space-y-8 relative z-10">
                    <div className="flex">
                      <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-blue-800 flex items-center justify-center text-white font-bold z-10">2023</div>
                      <div className="ml-6 pt-2">
                        <h4 className="text-lg font-medium mb-1">LLMs & RAG</h4>
                        <p className="text-gray-600">Large Language Models with Retrieval-Augmented Generation bring AI to the mainstream.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-blue-800 flex items-center justify-center text-white font-bold z-10">2024</div>
                      <div className="ml-6 pt-2">
                        <h4 className="text-lg font-medium mb-1">Agent Frameworks</h4>
                        <p className="text-gray-600">Development of platforms that make it easier to build and deploy AI agents.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-blue-950 flex items-center justify-center text-white font-bold z-10">2025</div>
                      <div className="ml-6 pt-2">
                        <h4 className="text-lg font-medium mb-1">Enterprise Agents</h4>
                        <p className="text-gray-600">Enterprise-grade AI agents with governance, security, and compliance capabilities.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-blue-800 bg-opacity-10 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-950">Convergence of Technologies</h3>
              <p className="mb-4">The future isn't about distinct categories of AI — it's about integrated systems that combine the best capabilities of each approach:</p>
              
              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/3 px-2 mb-4">
                  <div className="h-full p-4 border border-blue-800 border-opacity-30 rounded-lg">
                    <h4 className="font-medium mb-2 text-blue-800">Assistant + Agent</h4>
                    <p className="text-sm text-gray-600">An AI that can both respond to questions and proactively take actions on your behalf.</p>
                  </div>
                </div>
                
                <div className="w-full md:w-1/3 px-2 mb-4">
                  <div className="h-full p-4 border border-blue-800 border-opacity-30 rounded-lg">
                    <h4 className="font-medium mb-2 text-blue-800">RAG + Agent</h4>
                    <p className="text-sm text-gray-600">An agent that can search through enterprise data to make informed decisions.</p>
                  </div>
                </div>
                
                <div className="w-full md:w-1/3 px-2 mb-4">
                  <div className="h-full p-4 border border-blue-800 border-opacity-30 rounded-lg">
                    <h4 className="font-medium mb-2 text-blue-800">Multi-Agent Systems</h4>
                    <p className="text-sm text-gray-600">Teams of specialized agents working together to solve complex problems.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 6: Use Cases */}
      <Section id="use-cases" className="bg-gray-50" onVisibilityChange={handleSectionVisibilityChange}>
        <div className="container mx-auto px-6 py-16 md:px-12">
          <div className="slide-in" ref={el => slideInRefs.current[5] = el}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-950">AI Use Cases: From Theory to Practice</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-10">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Featured Use Case: Navigate</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium mb-3 text-blue-950">Data Access Control</h4>
                  <p className="mb-4">How do we ensure AI agents can securely access the data they need while maintaining proper controls?</p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h5 className="font-medium mb-2">The Challenge:</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-exclamation-circle text-orange-500 mt-1 mr-3"></i>
                        <span>AI agents need access to various data sources to be effective</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-exclamation-circle text-orange-500 mt-1 mr-3"></i>
                        <span>Organizations must maintain security, compliance, and privacy</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-exclamation-circle text-orange-500 mt-1 mr-3"></i>
                        <span>Traditional access controls aren't designed for AI systems</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-3 text-blue-950">Real-World Example</h4>
                  <p className="mb-4">Imagine a healthcare organization using AI agents to assist with patient care:</p>
                  
                  <div className="p-4 border border-dashed border-gray-300 rounded-lg">
                    <div className="flex items-start mb-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-white mr-3">
                        <i className="fas fa-user-md"></i>
                      </div>
                      <div>
                        <h5 className="font-medium">Doctor's AI Assistant</h5>
                        <p className="text-sm text-gray-600">Needs access to patient records, medical histories, and treatment protocols</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start mb-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-white mr-3">
                        <i className="fas fa-user"></i>
                      </div>
                      <div>
                        <h5 className="font-medium">Patient's AI Assistant</h5>
                        <p className="text-sm text-gray-600">Needs access to only their own medical data and general health information</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-white mr-3">
                        <i className="fas fa-hospital"></i>
                      </div>
                      <div>
                        <h5 className="font-medium">Hospital Operations AI</h5>
                        <p className="text-sm text-gray-600">Needs access to anonymized patient data and operational systems</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold mb-6 text-blue-800">Feature Map: Navigate – Use Case 1</h3>
            
            <div className="overflow-x-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 min-w-[768px]">
                {/* Row 1 */}
                <div className="feature-card bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-medium mb-2 text-blue-800">Connectivity</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check text-orange-500 mt-1 mr-2"></i>
                      <span>SailPoint to Agent</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-orange-500 mt-1 mr-2"></i>
                      <span>Agent to data sources</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-orange-500 mt-1 mr-2"></i>
                      <span>Agent to Apps</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-orange-500 mt-1 mr-2"></i>
                      <span>Agent to Agent</span>
                    </li>
                  </ul>
                </div>
                
                <div className="feature-card bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-medium mb-2 text-blue-800">Access Control</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check text-orange-500 mt-1 mr-2"></i>
                      <span>Visibility</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-orange-500 mt-1 mr-2"></i>
                      <span>Control</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-orange-500 mt-1 mr-2"></i>
                      <span>Audit</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-orange-500 mt-1 mr-2"></i>
                      <span>Certify</span>
                    </li>
                  </ul>
                </div>
                
                <div className="feature-card bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-medium mb-2 text-blue-800">Lifecycle Management</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check text-orange-500 mt-1 mr-2"></i>
                      <span>Agent ID as machine ID</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-orange-500 mt-1 mr-2"></i>
                      <span>Agent OAuth</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-orange-500 mt-1 mr-2"></i>
                      <span>True Agent Identity Profile</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-orange-500 mt-1 mr-2"></i>
                      <span>Agent-specific Lifecycle state</span>
                    </li>
                  </ul>
                </div>
                
                <div className="feature-card bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-medium mb-2 text-blue-800">Multi-Agent Systems</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <i className="fas fa-check text-orange-500 mt-1 mr-2"></i>
                      <span>Agent-to-agent network</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-orange-500 mt-1 mr-2"></i>
                      <span>Agent create agent</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-orange-500 mt-1 mr-2"></i>
                      <span>E2E identity graph</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check text-orange-500 mt-1 mr-2"></i>
                      <span>New Agent types</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-800 bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-blue-950">Key Components for the Solution</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-orange-500 bg-opacity-20 flex items-center justify-center mr-3">
                      <i className="fas fa-plug text-orange-500"></i>
                    </div>
                    <h4 className="font-medium">Connectivity Expert</h4>
                  </div>
                  <p className="text-sm">Ensuring agents can securely connect to necessary data sources and applications.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-orange-500 bg-opacity-20 flex items-center justify-center mr-3">
                      <i className="fas fa-shield-alt text-orange-500"></i>
                    </div>
                    <h4 className="font-medium">DAS + Audit Expert</h4>
                  </div>
                  <p className="text-sm">Managing data access security and maintaining comprehensive audit trails.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-orange-500 bg-opacity-20 flex items-center justify-center mr-3">
                      <i className="fas fa-id-card text-orange-500"></i>
                    </div>
                    <h4 className="font-medium">Identity + MIS Expert</h4>
                  </div>
                  <p className="text-sm">Creating robust identity profiles for AI agents and managing identity security.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 7: Roadmap */}
      <Section id="roadmap" className="gradient-background text-white" onVisibilityChange={handleSectionVisibilityChange}>
        <div className="container mx-auto px-6 py-16 md:px-12">
          <div className="slide-in" ref={el => slideInRefs.current[6] = el}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">The Future Roadmap</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Near-Term: Agent Identity Security</h3>
                <p className="mb-6">Our immediate focus is on building a robust foundation for AI agent identity and access control:</p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-3 mt-1">
                      <i className="fas fa-fingerprint text-orange-300"></i>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">True Agent Identity Profiles</h4>
                      <p className="text-sm">Creating comprehensive identity records for AI agents</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-3 mt-1">
                      <i className="fas fa-key text-orange-300"></i>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">OAuth for Agents</h4>
                      <p className="text-sm">Secure authentication and authorization mechanisms</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-3 mt-1">
                      <i className="fas fa-search text-orange-300"></i>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Visibility and Control</h4>
                      <p className="text-sm">Knowing which agents have access to what resources</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-3 mt-1">
                      <i className="fas fa-clipboard-list text-orange-300"></i>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Agent Lifecycle Management</h4>
                      <p className="text-sm">Managing the full lifecycle of agent identities</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">Long-Term: Agent Networking & Marketplace</h3>
                <p className="mb-6">As agent technology matures, we'll expand into more advanced capabilities:</p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-3 mt-1">
                      <i className="fas fa-network-wired text-orange-300"></i>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Agent-to-Agent Networks</h4>
                      <p className="text-sm">Secure communication channels between cooperating agents</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-3 mt-1">
                      <i className="fas fa-store text-orange-300"></i>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Agent Marketplace</h4>
                      <p className="text-sm">Ecosystem for discovering and deploying specialized agents</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-3 mt-1">
                      <i className="fas fa-sitemap text-orange-300"></i>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">End-to-End Identity Graph</h4>
                      <p className="text-sm">Complete visibility into all agent relationships and accesses</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-3 mt-1">
                      <i className="fas fa-shield-alt text-orange-300"></i>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Security Agents</h4>
                      <p className="text-sm">Specialized agents that monitor and protect other agents</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">The Complete Picture</h3>
              <p className="mb-6">Our approach integrates multiple pieces of expertise to create a comprehensive solution:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 bg-white bg-opacity-5 rounded-lg">
                  <h4 className="font-medium mb-2">Connectivity</h4>
                  <p className="text-sm">Secure connections between agents and resources</p>
                </div>
                
                <div className="p-4 bg-white bg-opacity-5 rounded-lg">
                  <h4 className="font-medium mb-2">Access Control</h4>
                  <p className="text-sm">Visibility, control, audit, and certification</p>
                </div>
                
                <div className="p-4 bg-white bg-opacity-5 rounded-lg">
                  <h4 className="font-medium mb-2">AI Agent Extensions</h4>
                  <p className="text-sm">Enhanced capabilities for existing AI frameworks</p>
                </div>
                
                <div className="p-4 bg-white bg-opacity-5 rounded-lg">
                  <h4 className="font-medium mb-2">Global Context</h4>
                  <p className="text-sm">Orchestration across multiple environments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 8: Conclusion */}
      <Section id="conclusion" className="bg-white" onVisibilityChange={handleSectionVisibilityChange}>
        <div className="container mx-auto px-6 py-16 md:px-12">
          <div className="slide-in" ref={el => slideInRefs.current[7] = el}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-950">Key Takeaways</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="w-16 h-16 rounded-full bg-blue-800 flex items-center justify-center text-white mb-4">
                  <i className="fas fa-lightbulb text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Understanding the Spectrum</h3>
                <p>AI technologies exist on a spectrum from simple to complex, with increasing capabilities and autonomy.</p>
                <p className="mt-3 text-sm text-gray-600">Rather than focusing on labels like "chatbot" or "agent," understand the underlying capabilities.</p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="w-16 h-16 rounded-full bg-blue-800 flex items-center justify-center text-white mb-4">
                  <i className="fas fa-chart-line text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-800">The Evolution Continues</h3>
                <p>AI technologies are converging and evolving rapidly, making once-distinct categories increasingly blurred.</p>
                <p className="mt-3 text-sm text-gray-600">What matters most is solving real business problems, not the terminology we use.</p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="w-16 h-16 rounded-full bg-blue-950 flex items-center justify-center text-white mb-4">
                  <i className="fas fa-shield-alt text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-800">Security is Foundational</h3>
                <p>As AI agents become more capable and autonomous, robust identity and access controls become critical.</p>
                <p className="mt-3 text-sm text-gray-600">Building secure foundations now will enable safer adoption of advanced AI capabilities later.</p>
              </div>
            </div>
            
            <div className="bg-blue-800 bg-opacity-10 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-blue-950">Next Steps</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-medium mb-3 text-blue-800">For Organization Leaders</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
                      <span>Focus on business outcomes, not technical labels</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
                      <span>Prioritize governance, security, and compliance for AI systems</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
                      <span>Create a strategic roadmap for AI adoption that aligns with your business goals</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-3 text-blue-800">For Implementation Teams</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
                      <span>Build foundational capabilities for agent identity and access management</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
                      <span>Start with well-defined use cases that deliver clear business value</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-orange-500 mt-1 mr-3"></i>
                      <span>Develop expertise across the AI spectrum rather than focusing on a single technology</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <h4 className="text-lg font-medium mb-3 text-blue-800">Thank You!</h4>
                <p>Questions? Reach out to our team for more information on AI agent solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Presentation;
