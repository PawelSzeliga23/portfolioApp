import profil from '../assets/profil.png';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <section className='fade-in relative w-full h-auto sm:h-screen mx-auto px-5 sm:px-10 max-sm:pt-20'>
            <div className='max-w-5xl w-full mx-auto px-5 flex flex-col sm:flex-row items-center justify-center h-full gap-10 sm:gap-20'>
                <div className='flex flex-col items-center sm:items-start justify-center h-full'>
                    <div>
                        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold'> Hi I'm</h1>
                        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-lime-500'> Paweł Szeliga</h1>
                        <p className='text-base sm:text-lg md:text-xl mt-3 text-center sm:text-left'>
                            I really enjoy computer science and am currently studying it while gaining experience through my personal and academic projects.
                        </p>
                    </div>
                    <div>
                        <h1 className='text-2xl sm:text-3xl font-bold mt-5'>Skills :</h1>
                        <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-3'>
                            <li className='flex items-center gap-1'><i className="devicon-react-plain colored text-2xl"></i> React</li>
                            <li className='flex items-center gap-1'><i className="devicon-typescript-plain colored text-2xl"></i> TypeScript</li>
                            <li className='flex items-center gap-1'><i className="devicon-javascript-plain colored text-2xl"></i> JavaScript</li>
                            <li className='flex items-center gap-1'><i className="devicon-html5-plain colored text-2xl"></i> HTML</li>
                            <li className='flex items-center gap-1'><i className="devicon-css3-plain colored text-2xl"></i> CSS</li>
                            <li className='flex items-center gap-1'><i className="devicon-cplusplus-plain colored text-2xl"></i> C++</li>
                            <li className='flex items-center gap-1'><i className="devicon-csharp-plain colored text-2xl"></i> C#</li>
                            <li className='flex items-center gap-1'><i className="devicon-dotnetcore-plain colored text-2xl"></i> ASP.NET</li>
                            <li className='flex items-center gap-1'><i className="devicon-python-plain colored text-2xl"></i> Python</li>
                            <li className='flex items-center gap-1'><i className="devicon-mysql-plain colored text-2xl"></i> SQL</li>
                            <li className='flex items-center gap-1'><i className="devicon-java-plain colored text-2xl"></i> Java</li>
                        </ul>
                    </div>
                    <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row items-center justify-center gap-10 mt-5'>
                        <div>
                            <a
                                href='/public/Paweł_Szeliga_CV.pdf'
                                download={true}
                                className='text-lg sm:text-lg text-lime-500 hover:text-lime-600 border-2 border-lime-500 rounded-full px-4 py-2 transition duration-200 ease-in-out transform hover:scale-105 align-center justify-center flex gap-1'
                            >
                                Download CV
                                <span className="material-symbols-outlined">
                                    download
                                </span>
                            </a>
                        </div>
                        <div className='flex gap-4'>
                            <a
                                href='https://www.linkedin.com/in/paweł-szeliga-954b23349'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='devicon-linkedin-plain text-lg sm:text-xl font-bold text-lime-500 hover:text-lime-600 border-2 border-lime-500 rounded-full px-4 py-2 transition duration-200 ease-in-out transform hover:scale-105'
                            >
                            </a>
                            <a
                                href='https://github.com/PawelSzeliga23'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='devicon-github-original text-lg sm:text-xl font-bold text-lime-500 hover:text-lime-600 border-2 border-lime-500 rounded-full px-4 py-2 transition duration-200 ease-in-out transform hover:scale-105'
                            >
                            </a>
                        </div>
                    </div>
                </div>
                <div className="relative w-60 sm:w-60 md:w-80 lg:w-96">
                    <motion.div
                        className="w-60 sm:w-60 md:w-80 lg:w-96 h-60 sm:h-60 md:h-80 lg:h-96 rounded-full border-4 border-dashed border-lime-500"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <img src={profil} alt='avatar' className='w-60 sm:w-60 md:w-80 lg:w-96 rounded-full' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
