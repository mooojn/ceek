export interface PortfolioStat {
    label: string;
    value: string;
}

export interface BodySection {
    heading: string;
    paragraphs: string[];
}

export interface PortfolioData {
    slug: string;
    title: string;
    client: string;
    clientType: string;
    location: string;
    heroImage: string;
    introSubtitle: string;
    introTitle: string;
    introParagraphs: string[];
    statsTitle: string;
    stats: PortfolioStat[];
    bodySections: BodySection[];
    services: string[];
}

export const portfolioItems: PortfolioData[] = [
    {
        slug: "oppsn-ontario",
        title: "OPPSN Ontario",
        client: "OPPSN Ontario",
        clientType: "Organization",
        location: "USA, Canada",
        heroImage: "/images/case-studies/c1.png",
        introSubtitle: "OPPSN Ontario",
        introTitle: "Driving Donations Through Digital",
        introParagraphs: [
            "OPPSN (Ontario) is a non-profit organization dedicated to community welfare and social impact across Canada and the United States. With a mission to amplify their reach and drive meaningful donations, they partnered with Marketo360 to transform their digital marketing strategy.",
            "Through targeted performance marketing campaigns, Marketo360 helped OPPSN scale their fundraising efforts from $2K to $10K in under 2 months, proving that data-driven optimization can deliver measurable ROI even in the non-profit sector.",
        ],
        statsTitle: "Campaign Impact",
        stats: [
            { label: "Donation Growth", value: "5x" },
            { label: "Time To Results", value: "2 Months" },
        ],
        bodySections: [
            {
                heading: "THE CHALLENGE",
                paragraphs: [
                    "OPPSN Ontario needed to significantly increase their donation revenue through digital channels. With limited brand awareness in the digital space, the organization required a strategic approach to reach potential donors and convert them effectively.",
                    "The challenge was to create campaigns that resonated emotionally while maintaining cost-efficiency and delivering measurable returns on investment.",
                ],
            },
            {
                heading: "THE Marketo360 APPROACH",
                paragraphs: [
                    "Marketo360 developed and managed performance marketing campaigns focused on lead generation and donor acquisition. By leveraging data-driven optimization techniques, the team identified the most responsive audience segments.",
                    "The strategy included multi-channel advertising across Meta and Google platforms, with continuous A/B testing of ad creatives, targeting parameters, and landing page experiences to maximize conversion rates.",
                    "Regular performance monitoring and real-time bid adjustments ensured that every dollar spent was optimized for maximum impact, allowing OPPSN to scale their campaigns confidently.",
                ],
            },
            {
                heading: "THE RESULTS",
                paragraphs: [
                    "For OPPSN (Ontario), Marketo360 delivered performance marketing campaigns that increased donations and raised from $2K to $10K in under 2 months, delivering measurable ROI through data-driven optimization.",
                    "The campaigns not only achieved immediate fundraising targets but also established a sustainable digital marketing framework that continues to drive donations and donor engagement.",
                ],
            },
        ],
        services: ["LEAD GENERATION", "PERFORMANCE MARKETING", "GOOGLE ADS"],
    },
    {
        slug: "real-estate",
        title: "Real Estate",
        client: "Real Estate Developer",
        clientType: "Real Estate",
        location: "UAE, Dubai",
        heroImage: "/images/case-studies/c2.png",
        introSubtitle: "Real Estate",
        introTitle: "Conquering A Competitive Market",
        introParagraphs: [
            "In one of the world's most competitive real estate markets — Dubai — standing out requires more than just premium listings. Our client needed a strategic digital marketing partner capable of generating qualified leads from a global audience.",
            "Marketo360 was brought on board to execute high-converting campaigns that would cut through the noise and drive real inventory sales through targeted multi-channel advertising.",
        ],
        statsTitle: "Campaign Impact",
        stats: [
            { label: "Inventory Sold", value: "50%" },
            { label: "Lead Quality Increase", value: "3x" },
        ],
        bodySections: [
            {
                heading: "THE CHALLENGE",
                paragraphs: [
                    "The Dubai real estate market is saturated with luxury developments competing for the attention of high-net-worth investors globally. Our client needed to differentiate their properties and attract qualified international buyers.",
                    "Traditional marketing channels were delivering diminishing returns, and the client needed a data-driven approach to identify and convert the most promising leads efficiently.",
                ],
            },
            {
                heading: "THE Marketo360 APPROACH",
                paragraphs: [
                    "Marketo360 executed high-converting real estate campaigns tailored for the competitive Dubai market. The strategy focused on generating qualified global leads through precise audience targeting and compelling creative.",
                    "Leveraging Meta, Google, and multi-channel advertising platforms, the team built sophisticated funnel strategies that nurtured prospects from initial awareness through to property viewings and purchases.",
                    "Advanced retargeting campaigns and lookalike audience modeling ensured maximum reach among qualified prospects, while real-time analytics allowed for continuous optimization of campaign performance.",
                ],
            },
            {
                heading: "THE RESULTS",
                paragraphs: [
                    "Marketo360 generated qualified global leads and drove 50% inventory sales through Meta, Google, and multi-channel advertising in one of the most competitive real estate markets in the world.",
                    "The campaigns established a repeatable framework for lead generation that continues to deliver high-quality prospects and drive sales for the client's ongoing developments.",
                ],
            },
        ],
        services: ["LEAD GENERATION", "META ADVERTISING", "GOOGLE ADS"],
    },
];

export function getPortfolioBySlug(slug: string): PortfolioData | undefined {
    return portfolioItems.find((item) => item.slug === slug);
}

export function getAllPortfolioSlugs(): string[] {
    return portfolioItems.map((item) => item.slug);
}
