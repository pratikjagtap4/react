import { FaTwitter, FaLinkedin, FaGithub, FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom"
export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            className="rounded-full"
                            src="./src/assets/profile.jpeg"
                            alt="image"
                        />
                        <div className="flex mt-5 space-x-5 sm:justify-center sm:mt-0">
                            <Link to="#" className="text-gray-500 hover:text-gray-900">
                                <FaFacebook size={25} />

                            </Link>
                            <Link to="https://linkedin.com/in/pratikjagtap4" className="text-gray-500 hover:text-gray-900">

                                <FaLinkedin size={25} />
                            </Link>
                            <Link to="#" className="text-gray-500 hover:text-gray-900">
                                <FaTwitter size={25} />
                            </Link>
                            <Link to="https://github.com/pratikjagtap4" className="text-gray-500">
                                <FaGithub size={25} />
                                <span className="sr-only">GitHub account</span>
                            </Link>
                            <Link to="#" className="text-gray-500 hover:text-gray-900">
                                <FaInstagramSquare size={25} />
                            </Link>
                        </div>
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Pratik Jagtap
                            <span className="hidden sm:block text-xl mt-3">Fullstack Dev</span>
                        </h2>
                        <p className="my-6 text-gray-600">
                            Passionate computer engineer with a knack for problem-solving. Proficient in designing and implementing innovative software solutions. From coding to
                            problem-solving, I thrive on turning complex challenges into elegant solutions.
                        </p>
                        <h1 className="text-xl text-gray-900 font-bold ">Skills:</h1>
                        <div className="flex w-full justify-between my-3">
                            <ul >
                                <h3 className="text-xl my-3 text-gray-900 ">Front-end</h3>
                                <li className="mb-2 ps-4" >HTML</li>
                                <li className="mb-2 ps-4" >CSS</li>
                                <li className="mb-2 ps-4" >BootStrap</li>
                                <li className="mb-2 ps-4" >JavaScript</li>
                                <li className="mb-2 ps-4" >ReactJs</li>
                            </ul>
                            <ul >
                                <h3 className="text-xl my-3 text-gray-900">Back-end</h3>
                                <li className="mb-2 ps-4" >Java</li>
                                <li className="mb-2 ps-4" >C & C++</li>
                                <li className="mb-2 ps-4" >SpringBoot</li>
                                <li className="mb-2 ps-4" >Microservices</li>

                            </ul>
                            <ul >
                                <h3 className="text-xl my-3 text-gray-900">Dev Tools</h3>
                                <li className="mb-2 ps-4" >GitHub</li>
                                <li className="mb-2 ps-4" >DockerHub </li>
                                <li className="mb-2 ps-4" >Vs Studio</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}