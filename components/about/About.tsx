'use client';

import { useRef } from 'react';
import { gsap } from '../gsap/gsap';
import useIsomorphicLayoutEffect from '../gsap/UseIsomorphicLayoutEffect';
import Title from '../Title';

const About = () => {
    const el = useRef<HTMLDivElement>(null);

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.about-text',
                { opacity: 0, y: '1.5rem' },
                {
                    opacity: 1,
                    duration: 1.5,
                    y: 0,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.about-text-wrapper',
                        start: 'top 60%',
                        end: 'bottom 60%',
                    },
                }
            );
        }, el);
    }, []);

    return (
        <section ref={el} id='about' className='about-section relative bg-[#F0F0F0] px-[5%]'>
            <div className='absolute top-0 left-0 h-[10vh] w-full -translate-y-full bg-gradient-to-t from-neutral-900/10 to-transparent'></div>
            <Title title='About Me' />
            <div className='about-text-wrapper'>
                <div className='about-text mx-auto max-w-[90rem] text-center text-[clamp(1.75rem,5vw,2.875rem)] leading-[clamp(2.75rem,6vw,4rem)] text-neutral-900'>

                    I&#39;m Jitendra Saini, A Frontend Developer with a Knack for UI design and web performance skilled at creating, developing, and managing complex websites, with a specialization in Reactjs and Nextjs.

                    I bring over 3 years of experience as a versatile Frontend Developer, driven by a passion for creating engaging and interactive websites. Not just a coder but also as a creative thinker, problem solver, and a perpetual learner, always eager to explore new technologies.


                </div>
            </div>
        </section>
    );
};

export default About;
