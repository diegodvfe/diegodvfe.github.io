import ProjectRight from '../projects/ProjectRight';
import ProjectLeft from '../projects/ProjectLeft';
import SectionHeader from '../UI/SectionHeader';
import ParagraphLight from '../UI/ParagraphLight';
import H4Header from '../UI/H4Header';
// import CodeLibraryItem from './components/projects/CodeLibraryItem';

const ProjectsSection = props => {
    return (
        <div class='bg-black'>
            <section id="section-projects">
                <SectionHeader text={'Projects'} headerGradientStyle={'header-projects'} />
                <ProjectRight
                    projectTitle={'Task Manager'}
                    bgImage={'bg-to-do'}
                    techStack={['HTML5', 'CSS3', 'GitHub', 'JS', 'Figma', 'Netlify']}
                    buttonWatchItLive={'https://celadon-dragon-7a7e71.netlify.app/'}
                    buttonGitHub={''}>
                    <ParagraphLight>
                        <p>An application to be able to manage tasks, creating projects where users can create their accounts and add collaborators by project to be able to keep a better control with the pending tasks, they can also create, edit, delete tasks, the project is made with an Api -rest with fullStack MERN technologies.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <img src="https://github.com/url-classes/proyecto-grupal---frontend-tasksmern/blob/main/asessts/9.png?raw=true" alt='Diego Alvarado with a hat in a park on a sunny day.'/>
                    </ParagraphLight>
                </ProjectRight>
                <ProjectLeft
                    projectTitle={'To-Do app'}
                    bgImage={'bg-to-do'}
                    techStack={['HTML5', 'CSS3', 'GitHub', 'JS', 'Figma', 'Netlify']}
                    buttonWatchItLive={'https://colo-codes.github.io/mini-projects/todo-app/'}
                    buttonDescription={'https://blog.damiandemasi.com/my-first-vanilla-javascript-project-making-a-simple-to-do-app'}
                    buttonGitHub={'https://github.com/Colo-Codes/mini-projects/tree/main/todo-app'}>
                    <ParagraphLight>
                        <p>Doing courses and tutorials is great, but sometimes is difficult to evaluate how much are we actually learning. Watching video after video and coding along with the instructor gives us very good guidance, but it is not a realistic scenario. In a real-world job, we will have to solve problems and start figuring things out by ourselves (with the help of Google, of course ????). So, to test how much I was actually learning during the JavaScript course I was doing I decided to make a simple To-Do app in HTML, CSS and vanilla JavaScript.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <H4Header>Lessons learned</H4Header>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>Thanks to this project I could have a taste of how much work an application like this one takes.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>I learned about the importance of structuring HTML in a meaningful semantic way, and how a good HTML structure can make our lives easy when we start working on CSS and JavaScript in later stages of the project.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>I underestimated CSS ????. The classes names are a bit funny and messy, so in the future, I'll try to implement BEM notation and maybe SASS. I discovered that some behaviour that initially thought of was in the realm of JavaScript can easily be achieved with CSS, such as animations on elements.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>Regarding JavaScript, this was the first time I coded following the OOP paradigm and, despite feeling a bit out of my element, I now can see the potential that following this paradigm has.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>The project has a lot of room for improvement, but I wanted to live it like that to have a "snapshot" of my knowledge and skills up to the point in time where I was working on it.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/vAL7ocx5oZI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}></iframe>
                        </div>
                    </ParagraphLight>
                </ProjectLeft>
            </section>
            {/* <section id="section-code-library">
          <SectionHeader text={'Code Library'} headerGradientStyle={'header-projects'} class={'mt-52'} />
          <div class='flex flex-wrap md:flex-nowrap gap-10 max-w-5xl m-auto mt-32 px-2'>
            <div>
              <CodeLibraryItem codeLibraryTitle={'5 use cases of the useState ReactJS hook'} goTo={'#'}>
                <ParagraphLight><p>useState is a Hook that needs to be called inside a function component to add some local state to it.React will preserve this state between component re-renders.</p></ParagraphLight>
                <ParagraphLight><p>There are many use cases for the useState hook, but in this article, I will focus on the following five: </p></ParagraphLight>
                <ParagraphLight>
                  <ul class='list-disc ml-4'>
                    <li>State management</li>
                    <li>Conditional rendering</li>
                    <li>Toggle flags (true/false)</li>
                    <li>Counter</li>
                    <li>Get API data and store it in state</li>
                  </ul>
                </ParagraphLight>
              </CodeLibraryItem>
            </div>
            <div>
              <CodeLibraryItem codeLibraryTitle={'JavaScript array methods'} goTo={'#'}>
                <p>Vestibulum sed vestibulum libero, bibendum accumsan nisi.Duis mattis felis vitae pellentesque ultricies.Phasellus elementum feugiat metus vel fermentum.Aenean vitae nisl vel metus tincidunt rutrum.Nunc egestas, quam vitae porttitor lacinia, nisi purus pharetra ipsum, cursus iaculis neque massa vel.</p>
              </CodeLibraryItem>
            </div>
            <div>
              <CodeLibraryItem codeLibraryTitle={'CSS Flex and Grid'} goTo={'#'}>
                <p>Vestibulum sed vestibulum libero, bibendum accumsan nisi.Duis mattis felis vitae pellentesque ultricies.Phasellus elementum feugiat metus vel fermentum.Aenean vitae nisl vel metus tincidunt rutrum.Nunc egestas, quam vitae porttitor lacinia, nisi purus pharetra ipsum, cursus iaculis neque massa vel.</p>
              </CodeLibraryItem>
            </div>
          </div>
        </section> */}
        </div>
    );
};

export default ProjectsSection;