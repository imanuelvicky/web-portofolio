import { Github, Instagram, LinkedIn } from '@/assets/icons'
import { clsxm } from '@/utils/lib'
import { DM_Sans } from 'next/font/google'
import React from 'react'

const ptSansBold = DM_Sans({ weight: '700', subsets: ['latin'] })
const dmSans = DM_Sans({ weight: '400', subsets: ['latin'] })

export default function SelfDescription({ project, years }: { project: number, years: string }) {
    return (
        <div className="text-center lg:text-left flex flex-col gap-16 w-1/2">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col">
                    <p className={clsxm(ptSansBold.className, "text-2xl md:text-3xl leading-tight")}>
                        Hello there!
                    </p>
                    <p className={clsxm(ptSansBold.className, "text-2xl md:text-3xl leading-tight")}>
                        {`I'm`} <span className="text-[#ffd700] underline">Imanuel Vicky Sanjaya</span>
                    </p>
                    <p className={clsxm(dmSans.className, "text-lg mt-2")}>
                        a Frontend Developer with experience in web and mobile development using React, Vue.js, Next.js, Kotlin and Tailwind CSS.
                    </p>
                </div>
                <div className="flex flex-row gap-6 max-lg:justify-center">
                    <div className="flex flex-row gap-2 items-center bg-slate-300 w-fit rounded-md">
                        <p className="text-2xl font-bold bg-amber-600 w-12 px-2 py-1 rounded-md">
                            {years}
                        </p>
                        <p className="text-gray-700 pr-2">
                            Years of experience
                        </p>
                    </div>
                    <div className="flex flex-row gap-2 items-center bg-slate-300 w-fit rounded-md">
                        <p className="text-2xl font-bold bg-amber-600 w-12 text-center px-2 py-1 rounded-md">
                            {project}
                        </p>
                        <p className="text-gray-700 pr-2">
                            Real projects
                        </p>
                    </div>
                </div>

                <div className="border max-lg:justify-center rounded-full" />

                <div className='flex flex-col max-lg:items-center lg:self-end'>
                    <p className='mb-2'>Connect with me:</p>
                    <div className="flex flex-row gap-4">
                        <a
                            href="https://www.linkedin.com/in/imanuel-vicky-s/"
                            target="_blank"
                            className="border-black border-[3px] rounded-xl p-1 transform transition-transform duration-300 hover:scale-110"
                        >
                            <LinkedIn width={30} height={30} color="#0A66C2" />
                        </a>
                        <a
                            href="https://github.com/imanuelvicky"
                            target="_blank"
                            className="border-black border-[3px] rounded-xl p-1 transform transition-transform duration-300 hover:scale-110"
                        >
                            <Github width={30} height={30} />
                        </a>
                        <a
                            href="https://www.instagram.com/imanuel_v.s/"
                            target="_blank"
                            className="border-black border-[3px] rounded-xl p-1 transform transition-transform duration-300 hover:scale-110"
                        >
                            <Instagram width={30} height={30} color="#C13584" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
