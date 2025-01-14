"use client";

import CountUp from "react-countup";

const stats = [
    {
        num: 12,
        text: "Years of experience",
    },
    {
        num: 26,
        text: "Projects completed",
    },
    {
        num: 8,
        text: "Technologies mastered",
    },
    {
        num: 500,
        text: "Code commits",
    },
];

const Stats = () => {
    const [stats, setStats] = useState(initialStats);

    useEffect(() => {
        const fetchCommitCount = async () => {  // Fixed arrow function syntax
            const username = 'HenchaDev';
            
            const token = process.env.NEXT_PUBLIC_API_KEY;

            try {
                const response = await fetch(`https://api.github.com/search/commits?q=author:${username}`, {
                    headers: {
                        'Authorization': `token ${token}`,
                        'Accept': 'application/vnd.github.cloak-preview'
                    }
                });
                
                const data = await response.json();
                if (data && data.total_count) {
                    // Update stats immutably
                    setStats(prevStats => 
                        prevStats.map((stat, index) => 
                            index === 3 ? { ...stat, num: data.total_count } : stat
                        )
                    );
                } else {
                    console.error('Unable to fetch commit count:', data.message);
                }
            } catch (error) {
                console.error('Error fetching commit count:', error);
            }
        };

        fetchCommitCount();
    }, []);

    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((item, index) => {
                        return (
                        <div
                            className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                            key={index}>
                            <CountUp 
                                end={item.num}
                                duration={5}
                                delay={2}
                                className="text-4xl xl:item-6xl font-extrabold"
                            />
                            <p 
                            className={`${
                                item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                            } leading-snug text-white/80`}
                            >
                                {item.text}
                            </p>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
    
};

export default Stats