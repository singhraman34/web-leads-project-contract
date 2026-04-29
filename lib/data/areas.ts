const areaImages = [
  "/images/premium-mumbai-1.png",
  "/images/premium-mumbai-2.png",
  "/images/premium-mumbai-3.png",
  "/images/premium-mumbai-4.png",
  "/images/premium-mumbai-5.png",
  "/images/pexels-artbovich-6032416.jpg",
  "/images/pexels-artbovich-6284237.jpg",
  "/images/pexels-artbovich-6297084.jpg",
  "/images/pexels-artbovich-6315808.jpg",
  "/images/pexels-artbovich-6580416.jpg",
  "/images/pexels-artbovich-6758776.jpg",
  "/images/3d-rendering-modern-luxury-hotel-office-reception-meeting-lounge.jpg",
  "/images/3d-rendering-white-minimal-kitchen-with-wood-decoration.jpg",
  "/images/3d-room-interior-with-classic-design-furniture.jpg",
  "/images/ai-generated-modern-styled-entryway.jpg",
  "/images/beautiful-kitchen-interior-design.jpg",
  "/images/construction-site-interior.jpg",
  "/images/gabriel-alenius-cPDTVCsbxcg-unsplash.jpg",
  "/images/japanese-house-entrance.jpg",
  "/images/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg",
  "/images/kitchen-with-small-space-modern-design.jpg",
  "/images/minimalist-kitchen-interior-design.jpg",
  "/images/modern-elegant-living-room-with-fireplace.jpg",
  "/images/modern-kitchen-interior-design.jpg",
  "/images/modern-styled-entryway.jpg",
  "/images/outdoor-sofa-with-beige-cushions-coffee-table-front-restaurant-window.jpg",
  "/images/pexels-christa-grover-977018-2121121.jpg",
  "/images/pexels-fotoaibe-1571459.jpg",
  "/images/pexels-fotoaibe-1571460.jpg",
  "/images/pexels-fotoaibe-1643383.jpg",
  "/images/pexels-houzlook-3356416.jpg",
  "/images/pexels-jonathanborba-3316926.jpg",
  "/images/pexels-pixabay-276528.jpg",
  "/images/pexels-pixabay-276663.jpg",
  "/images/pexels-pixabay-533157.jpg",
  "/images/pexels-tiana-18128-2995012.jpg",
  "/images/pexels-vika-glitter-392079-1648776.jpg",
  "/images/tiler-working-renovation-apartment.jpg",
  "/images/mumbai-hq-premium.png",
  "/images/mumbai-hq.png",
  "/images/3d-rendering-modern-luxury-hotel-office-reception-meeting-lounge (1).jpg",
  "/images/tiler-working-renovation-apartment (1).jpg"
];

export const AREAS_WE_SERVE = [
  { name: "Andheri East" }, { name: "Andheri West" },
  { name: "Bandra East" }, { name: "Bandra West" },
  { name: "Borivali East" }, { name: "Borivali West" },
  { name: "Kandivali East" }, { name: "Kandivali West" },
  { name: "Malad East" }, { name: "Malad West" },
  { name: "Goregaon East" }, { name: "Goregaon West" },
  { name: "Jogeshwari East" }, { name: "Jogeshwari West" },
  { name: "Vile Parle East" }, { name: "Vile Parle West" },
  { name: "Santacruz East" }, { name: "Santacruz West" },
  { name: "Kurla East" }, { name: "Kurla West" },
  { name: "Ghatkopar East" }, { name: "Ghatkopar West" },
  { name: "Powai" },
  { name: "Mulund East" }, { name: "Mulund West" },
  { name: "Bhandup" }, { name: "Nahur" },
  { name: "Chembur" }, { name: "Govandi" },
  { name: "Dadar" }, { name: "Matunga" },
  { name: "Parel" }, { name: "Lower Parel" },
  { name: "Worli" }, { name: "Prabhadevi" },
  { name: "Colaba" }, { name: "Churchgate" }, { name: "Marine Lines" },
  { name: "Byculla" }, { name: "Mazgaon" },
  { name: "Thane" }, { name: "Navi Mumbai" }
].map((area, index) => {
  const name = area.name.toLowerCase();
  let region = "South"; // Default for South Mumbai areas like Colaba, Worli
  if (name.includes("east")) region = "East";
  else if (name.includes("west")) region = "West";
  else if (["powai", "mulund", "vikhroli", "bhandup", "nahur", "chembur", "govandi"].some(r => name.includes(r))) region = "East";
  else if (["dadar", "matunga", "parel", "byculla", "mazgaon"].some(r => name.includes(r))) region = "Central";
  else if (["thane", "navi mumbai"].some(r => name.includes(r))) region = "Suburban";

  return {
    ...area,
    slug: area.name.toLowerCase().replace(/\s+/g, "-"),
    image: areaImages[index] || "/images/mumbai-hq-premium.png",
    projectsCompleted: ((index * 17) % 35) + 8,
    region: region,
    badge: index % 8 === 0 ? "Popular" : index % 13 === 0 ? "Premium" : undefined
  };
});

export function getAreaBySlug(slug: string) {
  return AREAS_WE_SERVE.find(a => a.slug === slug);
}
