import './Works2.css';
import { projects } from "../constants";
import { styles } from "../styles";
import { github } from '../assets';
import { useInView } from 'react-intersection-observer';

const Works = () => {
    const { ref: cl1Ref, inView: cl1Inview } = useInView({ triggerOnce: true });
    const { ref: cl2Ref, inView: cl2Inview } = useInView({ triggerOnce: true });

    return (
        <div className="small_screen_Con">
            <div ref={cl1Ref} className={cl1Inview ? "header_Con observerCatch" : "header_Con"}>
                <p className={`${styles.heroSubText}`}>My work</p>
                <h2 className={`${styles.heroHeadText}`}>Projects.</h2>
            </div>
            <div className="w-full flex">
                <p ref={cl2Ref} className={`mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] ${cl2Inview ? "observer catch" : "observer await"}`}>
                    The following projects highlight my expertise and experience through real-world examples of my work. Each project includes a brief overview, along with links to code repositories and live demos. These showcase my ability to tackle complex challenges, work with diverse technologies, and efficiently manage projects from concept to completion.
                </p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7">
                {projects.map((project, index) => {
                    const { ref: projectRef, inView: projectInView } = useInView({ triggerOnce: true });

                    return (
                        <div
                            ref={projectRef}
                            key={index}
                            className={projectInView ? "project_Con observerCatch" : "project_Con"}
                        >
                            <div className="bg-black-100 p-8 rounded-2xl sm:w-[360px] w-full">
                                <div className="relative w-full h-[230px]">
                                    <img
                                        src={project.image}
                                        alt="project_image"
                                        className="w-full h-full object-cover rounded-2xl"
                                    />
                                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                                        <div
                                            onClick={() => window.open(project.source_code_link, "_blank")}
                                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                                        >
                                            <img
                                                src={github}
                                                alt="source code"
                                                className="w-1/2 h-1/2 object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
                                    <p className="mt-2 text-secondary text-[14px]">{project.description}</p>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <p
                                            key={`${project.name}-${tag.name}`}
                                            className={`text-[14px] ${tag.color}`}
                                        >
                                            #{tag.name}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Works;
