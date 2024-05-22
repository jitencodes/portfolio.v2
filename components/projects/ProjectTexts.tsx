import ProjectText from './ProjectText';

const ProjectTexts = ({
    cur,
    projectColors,
}: {
    cur: { cur: number; prev: number };
    projectColors: string[][];
}) => {
    return (
        <>
            <ProjectText
                cur={cur}
                curKey={0}
                colors={projectColors}
                title='Azizi Venice'
                desc='Interactive Design focused websites for our Dubai-based client at innowrap technologies with Arabic RTL layout and localization.'
                stack={["Next.js", "Tailwind", "GSAP", "Contentful headless CMS"]}
                git=''
                url='https://www.azizivenice.com'
            />
            <ProjectText
                cur={cur}
                curKey={1}
                colors={projectColors}
                title='EQBits'
                desc="Online review website for entertainment, books, games, and podcasts providing detailed overview and insights in graphical representations and much more."
                stack={["React.js", "SCSS", "Recharts", "React Auth Kit"]}
                git=''
                url='http://eqbits.in/'
            />
            <ProjectText
                cur={cur}
                curKey={2}
                colors={projectColors}
                title='Crypto View'
                desc="A Cryptocurrency Price-tracking website which provides realtime information about all the cryptocurrencies currently trading in the global crypto market."
                stack={["React.js", "Firebase", "Ant design", "coingecko api"]}
                url='https://cryptoview-by-jitendra.web.app/Home'
                git='https://github.com/jitencodes/cryptoview'
            />
            <ProjectText
                cur={cur}
                curKey={3}
                colors={projectColors}
                title='Tasker'
                desc="Notes keeping app inspired by google keep."
                stack={["React.js"]}
                git='https://github.com/jitencodes/tasker'
                url='https://jitencodes.github.io/tasker/'
            />
        </>
    );
};

export default ProjectTexts;
