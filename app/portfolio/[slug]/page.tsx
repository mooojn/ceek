import React from 'react';
import { notFound } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import CaseStudyHeader from '../../components/case-study/CaseStudyHeader';
import CaseStudyStats from '../../components/case-study/CaseStudyStats';
import CaseStudyIntro from '../../components/case-study/CaseStudyIntro';
import CaseStudyServices from '../../components/case-study/CaseStudyServices';
import CaseStudyBody from '../../components/case-study/CaseStudyBody';
import MoreCeekClients from '../../components/case-study/MoreCeekClients';
import { getPortfolioBySlug, getAllPortfolioSlugs } from '../../data/portfolio';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return getAllPortfolioSlugs().map((slug) => ({ slug }));
}

export default async function PortfolioCaseStudyPage({ params }: PageProps) {
    const { slug } = await params;
    const data = getPortfolioBySlug(slug);

    if (!data) {
        notFound();
    }

    return (
        <main className="flex flex-col min-h-screen bg-white">
            <Navbar />

            <CaseStudyHeader
                title={data.title}
                client={data.client}
                clientType={data.clientType}
                location={data.location}
            />

            {/* Hero Image - Full Width */}
            <div className="w-full h-[50vh] md:h-[70vh] relative">
                <img
                    src={data.heroImage}
                    alt={data.title}
                    className="w-full h-full object-cover"
                />
            </div>

            <CaseStudyIntro
                subtitle={data.introSubtitle}
                title={data.introTitle}
                paragraphs={data.introParagraphs}
            />

            <CaseStudyStats
                title={data.statsTitle}
                stats={data.stats}
            />

            <CaseStudyBody sections={data.bodySections} />

            <CaseStudyServices services={data.services} />

            {/* <MoreCeekClients /> */}

            <CTA
                title="LET'S WORK TOGETHER"
                text="If you have a business you are looking to scale through digital marketing, make an enquiry at CEEK to set up the initial call to align on goals and discuss how they can be achieved."
            />

            <Footer />
        </main>
    );
}
