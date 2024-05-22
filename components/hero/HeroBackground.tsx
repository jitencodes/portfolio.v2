'use client';

import { useRef } from 'react';
import { gsap, ScrollTrigger } from '../gsap/gsap';
import useIsomorphicLayoutEffect from '../gsap/UseIsomorphicLayoutEffect';
import { Gradient } from './Gradient';
import Particles from './Particles/Particles'
const HeroBackground = () => {
    const el = useRef<HTMLDivElement>(null);

    useIsomorphicLayoutEffect(() => {
        // const seed = Math.floor(Math.random() * 1000);
        // const gradient = new Gradient();

        // gradient.initGradient('#gradient-canvas');
        // gradient.connect();
        // gradient.seed = seed;

        const ctx = gsap.context(() => {
            gsap.to('.open-1', {
                translateY: '-100%',
                duration: 2,
                ease: 'power3.out',
                delay: 1.5,
            });
            gsap.to('.open-2', {
                translateY: '100%',
                duration: 2,
                ease: 'power3.out',
                delay: 1.5,
            });
            gsap.to('.open-1-rounded, .open-2-rounded', {
                scaleY: 0,
                duration: 2,
                ease: 'power3.out',
                delay: 1.5,
                onComplete: () => {
                    gsap.set('.open-animation', { autoAlpha: 0 });
                },
            });
        }, el);

        ScrollTrigger.create({
            trigger: el.current,
            start: 'top top',
            end: 'bottom top',
            // onEnterBack: () => {
            //     gradient.play();
            // },
            // onLeave: () => {
            //     gradient.pause();
            // },
        });
    }, []);

    return (
        <div
            className='absolute top-0 left-0 flex h-full w-full flex-col justify-between overflow-hidden'
            ref={el}
        >
            <div className="absolute background overflow-hidden w-full h-full inset-0 z-[-1]">
                        <div className="noise"></div>
                        <div className="w-1/2 h-full flex left-0 -bottom-[8%] rotate-6" data-speed='0.2'>
                            <svg className='w-full h-full mt-auto' width="962" height="995" viewBox="0 0 962 995" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M961 995L0 1.00093" stroke="url(#paint0_linear_2321_30777)"/>
                                <path d="M961 994.807L0 139.055" stroke="url(#paint1_linear_2321_30777)"/>
                                <path d="M961 995L0 268.279" stroke="url(#paint2_linear_2321_30777)"/>
                                <path d="M961 994.998L0 388.092" stroke="url(#paint3_linear_2321_30777)"/>
                                <path d="M961 995L0 498.692" stroke="url(#paint4_linear_2321_30777)"/>
                                <path d="M961 995L0 600.073" stroke="url(#paint5_linear_2321_30777)"/>
                                <path d="M961 994.998L0 692.236" stroke="url(#paint6_linear_2321_30777)"/>
                                <path d="M961 994.998L0 775.185" stroke="url(#paint7_linear_2321_30777)"/>
                                <path d="M961 994.998L0 851.682" stroke="url(#paint8_linear_2321_30777)"/>
                                <path d="M961 994.998L0 916.197" stroke="url(#paint9_linear_2321_30777)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_2321_30777" x1="960.499" y1="992.187"
                                                    x2="-6.38836"
                                                    y2="985.916" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_2321_30777" x1="960.499" y1="992.385"
                                                    x2="-6.37415"
                                                    y2="985.101" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_2321_30777" x1="960.499" y1="992.944"
                                                    x2="-6.35294"
                                                    y2="984.366" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_2321_30777" x1="960.499" y1="993.281"
                                                    x2="-6.31993"
                                                    y2="983.01" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                    <linearGradient id="paint4_linear_2321_30777" x1="960.499" y1="993.596"
                                                    x2="-6.26589"
                                                    y2="981.037" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                    <linearGradient id="paint5_linear_2321_30777" x1="960.499" y1="993.883"
                                                    x2="-6.17141"
                                                    y2="978.102" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                    <linearGradient id="paint6_linear_2321_30777" x1="960.499" y1="994.141"
                                                    x2="-5.99077"
                                                    y2="973.56" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                    <linearGradient id="paint7_linear_2321_30777" x1="960.499" y1="994.376"
                                                    x2="-5.59793"
                                                    y2="966.04" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                    <linearGradient id="paint8_linear_2321_30777" x1="960.499" y1="994.593"
                                                    x2="-4.47619"
                                                    y2="951.182" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                    <linearGradient id="paint9_linear_2321_30777" x1="960.499" y1="994.775"
                                                    x2="0.00045284"
                                                    y2="916.191" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="w-1/2 h-full flex right-0 -bottom-[8%] -rotate-6" data-speed='0.2'>
                            <svg className='w-full h-full mt-auto' width="962" height="995" viewBox="0 0 962 995" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 995L962 1.00093" stroke="url(#paint0_linear_2321_30690)"/>
                                <path d="M1 994.807L962 139.055" stroke="url(#paint1_linear_2321_30690)"/>
                                <path d="M1 995L962 268.279" stroke="url(#paint2_linear_2321_30690)"/>
                                <path d="M1 994.998L962 388.092" stroke="url(#paint3_linear_2321_30690)"/>
                                <path d="M1 995L962 498.692" stroke="url(#paint4_linear_2321_30690)"/>
                                <path d="M1 995L962 600.073" stroke="url(#paint5_linear_2321_30690)"/>
                                <path d="M1 994.998L962 692.236" stroke="url(#paint6_linear_2321_30690)"/>
                                <path d="M1 994.998L962 775.185" stroke="url(#paint7_linear_2321_30690)"/>
                                <path d="M1 994.998L962 851.682" stroke="url(#paint8_linear_2321_30690)"/>
                                <path d="M1 994.998L962 916.197" stroke="url(#paint9_linear_2321_30690)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_2321_30690" x1="1.50051" y1="992.187" x2="968.388"
                                                    y2="985.916" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_2321_30690" x1="1.50051" y1="992.385" x2="968.374"
                                                    y2="985.101" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_2321_30690" x1="1.50051" y1="992.944" x2="968.353"
                                                    y2="984.366" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_2321_30690" x1="1.50051" y1="993.281" x2="968.32"
                                                    y2="983.01" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                    <linearGradient id="paint4_linear_2321_30690" x1="1.50051" y1="993.596" x2="968.266"
                                                    y2="981.037" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                    <linearGradient id="paint5_linear_2321_30690" x1="1.50051" y1="993.883" x2="968.171"
                                                    y2="978.102" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                    <linearGradient id="paint6_linear_2321_30690" x1="1.50051" y1="994.141" x2="967.991"
                                                    y2="973.56" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                    <linearGradient id="paint7_linear_2321_30690" x1="1.50051" y1="994.376" x2="967.598"
                                                    y2="966.04" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                    <linearGradient id="paint8_linear_2321_30690" x1="1.50051" y1="994.593" x2="966.476"
                                                    y2="951.182" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                    <linearGradient id="paint9_linear_2321_30690" x1="1.50051" y1="994.775" x2="962"
                                                    y2="916.191" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#261308"/>
                                        <stop offset="0.0001" stopColor="#241004" stopOpacity="0.9"/>
                                        <stop offset="1" stopColor="#061D49"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <Particles />
                        <div className="blob blob-v1"></div>
                        <div className="blob blob-v2"></div>
                        <div className="blob blob-v3"></div>
                    </div>
            {/* <canvas
                id='gradient-canvas'
                className='h-full w-full'
                data-speed='0.6'
                data-transition-in
                data-js-darken-top
            ></canvas> */}
            <div className='open-animation absolute top-0 left-0 flex h-[100lvh] w-full flex-col justify-between'>
                <div className='open-1 relative h-full w-full origin-top bg-neutral-100'>
                    <div className='open-1-rounded absolute left-[-10%] bottom-0 h-[60rem] w-[120%] translate-y-1/2 rounded-[100%_100%] bg-neutral-100'></div>
                </div>
                <div className='open-2 relative h-full w-full origin-bottom bg-neutral-100'>
                    <div className='open-2-rounded absolute left-[-10%] top-0 h-[60rem] w-[120%] -translate-y-1/2 rounded-[100%_100%] bg-neutral-100'></div>
                </div>
            </div>
        </div>
    );
};

export default HeroBackground;
