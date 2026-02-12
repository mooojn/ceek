import React from 'react';

const CaseStudyBody = () => {
    return (
        <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">

                {/* Left: Sticky Title */}
                <div className="lg:w-1/4">
                    <h2 className="text-4xl md:text-5xl font-bold text-black sticky top-32">
                        The Project
                    </h2>
                </div>

                {/* Right: Content */}
                <div className="lg:w-3/4 text-lg text-gray-700 leading-relaxed space-y-12">

                    {/* The Challenge */}
                    <div>
                        <h3 className="text-2xl font-bold text-black uppercase mb-4">THE CHALLENGE</h3>
                        <p className="mb-6">
                            As specialists in omnichannel marketing, Marketo360 was tasked with the UK launch of Mogu Mogu and building the brand’s digital presence from the ground up.
                        </p>
                        <p>
                            Quickly identifying Mogu Mogu’s niche in the overcrowded soft drink market was key to the brand’s success.
                        </p>
                    </div>

                    {/* The Marketo360 Approach */}
                    <div>
                        <h3 className="text-2xl font-bold text-black uppercase mb-4">THE Marketo360 APPROACH</h3>
                        <p className="mb-6">
                            By closely monitoring trends, algorithms, and audience preferences, the Marketo360 team tailored their <span className="font-bold text-black">content creation</span> to exponentially grow Mogu Mogu’s TikTok and Instagram accounts.
                        </p>
                        <p className="mb-6">
                            The Marketo360 team adapted viral content to Mogu Mogu’s fun and playful brand personality, gathering millions of impressions and meaningful interactions on Mogu Mogu’s <span className="font-bold text-black">social media</span> channels. The Marketo360 team used these impressions to their advantage, launching a META re-marketing strategy with a 270% ROI.
                        </p>
                        <p className="mb-6">
                            By monitoring user-generated content (UGC), the Marketo360 team identified key content creators to serve as brand ambassadors and partners. These partnerships, timed with specific campaigns and flavour launches, exceeded investment through purchase conversions and brand awareness within new market segments.
                        </p>
                        <p className="mb-6">
                            Through strategic partnerships, the Marketo360 team gained 5.5 million views, 575k likes, and 17k followers in one week on TikTok alone surrounding the launch of Mogu Mogu’s Bubblegum and Cotton Candy flavour launch.
                        </p>
                        <p className="mb-6">
                            Mogu Mogu experienced an exceptionally strong Black Friday/Cyber Monday thanks to Marketo360’s omnichannel marketing approach. Across influencer partnerships, email marketing, Instagram, TikTok, and ads, Marketo360 increased Mogu Mogu’s BFCM sales 250% from the previous year.
                        </p>
                        <p>
                            Marketo360 also utilised its extensive affiliate network of content creators and identified target segments predicted to be most receptive to ad campaigns, rounding out the BFCM with a 270% return on investment.
                        </p>
                    </div>

                    {/* The Results */}
                    <div>
                        <h3 className="text-2xl font-bold text-black uppercase mb-4">THE RESULTS</h3>
                        <p className="mb-6">
                            Marketo360’s ability to understand the soft drink market and the Mogu Mogu audience turned the brand into a social media sensation seemingly overnight.
                        </p>
                        <p className="mb-6">
                            Within a year, Mogu Mogu’s Instagram account reached 13k followers and 97k posts under #MoguMogu. The brand’s TikTok accounts quickly blew up, reaching 104k followers, 2 million likes, and 445 million views under #MoguMogu.
                        </p>
                        <p className="mb-6">
                            In 2023, Mogu Mogu was the 3rd best-selling drink on TikTok after big-name competitors Prime and Lucozade.
                        </p>
                        <p>
                            Mogu Mogu’s Instagram and TikTok accounts continue to reach hundreds of thousands of accounts each month with similar levels of engagement compared to their big-name competitors.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default CaseStudyBody;
