'use client';

import useIsomorphicLayoutEffect from '../gsap/UseIsomorphicLayoutEffect';
import { gsap, SplitText } from '../gsap/gsap';
import { useRef, useContext } from 'react';
import Link from 'next/link';
import Magnetic from '../Magnetic';
import { SmoothScrollContext } from '../gsap/SmoothScroll.context';

const NavHome = () => {
    const el = useRef<HTMLDivElement | null>(null);
    const { scroll } = useContext(SmoothScrollContext);

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const split = new SplitText('.nav-home', { type: 'chars' });

            const tl = gsap.timeline({ delay: 0.5 });
            tl.to('.nav-home', { opacity: 1, duration: 0 }, 0);
            tl.from(
                split.chars,
                {
                    duration: 1.75,
                    y: '120%',
                    stagger: 0.05,
                    ease: 'power3.inOut',
                },
                0
            );
        }, el);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={el}
            className='pointer-events-auto absolute flex items-center px-2 gap-2 bg-white rounded-lg top-4 left-[2.5%] pb-1 text-lg font-semibold text-neutral-800'
        >
            <div className="">
            <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            </div>
            <Magnetic onClick={() => scroll.scrollTo('#hero', true)}>
                <div className='mag-slow overflow-hidden'>
                    <Link href='/' className='nav-home !text-black opacity-0'>
                        Open to Work
                    </Link>
                </div>
            </Magnetic>
        </div>
    );
};

export default NavHome;
