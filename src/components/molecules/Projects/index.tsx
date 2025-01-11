import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';
import { listProject } from '@/utils/data';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    useDisclosure
} from "@nextui-org/react";

type Project = {
    title: string;
    subtitle: string;
    description: string;
    images: StaticImageData[];
    tech: { src: StaticImageData; label: string }[];
    url: string;
    github: string;
    privateRepo: boolean;
    type: string;
    platform: string;
};

export default function Projects() {
    const [activeSlides, setActiveSlides] = useState(listProject.map(() => 0));
    const [selectedProject, setSelectedProject] = useState<Project>();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    useEffect(() => {
        const intervals = listProject.map((_, index) =>
            setInterval(() => {
                setActiveSlides((prevSlides) =>
                    prevSlides.map((slide, i) =>
                        i === index ? (slide + 1) % listProject[index].images.length : slide
                    )
                );
            }, 3000) // Change slide every 3 seconds
        );

        return () => {
            intervals.forEach(clearInterval); // Clear intervals on unmount
        };
    }, []);

    const handleImageClick = (project: any) => {
        setSelectedProject(project);
        onOpen();
    };

    return (
        <div className="bg-gray-100 py-10 px-5">
            <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">My Projects</h1>
            <div className="space-y-10">
                {listProject.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row justify-between items-start"
                    >
                        <div className="p-5 w-full lg:w-1/2 flex flex-col gap-5 my-auto">
                            <div className='flex flex-col gap-3'>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
                                    <h3 className="text-lg text-gray-500">{project.subtitle}</h3>
                                </div>

                                <p className="text-gray-700">{project.description}</p>
                            </div>

                            <div className='flex flex-col gap-3'>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, techIndex) => (
                                        <div key={techIndex} className='tooltip' data-tip={tech.label}>
                                            <Image
                                                src={tech.src}
                                                alt={tech.label}
                                                className="h-10 w-10 object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-4 items-center">
                                    <a
                                        href={project.url}
                                        target={project.url !== '' || null || undefined ? `_blank` : `_self`}
                                        rel="noopener noreferrer"
                                        className="text-blue-600 font-medium hover:underline"
                                    >
                                        Live Demo
                                    </a>
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 font-medium hover:underline"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                    {project.privateRepo && (
                                        <span className="text-gray-500 italic">Private Repository</span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/5 p-5">
                            <div className="overflow-hidden relative w-full h-auto">
                                <div
                                    className="flex transition-transform duration-500"
                                    style={{
                                        transform: `translateX(-${activeSlides[index] * 100}%)`,
                                    }}
                                >
                                    {project.images.map((image, imageIndex) => (
                                        <button
                                            key={imageIndex}
                                            className="w-full flex-shrink-0"
                                            onClick={() => handleImageClick(project)}
                                        >
                                            <div className="relative w-full h-64 lg:h-72">
                                                <Image
                                                    src={image}
                                                    alt="Project Screenshot"
                                                    className="object-contain rounded-lg"
                                                    fill
                                                />
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-500 text-sm text-center">
                                Click on image to see bigger
                            </p>
                            <div className="flex w-full justify-center gap-2 py-2">
                                {project.images.map((_, imageIndex) => (
                                    <button
                                        key={imageIndex}
                                        onClick={() =>
                                            setActiveSlides((prevSlides) =>
                                                prevSlides.map((slide, i) =>
                                                    i === index ? imageIndex : slide
                                                )
                                            )
                                        }
                                        className={`border-2 rounded-full w-6 ${activeSlides[index] === imageIndex
                                                ? "border-gray-600"
                                                : "hover:border-gray-300"
                                            }`}
                                    ></button>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="4xl" className="my-auto">
                    <ModalContent>
                        <ModalHeader>
                            <h2 className="text-lg font-bold">{selectedProject.title}</h2>
                        </ModalHeader>
                        <ModalBody>
                            <div className="relative w-full overflow-hidden">
                                <div
                                    className="flex transition-transform duration-500"
                                    style={{
                                        transform: `translateX(-${activeSlides[listProject.indexOf(selectedProject)] * 100
                                            }%)`,
                                    }}
                                >
                                    {selectedProject.images.map((image, index) => (
                                        <Image
                                            key={index}
                                            src={image}
                                            alt="Modal Project Screenshot"
                                            className="w-full object-contain max-h-[24rem] lg:max-h-[36rem] rounded-lg"
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="flex w-full justify-center gap-2 py-2">
                                {selectedProject.images.map((_, imageIndex) => (
                                    <button
                                        key={imageIndex}
                                        onClick={() =>
                                            setActiveSlides((prevSlides) =>
                                                prevSlides.map((slide, i) =>
                                                    i === listProject.indexOf(selectedProject) ? imageIndex : slide
                                                )
                                            )
                                        }
                                        className={`border-2 rounded-full w-6 ${activeSlides[listProject.indexOf(selectedProject)] === imageIndex
                                            ? "border-gray-600"
                                            : "hover:border-gray-300"
                                            }`}
                                    ></button>
                                ))}
                            </div>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            )}

        </div>
    );
}
