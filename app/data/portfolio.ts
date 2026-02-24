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
    year: string;
    achievement: string;
}

export const portfolioItems: PortfolioData[] = [
    {
        slug: "oppsn-ontario",
        title: "OPPSN Ontario",
        client: "OPPSN Ontario",
        clientType: "ORGANIZATION",
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
        year: "2025",
        achievement: "For OPPSN (Ontario), we developed and managed performance marketing campaigns that increased donations and raised from $2K to $10K in under 2 months, delivering measurable ROI through data-driven optimization.",
    },
    {
        slug: "aa-tower",
        title: "AA-Tower",
        client: "AA-Tower",
        clientType: "REAL ESTATE",
        location: "UAE, Dubai",
        heroImage: "/images/case-studies/c2.png",
        introSubtitle: "AA-Tower",
        introTitle: "Driving Sales in a Competitive Market",
        introParagraphs: [
            "AA-Tower is a prominent real estate development in Dubai's highly competitive property market. Competing for attention from global investors required a precise digital marketing strategy capable of generating high-quality leads at scale.",
            "Marketo360 partnered with AA-Tower to execute high-converting lead generation campaigns, leveraging multi-channel advertising to drive qualified buyers and achieve exceptional inventory sales.",
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
                    "The Dubai real estate market demands highly targeted campaigns to stand out among luxury developments vying for global investor attention. AA-Tower needed a reliable pipeline of qualified leads to drive inventory sales efficiently.",
                    "Previous marketing efforts lacked the precision and data-driven optimization necessary to consistently attract serious buyers and investors.",
                ],
            },
            {
                heading: "THE Marketo360 APPROACH",
                paragraphs: [
                    "Marketo360 executed high-converting real estate campaigns tailored specifically for AA-Tower's market positioning. The approach combined precise audience targeting with compelling creative across Meta and Google platforms.",
                    "Multi-channel advertising funnels were built to engage global buyers at every stage of the decision-making process, from awareness through to inquiry and purchase.",
                    "Continuous optimization of targeting parameters, ad creatives, and bidding strategies ensured maximum return on ad spend and a consistent flow of qualified leads.",
                ],
            },
            {
                heading: "THE RESULTS",
                paragraphs: [
                    "Marketo360 delivered qualified global leads and drove significant inventory sales through strategic multi-channel advertising in one of the world's most competitive real estate markets.",
                    "The campaigns established an effective and repeatable lead generation framework that continues to support AA-Tower's ongoing sales efforts.",
                ],
            },
        ],
        services: ["LEAD GENERATION", "META ADVERTISING", "GOOGLE ADS"],
        year: "2024",
        achievement: "Executed high-converting real estate campaigns in a competitive market, generating qualified global leads and driving 50% inventory sales through Meta, Google, and multi-channel advertising.",
    },
    {
        slug: "optimus-properties",
        title: "Optimus Properties",
        client: "Optimus Properties",
        clientType: "REAL ESTATE",
        location: "UAE, Dubai",
        heroImage: "/images/case-studies/c3.png",
        introSubtitle: "Optimus Properties",
        introTitle: "Targeted Leads for Off-Plan & Secondary Properties",
        introParagraphs: [
            "Optimus Properties operates in Dubai's dynamic real estate sector, specializing in both off-plan and secondary property markets. Reaching the right buyers and investors at the right time required a sophisticated, multi-platform digital strategy.",
            "Marketo360 managed targeted lead generation campaigns that delivered qualified buyer and investor leads, supporting Optimus Properties' sales pipeline across multiple property categories.",
        ],
        statsTitle: "Campaign Impact",
        stats: [
            { label: "Lead Quality", value: "High" },
            { label: "Platforms", value: "Multi" },
        ],
        bodySections: [
            {
                heading: "THE CHALLENGE",
                paragraphs: [
                    "Optimus Properties needed a steady stream of qualified leads across two distinct markets — off-plan developments and secondary properties — each requiring different messaging and audience targeting approaches.",
                    "The challenge was to build campaigns that could effectively engage both first-time buyers and seasoned investors while maintaining cost efficiency across multiple platforms.",
                ],
            },
            {
                heading: "THE Marketo360 APPROACH",
                paragraphs: [
                    "Marketo360 developed tailored lead generation campaigns for both off-plan and secondary property segments, ensuring each campaign spoke directly to its target audience's motivations and investment goals.",
                    "Multi-platform paid advertising across Meta and Google allowed the team to reach buyers and investors at scale, with precise targeting based on demographics, interests, and behavioral signals.",
                    "Ongoing campaign optimization, creative testing, and audience refinement ensured a consistent pipeline of high-quality leads for the Optimus Properties sales team.",
                ],
            },
            {
                heading: "THE RESULTS",
                paragraphs: [
                    "Marketo360 successfully managed targeted lead generation campaigns for off-plan and secondary properties, delivering qualified buyer and investor leads through multi-platform paid advertising.",
                    "The campaigns provided Optimus Properties with a reliable and scalable lead generation framework, supporting their sales efforts across both property segments.",
                ],
            },
        ],
        services: ["LEAD GENERATION", "META ADVERTISING", "GOOGLE ADS"],
        year: "2024",
        achievement: "Managed targeted lead generation campaigns for off-plan and secondary properties, delivering qualified buyer and investor leads through multi-platform paid advertising.",
    },
    {
        slug: "kross-kulture",
        title: "Kross Kulture",
        client: "Kross Kulture",
        clientType: "ECOMMERCE",
        location: "Pakistan, UAE",
        heroImage: "/images/case-studies/c4.png",
        introSubtitle: "Kross Kulture",
        introTitle: "Maximizing ROI Through Creative & Performance",
        introParagraphs: [
            "Kross Kulture is a dynamic ecommerce brand operating across Pakistan and the UAE, offering a diverse range of lifestyle and fashion products. To compete in a crowded digital marketplace, they needed a comprehensive digital marketing partner.",
            "Marketo360 managed their digital marketing, graphic creatives, and video content campaigns — driving a measurable increase in ROI through optimized performance strategies and targeted advertising.",
        ],
        statsTitle: "Campaign Impact",
        stats: [
            { label: "ROI Increase", value: "10%" },
            { label: "Markets", value: "2" },
        ],
        bodySections: [
            {
                heading: "THE CHALLENGE",
                paragraphs: [
                    "Kross Kulture needed to elevate their brand presence and drive sales across two distinct markets — Pakistan and UAE — each with unique consumer behaviors and competitive landscapes.",
                    "The brand required high-quality creative content and data-driven advertising campaigns to capture attention, build brand equity, and convert browsers into buyers.",
                ],
            },
            {
                heading: "THE Marketo360 APPROACH",
                paragraphs: [
                    "Marketo360 provided end-to-end digital marketing services including graphic design, video content production, and performance advertising. Creative assets were developed to resonate with target audiences in both markets.",
                    "Targeted advertising campaigns were deployed across Meta and other relevant platforms, with continuous optimization of creatives, audiences, and bidding strategies to maximize return on investment.",
                    "A data-driven approach to performance monitoring ensured that campaigns were consistently refined to improve results and drive sustainable growth.",
                ],
            },
            {
                heading: "THE RESULTS",
                paragraphs: [
                    "Marketo360 achieved a 10% increase in ROI through optimized performance strategies and targeted advertising, while also strengthening Kross Kulture's brand presence across Pakistan and the UAE.",
                    "The combination of compelling creative content and performance-focused advertising established a strong foundation for continued digital growth.",
                ],
            },
        ],
        services: ["SALES", "CONTENT", "GRAPHICS", "PERFORMANCE MARKETING"],
        year: "2024",
        achievement: "Managed digital marketing, graphic creatives, and video content campaigns, achieving a 10% increase in ROI through optimized performance strategies and targeted advertising.",
    },
    {
        slug: "lama-retail",
        title: "Lama Retail",
        client: "Lama Retail",
        clientType: "ECOMMERCE",
        location: "Pakistan, UAE",
        heroImage: "/images/case-studies/c5.png",
        introSubtitle: "Lama Retail",
        introTitle: "35% Sales Growth in Luxury Apparel",
        introParagraphs: [
            "Lama Retail is a luxury apparel brand with a presence across Pakistan and the UAE. In a market defined by high expectations and discerning consumers, standing out requires both impeccable creative and strategic performance marketing.",
            "Marketo360 managed their digital marketing campaigns, creative graphics, and sales-focused content — delivering a 35% increase in sales and stronger brand visibility in the luxury apparel market.",
        ],
        statsTitle: "Campaign Impact",
        stats: [
            { label: "Sales Increase", value: "35%" },
            { label: "Brand Visibility", value: "↑" },
        ],
        bodySections: [
            {
                heading: "THE CHALLENGE",
                paragraphs: [
                    "Lama Retail needed to grow their sales in a competitive luxury apparel market while maintaining the premium brand image essential to their positioning in Pakistan and the UAE.",
                    "The brand required a partner who could deliver both high-quality creative content and results-driven performance marketing to attract and convert their target audience.",
                ],
            },
            {
                heading: "THE Marketo360 APPROACH",
                paragraphs: [
                    "Marketo360 developed a comprehensive strategy encompassing digital marketing campaigns, creative graphic production, and sales-focused content tailored to luxury apparel consumers.",
                    "Performance advertising campaigns were deployed across key digital platforms, with creative assets designed to reflect the brand's premium positioning and appeal to high-intent buyers.",
                    "Continuous performance analysis and creative iteration ensured that campaigns delivered improving results over time, driving both sales growth and brand equity.",
                ],
            },
            {
                heading: "THE RESULTS",
                paragraphs: [
                    "Marketo360 delivered a 35% increase in sales for Lama Retail, alongside significantly stronger brand visibility across the luxury apparel market in Pakistan and the UAE.",
                    "The campaigns established a scalable and effective marketing framework that continues to support Lama Retail's growth ambitions.",
                ],
            },
        ],
        services: ["SALES", "CONTENT", "GRAPHICS", "PERFORMANCE MARKETING"],
        year: "2024",
        achievement: "Managed digital marketing campaigns, creative graphics, and sales-focused content for Lama Retail, resulting in a 35% increase in sales and stronger brand visibility in the luxury apparel market.",
    },
    {
        slug: "image-1993",
        title: "Image-1993",
        client: "Image-1993",
        clientType: "ECOMMERCE",
        location: "Pakistan, UK",
        heroImage: "/images/case-studies/c6.png",
        introSubtitle: "Image-1993",
        introTitle: "Improving ROAS Across Two Markets",
        introParagraphs: [
            "Image-1993 is an ecommerce brand operating across Pakistan and the UK, requiring a digital marketing approach that could effectively bridge two very different consumer markets with tailored advertising strategies.",
            "Marketo360 managed their digital marketing campaigns across both markets, achieving a 10% increase in ROAS through targeted advertising and optimized campaign strategies.",
        ],
        statsTitle: "Campaign Impact",
        stats: [
            { label: "ROAS Increase", value: "10%" },
            { label: "Markets", value: "2" },
        ],
        bodySections: [
            {
                heading: "THE CHALLENGE",
                paragraphs: [
                    "Image-1993 needed to improve their return on ad spend across two distinct markets — Pakistan and the UK — each requiring different targeting approaches, creative strategies, and bidding optimizations.",
                    "The brand needed a data-driven partner capable of identifying inefficiencies in existing campaigns and systematically improving performance.",
                ],
            },
            {
                heading: "THE Marketo360 APPROACH",
                paragraphs: [
                    "Marketo360 conducted a thorough audit of existing campaigns and developed market-specific strategies for Pakistan and the UK, ensuring that targeting, creative, and messaging were optimized for each audience.",
                    "Advanced campaign optimization techniques, including audience segmentation, creative A/B testing, and bid strategy refinement, were applied to maximize return on every advertising dollar spent.",
                    "Ongoing performance monitoring and regular reporting ensured transparency and continuous improvement across all campaign metrics.",
                ],
            },
            {
                heading: "THE RESULTS",
                paragraphs: [
                    "Marketo360 achieved a 10% increase in ROAS for Image-1993 across Pakistan and the UK through targeted advertising and optimized campaign strategies.",
                    "The improved performance framework established a stronger foundation for sustained digital marketing success across both markets.",
                ],
            },
        ],
        services: ["SALES", "PERFORMANCE MARKETING", "META ADVERTISING"],
        year: "2024",
        achievement: "Managed digital marketing campaigns across Pakistan and the UK, achieving a 10% increase in ROAS through targeted advertising and optimized campaign strategies.",
    },
    {
        slug: "black-label-group",
        title: "Black Label Group",
        client: "Black Label Group",
        clientType: "AGENCY",
        location: "Hong Kong, UK",
        heroImage: "/images/case-studies/c7.png",
        introSubtitle: "Black Label Group",
        introTitle: "Enterprise Growth Through Branding & Lead Generation",
        introParagraphs: [
            "Black Label Group is a large-scale enterprise group with operations spanning Hong Kong and the UK. Competing at an enterprise level demands a sophisticated blend of branding, lead generation, and performance-driven sales campaigns.",
            "Marketo360 managed branding, lead generation, and sales-focused digital campaigns for Black Label Group, strengthening their market presence and driving measurable business growth.",
        ],
        statsTitle: "Campaign Impact",
        stats: [
            { label: "Market Presence", value: "↑" },
            { label: "Business Growth", value: "↑" },
        ],
        bodySections: [
            {
                heading: "THE CHALLENGE",
                paragraphs: [
                    "As a large-scale enterprise group operating across international markets, Black Label Group needed cohesive digital campaigns that could reinforce their brand authority while simultaneously generating qualified leads and driving sales.",
                    "Coordinating branding, lead generation, and sales efforts across Hong Kong and the UK required a strategic and unified approach.",
                ],
            },
            {
                heading: "THE Marketo360 APPROACH",
                paragraphs: [
                    "Marketo360 developed an integrated digital marketing strategy encompassing brand positioning, lead generation, and sales-focused campaigns tailored for enterprise-level impact.",
                    "Multi-channel campaigns were deployed across relevant platforms in both Hong Kong and the UK, ensuring consistent brand messaging while driving measurable commercial outcomes.",
                    "Performance data was used to continuously refine targeting and creative strategies, maximizing the impact of every campaign element.",
                ],
            },
            {
                heading: "THE RESULTS",
                paragraphs: [
                    "Marketo360 successfully strengthened Black Label Group's market presence and drove measurable business growth through integrated branding, lead generation, and sales campaigns.",
                    "The campaigns established a strong digital foundation that continues to support the group's growth ambitions across their international markets.",
                ],
            },
        ],
        services: ["SALES", "LEAD GENERATION", "BRANDING"],
        year: "2024",
        achievement: "Managed branding, lead generation, and sales-focused digital campaigns, strengthening market presence and driving measurable business growth for a large-scale enterprise group.",
    },
    {
        slug: "noir-gallery-blg",
        title: "Noir Gallery - BLG",
        client: "Noir Gallery",
        clientType: "CAFE",
        location: "Hong Kong",
        heroImage: "/images/case-studies/c8.png",
        introSubtitle: "Noir Gallery - BLG",
        introTitle: "Building Brand Presence in Hong Kong",
        introParagraphs: [
            "Noir Gallery is a distinctive café experience in Hong Kong, part of the Black Label Group. Creating a strong brand identity and driving awareness in a competitive hospitality market required a thoughtful and creative digital approach.",
            "Marketo360 managed branding and awareness campaigns for Noir Gallery, strengthening their market presence and building a loyal customer base through targeted digital marketing.",
        ],
        statsTitle: "Campaign Impact",
        stats: [
            { label: "Brand Awareness", value: "↑" },
            { label: "Market Presence", value: "↑" },
        ],
        bodySections: [
            {
                heading: "THE CHALLENGE",
                paragraphs: [
                    "Noir Gallery needed to establish a distinctive brand identity and build awareness among Hong Kong's competitive café and lifestyle market. Creating campaigns that captured the brand's unique aesthetic while driving footfall and engagement was essential.",
                    "The challenge was to translate the café's physical experience into compelling digital content that resonated with target audiences and drove measurable brand growth.",
                ],
            },
            {
                heading: "THE Marketo360 APPROACH",
                paragraphs: [
                    "Marketo360 developed branding and awareness campaigns that captured the unique identity of Noir Gallery, creating compelling content and creative assets that reflected the brand's distinctive character.",
                    "Targeted digital advertising across relevant platforms in Hong Kong ensured that campaigns reached the right audiences — lifestyle-conscious consumers and café enthusiasts — at the right moments.",
                    "Brand consistency across all digital touchpoints strengthened recognition and built a foundation for sustained customer engagement and loyalty.",
                ],
            },
            {
                heading: "THE RESULTS",
                paragraphs: [
                    "Marketo360 successfully strengthened Noir Gallery's market presence in Hong Kong, driving measurable improvements in brand awareness and customer engagement.",
                    "The campaigns established a strong digital brand identity that continues to support Noir Gallery's growth within the competitive Hong Kong hospitality market.",
                ],
            },
        ],
        services: ["BRANDING", "AWARENESS", "CONTENT"],
        year: "2024",
        achievement: "Managed branding and awareness digital campaigns, strengthening market presence and driving measurable business growth for a large-scale enterprise group.",
    },
    {
        slug: "green-future-properties",
        title: "Green Future Properties",
        client: "Green Future Properties",
        clientType: "REAL ESTATE",
        location: "UAE, Dubai, Pakistan",
        heroImage: "/images/case-studies/c9.png",
        introSubtitle: "Green Future Properties",
        introTitle: "Qualified Leads Across Two Markets",
        introParagraphs: [
            "Green Future Properties is a real estate company operating across Dubai and Pakistan, specializing in both off-plan developments and secondary market properties. Reaching qualified buyers and investors across two distinct markets required a targeted multi-platform approach.",
            "Marketo360 managed targeted lead generation campaigns that delivered a consistent pipeline of qualified buyer and investor leads through multi-platform paid advertising.",
        ],
        statsTitle: "Campaign Impact",
        stats: [
            { label: "Lead Quality", value: "High" },
            { label: "Markets", value: "2" },
        ],
        bodySections: [
            {
                heading: "THE CHALLENGE",
                paragraphs: [
                    "Green Future Properties needed to generate qualified leads across two markets — Dubai and Pakistan — each with distinct buyer profiles, investment motivations, and competitive dynamics.",
                    "The challenge was to build campaigns that could effectively engage both international investors in Dubai and domestic buyers in Pakistan, while maintaining efficiency and lead quality.",
                ],
            },
            {
                heading: "THE Marketo360 APPROACH",
                paragraphs: [
                    "Marketo360 developed market-specific lead generation campaigns for both Dubai and Pakistan, tailoring messaging, targeting, and creative to align with the priorities of each market's buyer profile.",
                    "Multi-platform paid advertising across Meta and Google was used to maximize reach among qualified prospects, with sophisticated targeting to identify serious buyers and investors.",
                    "Continuous campaign optimization ensured a consistent and cost-efficient flow of high-quality leads, supporting the Green Future Properties sales team across both markets.",
                ],
            },
            {
                heading: "THE RESULTS",
                paragraphs: [
                    "Marketo360 successfully managed targeted lead generation campaigns for off-plan and secondary properties, delivering qualified buyer and investor leads through multi-platform paid advertising across Dubai and Pakistan.",
                    "The campaigns established an effective cross-market lead generation framework that continues to drive sales pipeline growth for Green Future Properties.",
                ],
            },
        ],
        services: ["LEAD GENERATION", "META ADVERTISING", "GOOGLE ADS"],
        year: "2024",
        achievement: "Managed targeted lead generation campaigns for off-plan and secondary properties, delivering qualified buyer and investor leads through multi-platform paid advertising.",
    },
    {
        slug: "watches-pool",
        title: "Watches Pool",
        client: "Watches Pool",
        clientType: "ECOMMERCE",
        location: "Worldwide",
        heroImage: "/images/case-studies/c10.png",
        introSubtitle: "Watches Pool",
        introTitle: "Global Sales for a Worldwide Audience",
        introParagraphs: [
            "Watches Pool is a global ecommerce platform dealing in premium and luxury timepieces, targeting watch enthusiasts and collectors across the world. Competing in a worldwide market demands highly targeted, conversion-focused digital campaigns.",
            "Marketo360 partnered with Watches Pool to manage their sales-focused digital marketing campaigns, driving revenue growth across their international customer base.",
        ],
        statsTitle: "Campaign Impact",
        stats: [
            { label: "Market Reach", value: "Global" },
            { label: "Focus", value: "Sales" },
        ],
        bodySections: [
            {
                heading: "THE CHALLENGE",
                paragraphs: [
                    "Watches Pool needed to reach luxury watch buyers and collectors across multiple international markets simultaneously, requiring campaigns that could perform across diverse audiences with different preferences and price sensitivities.",
                    "Driving consistent sales on a global scale demanded both broad reach and precise targeting to identify and convert high-intent buyers efficiently.",
                ],
            },
            {
                heading: "THE Marketo360 APPROACH",
                paragraphs: [
                    "Marketo360 developed globally targeted sales campaigns leveraging multi-platform advertising to reach watch enthusiasts and collectors across key international markets.",
                    "Advanced audience targeting, including interest-based and behavioral targeting, was used to identify high-intent buyers and deliver compelling product-focused advertising at scale.",
                    "Continuous performance optimization ensured that campaigns delivered strong return on ad spend across all target markets, with ongoing creative and audience refinement to sustain results.",
                ],
            },
            {
                heading: "THE RESULTS",
                paragraphs: [
                    "Marketo360 successfully drove sales growth for Watches Pool across their worldwide customer base through targeted, performance-optimized digital advertising campaigns.",
                    "The campaigns established an effective global sales framework that continues to support Watches Pool's revenue ambitions across international markets.",
                ],
            },
        ],
        services: ["SALES", "PERFORMANCE MARKETING", "META ADVERTISING"],
        year: "2024",
        achievement: "Managed global sales-focused digital marketing campaigns, driving revenue growth for a worldwide ecommerce platform specializing in premium and luxury timepieces.",
    },
];
export function getPortfolioBySlug(slug: string): PortfolioData | undefined {
    return portfolioItems.find((item) => item.slug === slug);
}

export function getAllPortfolioSlugs(): string[] {
    return portfolioItems.map((item) => item.slug);
}
