import profil from '../assets/profil.png';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const Home = () => {
    const { t } = useTranslation();
    const [DownloadPopoutDisabled, setDownloadPopoutDisabled] = useState(true);

    return (
        <section className='fade-in relative w-full h-auto sm:h-screen mx-auto px-5 sm:px-10 '>
            <div className={`max-w-5xl w-full mx-auto px-5 flex flex-col sm:flex-row items-center justify-center h-full gap-10 sm:gap-20 ${DownloadPopoutDisabled ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-50 blur-sm '} transition-all duration-300 ease-in-out`}>
                <div className='flex flex-col items-center sm:items-start justify-center h-full'>
                    <div>
                        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold'> {t('home.greeting')} </h1>
                        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-lime-500 dark:text-purple-500'> Paweł Szeliga</h1>
                        <p className='text-base sm:text-lg md:text-xl mt-3 text-center sm:text-left'>
                            Fullstack developer
                        </p>
                    </div>
                    <div>
                        <h1 className='text-2xl sm:text-3xl font-bold mt-5'>{t('home.skills_title')}</h1>
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
                            <button
                                onClick={() => { setDownloadPopoutDisabled(false) }}
                                className='text-lg sm:text-lg text-lime-500 cursor-pointer hover:text-lime-600 border-2 border-lime-500 dark:text-purple-500 dark:hover:text-purple-600 dark:border-purple-500 dark:hover:border-purple-600 rounded-full px-4 py-2 transition duration-200 ease-in-out transform hover:scale-105 align-center justify-center flex gap-1 focus:outline-none focus:ring-lime-300 dark:focus:ring-purple-300 focus:ring-4'
                            >
                                {t('home.download_cv')}
                                <span className="material-symbols-outlined">
                                    download
                                </span>
                            </button>
                        </div>
                        <div className='flex gap-4'>
                            <a
                                href='https://www.linkedin.com/in/paweł-szeliga-954b23349'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='devicon-linkedin-plain text-lg sm:text-xl font-bold text-lime-500 hover:text-lime-600 border-2 border-lime-500 dark:text-purple-500 dark:hover:text-purple-600 dark:border-purple-500 dark:hover:border-purple-600 rounded-full px-4 py-2 transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-lime-300 dark:focus:ring-purple-300 focus:ring-4'
                            >
                            </a>
                            <a
                                href='https://github.com/PawelSzeliga23'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='devicon-github-original text-lg sm:text-xl font-bold text-lime-500 hover:text-lime-600 border-2 border-lime-500 dark:text-purple-500 dark:hover:text-purple-600 dark:border-purple-500 dark:hover:border-purple-600 rounded-full px-4 py-2 transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-lime-300 dark:focus:ring-purple-300 focus:ring-4'
                            >
                            </a>
                        </div>
                    </div>
                </div>
                <div className="relative w-60 sm:w-60 md:w-80 lg:w-96">
                    <motion.div
                        className="w-60 sm:w-60 md:w-80 lg:w-96 h-60 sm:h-60 md:h-80 lg:h-96 rounded-full border-4 border-dashed border-lime-500 dark:border-purple-500"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <img src={profil} alt='avatar' loading='lazy' decoding='async' className='w-60 sm:w-60 md:w-80 lg:w-96 rounded-full' />
                    </div>
                </div>
            </div>
            {!DownloadPopoutDisabled &&
                <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full ">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-lime-500 dark:text-purple-500">{t('home.download_cv')}</h2>
                            <button
                                onClick={() => setDownloadPopoutDisabled(true)}
                                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none cursor-pointer"
                                aria-label="Close"
                            >
                                <span className="material-symbols-outlined">
                                    close
                                </span>
                            </button>
                        </div>
                        <div className="border-t border-gray-300 my-4" />
                        <div className="flex flex-col gap-4">
                            <a
                                href="/Paweł_Szeliga_CV_PL.pdf"
                                download
                                className="w-full flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded-md"
                            >
                                Paweł_Szeliga_CV_PL.pdf
                                <span className="material-symbols-outlined">
                                    download
                                </span>
                            </a>
                            <a
                                href="/Paweł_Szeliga_CV_ENG.pdf"
                                download
                                className="w-full flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded-md"
                            >
                                Paweł_Szeliga_CV_ENG.pdf
                                <span className="material-symbols-outlined">
                                    download
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            }
        </section>
    );
};

export default Home;
