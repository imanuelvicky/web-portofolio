import {
    Firebase,
    Js,
    Kotlin,
    Mapbox,
    Mysql,
    NextJS,
    Postgre,
    ReactNative,
    Tailwind,
    Ts,
    VueJS,
    Angular,
    Ionic,
} from "@/assets/images";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

export default function Tech() {
    const tech = [
        Js,
        Ts,
        ReactNative,
        NextJS,
        VueJS,
        Kotlin,
        Ionic,
        Angular,
        Tailwind,
        Mysql,
        Postgre,
        Firebase,
        Mapbox,
    ].reverse();

    const listRef = useRef<HTMLUListElement | null>(null)

    useEffect(() => {
        if (listRef.current) {
            const ul = listRef.current;
            //Duplicate the list for seamless scrolling
            ul.insertAdjacentHTML("afterend", ul.outerHTML);
            const nextSibling = ul.nextSibling as HTMLElement | null;
            if (nextSibling) {
                nextSibling.setAttribute("aria-hidden", "true");
            }
        }
    }, []);

    return (
        <div
            className="w-full overflow-hidden inline-flex flex-nowrap items-center justify-center py-6 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
            <ul
                ref={listRef}
                className="flex items-center justify-center md:justify-start animate-infinite-scroll [&_li]:mx-8 [&_img]:max-w-none"
            >
                {tech.map((item, index) => (
                    <li key={index}>
                        <Image alt={`Tech ${index}`} src={item} width={50} height={50} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
