import { AboutDecoration } from './svgsDecoration'
import { ToolboxDecoration } from './svgsDecoration'
export function About() {
  const tools = [
    {
      name: 'HTML 5',
      icon: (
        <svg role='img' viewBox='0 0 24 24' fill='#E44D26' xmlns='http://www.w3.org/2000/svg'>
          <title>HTML5</title>
          <path d='M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z' />
        </svg>
      ),
    },
    {
      name: 'CSS',
      icon: (
        <svg role='img' viewBox='0 0 24 24' fill='#264DE4' xmlns='http://www.w3.org/2000/svg'>
          <title>Sass</title>
          <path d='M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM9.615 15.998c.175.645.156 1.248-.024 1.792l-.065.18c-.024.061-.052.12-.078.176-.14.29-.326.56-.555.81-.698.759-1.672 1.047-2.09.805-.45-.262-.226-1.335.584-2.19.871-.918 2.12-1.509 2.12-1.509v-.003l.108-.061zm9.911-10.861c-.542-2.133-4.077-2.834-7.422-1.645-1.989.707-4.144 1.818-5.693 3.267C4.568 8.48 4.275 9.98 4.396 10.607c.427 2.211 3.457 3.657 4.703 4.73v.006c-.367.18-3.056 1.529-3.686 2.925-.675 1.47.105 2.521.615 2.655 1.575.436 3.195-.36 4.065-1.649.84-1.261.766-2.881.404-3.676.496-.135 1.08-.195 1.83-.104 2.101.24 2.521 1.56 2.43 2.1-.09.539-.523.854-.674.944-.15.091-.195.12-.181.181.015.09.091.09.21.075.165-.03 1.096-.45 1.141-1.471.045-1.29-1.186-2.729-3.375-2.7-.9.016-1.471.091-1.875.256-.03-.045-.061-.075-.105-.105-1.35-1.455-3.855-2.475-3.75-4.41.03-.705.285-2.564 4.8-4.814 3.705-1.846 6.661-1.335 7.171-.21.733 1.604-1.576 4.59-5.431 5.024-1.47.165-2.235-.404-2.431-.615-.209-.225-.239-.24-.314-.194-.12.06-.045.255 0 .375.12.3.585.825 1.396 1.095.704.225 2.43.359 4.5-.45 2.324-.899 4.139-3.405 3.614-5.505l.073.067z' />
        </svg>
      ),
    },
    {
      name: 'Javascript',
      icon: (
        <svg role='img' fill='#F7DF1E' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <title>JavaScript</title>
          <path d='M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z' />
        </svg>
      ),
    },
    {
      name: 'Node.js',
      icon: (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='#339933'>
          <path d='M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.023.185.015l1.874 1.12c.074.037.166.037.228 0l7.314-4.237c.074-.036.119-.11.119-.202V7.768c0-.081-.045-.165-.119-.201l-7.314-4.219c-.074-.037-.166-.037-.228 0L4.557 7.566c-.073.036-.119.131-.119.201v8.457c0 .081.045.165.119.202l2 1.157c1.082.548 1.762-.095 1.762-.735V8.502c0-.119.095-.212.213-.212h.926c.118 0 .213.093.213.212v8.346c0 1.449-.788 2.287-2.156 2.287-.422 0-.752 0-1.668-.459l-1.921-1.102c-.479-.278-.772-.793-.772-1.347V7.768c0-.554.293-1.07.772-1.347l7.314-4.237c.467-.264 1.082-.264 1.544 0l7.314 4.237c.479.277.772.792.772 1.347v8.457c0 .554-.293 1.069-.772 1.347l-7.314 4.237c-.24.128-.497.202-.772.202zm2.316-5.847c-3.206 0-3.877-.147-3.877-1.688 0-.073.059-.132.132-.132h.944c.073 0 .124.053.124.126.084.569.335.842 2.677.842 1.651 0 2.353-.374 2.353-1.252 0-.506-.198-.881-2.754-1.135-2.134-.21-3.453-.683-3.453-2.39 0-1.574 1.326-2.511 3.55-2.511 2.499 0 3.733.869 3.89 2.729.006.061-.016.116-.061.161-.045.038-.107.062-.172.062h-.949c-.069 0-.126-.052-.14-.119-.155-.747-.564-1.012-2.567-1.012-1.892 0-2.114.661-2.114 1.157 0 .601.262.776 2.673 1.117 2.404.34 3.534.821 3.534 2.397-.001 1.7-1.411 2.617-3.871 2.617z' />
        </svg>
      ),
    },
    {
      name: 'MongoDB',
      icon: (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='#47A248'>
          <path d='M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z' />
        </svg>
      ),
    },
    {
      name: 'Github',
      icon: (
        <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='#808080'>
          <title>GitHub</title>
          <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
        </svg>
      ),
    },
  ]

  return (
    <section id='about' className='about'>
      <div className='about-content'>
        <div className='section-title-container' data-aos='fade-down'>
          <AboutDecoration />
          <h2 className='section-title' data-aos='fade-down'>
            About Me
          </h2>
        </div>
        <div className='about-grid'>
          <div data-aos='fade-right' className='about-text'>
            <p>
              I'm a Full Stack Developer with a passion for building web applications that are both functional and
              user-friendly. I specialize in modern web technologies and enjoy solving complex problems through clean,
              efficient code.
            </p>
          </div>
          <div className='skills-list'>
            <div className='section-title-container' data-aos='fade-down'>
              <ToolboxDecoration />
              <h3>My Toolbox</h3>
            </div>
            <div data-aos='flip-down' data-aos-delay='200' className='tools-grid'>
              {tools.map((tool, index) => (
                <div key={index} className='tool-item'>
                  <div className='tool-icon'>{tool.icon}</div>
                  <span className='tool-name'>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
