import '../styles/skills.css'

const Skills = () => {
  return (
    <div>
        <section id="skills" className="skills">
            {/* <div className="container">  */}
                <h2 className="text-white main-font">Technical <span className="text-blue main-font">Skills</span></h2>
                <ul className="skills-icons">
                    <li><span className="iconify cc" data-icon="devicon:c" data-inline="false" data-width="90px" data-height="90px"></span><span className="text-center">C</span></li> 
                    <li><img src={process.env.PUBLIC_URL + '/logos/cpp_logo.png'} alt="cpp Logo" width="70px" height="90px" /><span className="text-center">C++</span></li>
                    <li><img src={process.env.PUBLIC_URL + '/logos/cs_logo.png'} alt="c# Logo" width="80px" height="90px" /><span className="text-center">C#</span></li>
                    <li><span className="iconify jj" data-icon="logos:java" data-inline="false" data-width="90px" data-height="90px"></span><span>Java</span></li>
                    <li><span className="iconify" data-icon="logos:python" data-inline="false" data-width="90px" data-height="90px"></span><span>Python</span></li>
                    <li><span className="iconify" data-icon="vscode-icons:file-type-html" data-inline="false" data-width="90px" data-height="90px"></span><span>HTML</span></li>
                    <li><span className="iconify" data-icon="vscode-icons:file-type-css" data-inline="false" data-width="90px" data-height="90px"></span><span>CSS</span></li>
                    <li><span className="iconify" data-icon="logos:javascript" data-inline="false" data-width="90px" data-height="90px"></span><span>JavaScript</span></li>
                    <li><span className="iconify" data-icon="logos:react" data-inline="false" data-width="90px" data-height="90px"></span><span>React</span></li>     
                    <li><span className="iconify" data-icon="logos:nodejs-icon" data-inline="false" data-width="90px" data-height="90px"></span><span>Node.js</span></li>
                    <li><span className="iconify" data-icon="logos:flutter" data-inline="false" data-width="90px" data-height="90px"></span><span>Flutter</span></li> 
                    <li><span className="iconify" data-icon="logos:mysql" data-inline="false" data-width="90px" data-height="90px"></span><span>MySQL</span></li>
                    <li><span className="iconify" data-icon="devicon:mongodb-wordmark" data-inline="false" data-width="90px" data-height="90px"></span><span className="text-center">MongoDB</span></li>         
                    <li><span className="iconify" data-icon="logos:redis" data-inline="false" data-width="90px" data-height="90px"></span><span>Redis</span></li>
                    <li><span className="iconify" data-icon="logos:elasticsearch" data-inline="false" data-width="90px" data-height="90px"></span><span>Elastic Search</span></li>
                    <li><span className="iconify" data-icon="logos:firebase" data-inline="false" data-width="90px" data-height="90px"></span><span>Firebase</span></li>
                    {/* <li><span className="iconify" data-icon="logos:kubernetes" data-inline="false" data-width="90px" data-height="90px"></span><span>kubernetes</span></li> */}
                    <li><span className="iconify" data-icon="flat-color-icons:linux" data-inline="false" data-width="90px" data-height="90px"></span><span>Linux</span></li>            
                    {/* <li><span className="iconify" data-icon="devicon:docker-wordmark" data-inline="false" data-width="100px" data-height="100px"></span><span>Docker</span></li> */}
                    <li><span className="iconify" data-icon="logos:git-icon" data-inline="false" data-width="90px" data-height="90px"></span><span>Git</span></li>
                    {/* <li><span className="iconify" data-icon="carbon:machine-learning-model" data-inline="false" data-width="90px" data-height="90px"></span><span>Machine Learning</span></li>            */}
                    {/* <li><span className="iconify aws-logo" data-icon="logos:aws" data-inline="false" data-width="90px" data-height="90px"></span><span className="text-center">Amazon Web <br/> Services</span></li>   */}
                </ul>
            {/* </div> */}
            
        </section>
    </div>
  )
}

export default Skills
