import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">Portfolio</span>
            <div className="space-x-6">
              <a href="#about" className="hover:text-blue-600">About</a>
              <a href="#projects" className="hover:text-blue-600">Projects</a>
              <a href="#skills" className="hover:text-blue-600">Skills</a>
              <a href="#contact" className="hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-10">
        <div className="container mx-auto px-4 pt-16">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mt-10 lg:mt-0">
              <h1 className="text-5xl font-bold mb-6">
                안녕하세요 👋
                <br />
                <span className="text-blue-600">웹 개발자</span>입니다
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                창의적이고 효율적인 웹 솔루션을 만드는 것을 좋아합니다.
                사용자 경험을 최우선으로 생각하며, 최신 기술 트렌드를 따르고 있습니다.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
                프로젝트 보기
              </button>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="w-64 h-64 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-600">저는 이런 개발자입니다</h3>
              <p className="text-gray-600 leading-relaxed">
                3년차 웹 개발자로서 프론트엔드와 백엔드 모두에 관심을 가지고 있습니다.
                사용자 중심의 인터페이스 설계와 효율적인 서버 로직 구현에 특별한 관심을 가지고 있으며,
                새로운 기술을 배우고 적용하는 것을 즐깁니다.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>문제 해결 중심적 사고</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>지속적인 학습과 성장</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>효율적인 협업 능력</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="font-semibold mb-4">Frontend</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="font-semibold mb-4">Backend</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="font-semibold mb-4">Tools</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>Git</li>
                  <li>Docker</li>
                  <li>VS Code</li>
                  <li>Figma</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="font-semibold mb-4">Soft Skills</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>팀워크</li>
                  <li>의사소통</li>
                  <li>문제해결</li>
                  <li>시간관리</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-4xl">🛍️</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">E-commerce Platform</h3>
                <p className="text-gray-600 mb-4">
                  React와 Node.js를 활용한 현대적인 쇼핑몰 플랫폼입니다.
                  사용자 경험을 최우선으로 고려한 UI/UX를 구현했습니다.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">MongoDB</span>
                </div>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                  자세히 보기 →
                </a>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-4xl">📱</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">SNS App</h3>
                <p className="text-gray-600 mb-4">
                  Next.js와 TypeScript를 사용한 소셜 네트워크 서비스입니다.
                  실시간 채팅과 게시물 공유 기능을 구현했습니다.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Socket.io</span>
                </div>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                  자세히 보기 →
                </a>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-4xl">📊</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Dashboard System</h3>
                <p className="text-gray-600 mb-4">
                  데이터 시각화에 중점을 둔 관리자 대시보드입니다.
                  다양한 차트와 실시간 데이터 업데이트를 구현했습니다.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Vue.js</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">D3.js</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Express</span>
                </div>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                  자세히 보기 →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
          <div className="max-w-4xl mx-auto">
            {/* Frontend Skills */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">Frontend Development</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                    <span className="text-2xl">⚛️</span>
                  </div>
                  <h4 className="font-medium mb-2">React</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                    <span className="text-2xl">🔷</span>
                  </div>
                  <h4 className="font-medium mb-2">TypeScript</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h4 className="font-medium mb-2">Responsive</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h4 className="font-medium mb-2">Tailwind</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '88%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Skills */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">Backend Development</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                    <span className="text-2xl">🟢</span>
                  </div>
                  <h4 className="font-medium mb-2">Node.js</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <h4 className="font-medium mb-2">Express</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                    <span className="text-2xl">🍃</span>
                  </div>
                  <h4 className="font-medium mb-2">MongoDB</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                    <span className="text-2xl">🐳</span>
                  </div>
                  <h4 className="font-medium mb-2">Docker</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '70%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Skills */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-600">Development Tools & Practices</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                    <span className="text-2xl">📦</span>
                  </div>
                  <h4 className="font-medium mb-2">Git</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <h4 className="font-medium mb-2">CI/CD</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                    <span className="text-2xl">🧪</span>
                  </div>
                  <h4 className="font-medium mb-2">Testing</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h4 className="font-medium mb-2">Problem Solving</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-blue-600">연락처 정보</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl">📧</span>
                      </div>
                      <div>
                        <p className="text-gray-600">Email</p>
                        <a href="mailto:your.email@example.com" className="text-blue-600 hover:text-blue-800">
                          your.email@example.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl">📱</span>
                      </div>
                      <div>
                        <p className="text-gray-600">Phone</p>
                        <a href="tel:+82-10-1234-5678" className="text-blue-600 hover:text-blue-800">
                          +82 10-1234-5678
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl">💼</span>
                      </div>
                      <div>
                        <p className="text-gray-600">GitHub</p>
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                          github.com/yourusername
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-blue-600">메시지 보내기</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        이름
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="홍길동"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        이메일
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        메시지
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="메시지를 입력해주세요..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      보내기
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
