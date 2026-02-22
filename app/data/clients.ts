export const clientLogos = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    src: `/clients/${i + 1}.png`,
    alt: `Client ${i + 1}`,
}));
