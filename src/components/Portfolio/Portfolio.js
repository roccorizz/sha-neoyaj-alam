import React from "react";
import "./Portfolio.css"
import { Carousel } from "flowbite-react";
const Portfolio = () => {
    return (
        <section id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">My recent works</span>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 px-5">
                <Carousel slideInterval={3000}
                >
                    <div className="flex w-full  gap-4">
                        <div className="w-1/2">
                            <img src="https://i.ibb.co/Jx0gJVq/1project.png" alt="" />
                        </div>
                        <div className="w-1/2">
                            <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Property Homie Rocco
                            </h5>
                            <p className="font-normal text-xl pt-10 text-gray-700 dark:text-gray-400">
                                Its a Real-estate Agent website.In this website,an user
                                can get to know about the real-estate agent and his services. Besides, they can
                                have a look into multiple property listings of him. There is a contact form whereas
                                an user can contact with the agent for any property query.
                            </p>
                            <span className="portfolio__button">View Details <i className="uil uil-arrow-right portfolio__button-icon"></i></span>
                        </div>
                    </div>

                    <div className="flex w-full gap-4">

                        <div className="w-1/2">

                            <img src="https://i.ibb.co/F7qVg6Q/2project.png" alt="" />
                        </div>
                        <div className="w-1/2">

                            <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Wheelanes
                            </h5>
                            <p className="font-normal text-xl pt-10 text-gray-700 dark:text-gray-400">
                                A car resale platform whereas, buyer,seller and admin - three roles
                                are available for different functionalities in that website. Buyer can see featured
                                cars,different types of cars and can book a car for meeting up with the seller and
                                to have a look of that car for real .
                            </p>
                            <span className="portfolio__button">View Details <i className="uil uil-arrow-right portfolio__button-icon"></i></span>
                        </div>
                    </div>

                    <div className="flex w-full gap-4">

                        <div className="w-1/2">

                            <img src="https://i.ibb.co/rtQWp0h/3project.png" alt="" />
                        </div>
                        <div className="w-1/2">

                            <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                                P-learning
                            </h5>
                            <p className="font-normal text-xl pt-10 text-gray-700 dark:text-gray-400">
                                It is an e-learning website for students of any field. A student can
                                search for a course and get to know about its details. Anyone can enroll in any
                                course. Besides, a user can download the pdf format of any course details.
                            </p>
                            <span className="portfolio__button">View Details <i className="uil uil-arrow-right portfolio__button-icon"></i></span>
                        </div>
                    </div>

                </Carousel>
            </div>


        </section>
    );
}

export default Portfolio;