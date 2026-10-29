/**
 * ColorWorks Creative — site content data.
 *
 * All copy, project metadata, services, testimonials and blog posts
 * live here so they can be rendered server-side for SEO and easily
 * edited in one place.
 */

export type ProjectDiscipline =
  | "Branding & Visual Identity"
  | "Print + Editorial Design"
  | "Advertising & Marketing Design"
  | "Environmental Design"
  | "Digital Design"
  | "Packaging & Retail";

export type ProjectIndustry =
  | "Nonprofit"
  | "Hospitality / Restaurant"
  | "Medical / Tech"
  | "Editorial"
  | "Real Estate";

export interface ProjectImage {
  src: string;
  alt: string;
  /** Optional caption shown below the image in the detail view */
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  /** Short headline shown on the work card (1–7 words) */
  shortTitle: string;
  /** The list-page excerpt (1–2 sentences) */
  excerpt: string;
  /** The detail-page lead paragraph. Supports inline HTML <a> tags for links. */
  description: string;
  /** Optional additional body paragraphs in the detail view. Supports inline HTML. */
  body?: string[];
  client?: string;
  clientUrl?: string;
  year?: string;
  industry: ProjectIndustry;
  disciplines: ProjectDiscipline[];
  deliverables: string[];
  /** Whether this project is featured on the homepage */
  featured?: boolean;
  /** Curated image gallery (best quality variants only) */
  images: ProjectImage[];
}

export interface Service {
  id: string;
  title: string;
  blurb: string;
  description: string;
  icon: string; // lucide icon name
  deliverables: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readingTime: string;
  tags: string[];
  image: string;
}

/* ------------------------------------------------------------------ */
/*  CONTACT                                                           */
/* ------------------------------------------------------------------ */

export const SITE = {
  name: "ColorWorks Creative",
  legalName: "ColorWorks Creative",
  tagline: "Cheerful · Engaging · Thoughtful",
  description:
    "ColorWorks Creative is a boutique graphic design studio in Austin, TX delivering impeccable branding, print, packaging and editorial design through a seamless, flexible process.",
  url: "https://colorworkscreative.com",
  email: "karli@colorworkscreative.com",
  phone: "(210) 446-8022",
  phoneHref: "tel:+12104468022",
  founded: 2018,
  founder: "Karli Isiyel",
  // Service-area business: no public street address (matches GMB setup).
  // We list the metro + region we serve instead of a fake physical address.
  // NAP consistency: name + phone match the GMB listing exactly.
  address: {
    locality: "Austin",
    region: "TX",
    country: "US",
  },
  // Geographic areas served — used for LocalBusiness.areaServed JSON-LD
  // and shown in the footer as "Serving Austin, TX"
  serviceArea: ["Austin, TX", "San Antonio, TX", "Beyond"],
  geo: { lat: 30.2672, lng: -97.7431 },  // Austin metro centroid
  social: {
    instagram: "https://www.instagram.com/colorworkscreative",
    facebook: "https://www.facebook.com/colorworkscreative",
    linkedin: "https://www.linkedin.com/company/colorworkscreative",
    tiktok: "https://www.tiktok.com/@colorworkscreative",
  },
  credentials: [
    "Female-owned & minority-owned business",
    "15+ years of graphic design experience",
    "100+ clients served since 2018",
  ],
  awards: [
    { year: "2016", name: "Hermes Creative Gold — Infographic" },
    { year: "2017", name: "Hermes Creative Gold — Packaging" },
    { year: "2018", name: "Graphic Design USA — Identity / Branding" },
  ],
};

/* ------------------------------------------------------------------ */
/*  SERVICES                                                          */
/* ------------------------------------------------------------------ */

export const SERVICES: Service[] = [
  {
    id: "branding",
    title: "Logo Design + Branding",
    blurb:
      "Whether you need a single logo refresh or a complete brand guide, we build identities that look as good in a one-pager as they do on a billboard.",
    description:
      "We develop a cohesive look and feel for your brand, then create the supporting marketing materials to showcase it: proposals, social media badges, multi-unit logo versions, and any other promotional collateral you need to tell your story.",
    icon: "Palette",
    deliverables: [
      "Logo design & logo variations",
      "Brand guide / style guide",
      "Color & typography systems",
      "Marketing collateral templates",
      "Social media badges",
    ],
  },
  {
    id: "print-editorial",
    title: "Print + Editorial Design",
    blurb:
      "Brochures, postcards, print ads, long-form documents, booklets, impact reports and magazines — with compelling infographics woven throughout.",
    description:
      "We got our start in print and editorial design and still have a soft spot for the work. Brochures, postcards, print ads and fliers are managed seamlessly by our team from design to execution, including managing the final printing to get your product out the door and in your hands. We design dynamic impact reports, strategic plans, and magazines complete with compelling infographics.",
    icon: "BookOpen",
    deliverables: [
      "Brochures & postcards",
      "Print ads & fliers",
      "Impact reports & strategic plans",
      "Magazines & booklets",
      "Infographic design",
      "Print management",
    ],
  },
  {
    id: "packaging",
    title: "Package Design",
    blurb:
      "Turnkey packaging design for consumer goods and food & beverage — from die line consulting to artwork, photography and 3D rendering.",
    description:
      "Our team gets giddy for every packaging graphic design phone call we get. We're known for our experience in consumer goods package design, and offer turnkey project management to bring your product to life. As expert food and beverage package designers, we arrange for photography, design the artwork and the product campaign to go with it. Still imagining your product? We provide die line consulting and creation and work with your printer to deliver the final product.",
    icon: "Package",
    deliverables: [
      "Food & beverage packaging",
      "Consumer goods packaging",
      "Die line consulting & creation",
      "Photography art direction",
      "3D rendering",
      "Print production management",
    ],
  },
  {
    id: "advertising",
    title: "Advertising & Marketing Design",
    blurb:
      "Digital and print campaigns that move people — social media graphics, ad creative, email campaigns and promotional collateral.",
    description:
      "We design integrated marketing collateral that supports your campaigns across channels. From social media graphics to email templates, promotional cards, business cards and website banners, every asset is designed to feel cohesive and intentional.",
    icon: "Megaphone",
    deliverables: [
      "Social media graphics",
      "Email campaign design",
      "Promotional cards & business cards",
      "Website banners",
      "Print advertising",
    ],
  },
  {
    id: "environmental",
    title: "Environmental Design",
    blurb:
      "Wayfinding, signage and large-scale environmental graphics that help people navigate — and remember — your space.",
    description:
      "We design wayfinding systems, signage programs and environmental graphics that guide people intuitively through your space while reinforcing your brand. Color-coded systems, simplified map styling and clear iconography bring order to complex environments.",
    icon: "MapPin",
    deliverables: [
      "Wayfinding systems",
      "Signage programs",
      "Environmental decals",
      "Map design",
      "Iconography systems",
    ],
  },
  {
    id: "retainer",
    title: "Design Retainer",
    blurb:
      "An extension of your marketing team that understands your brand personality and delivers quality work on an ongoing basis.",
    description:
      "If you're looking for an extension of your marketing team that can embrace your company values, understand your brand personality and deliver quality work on an ongoing basis, we're here for you. ColorWorks offers retainer options to clients who have continuous design needs to fill. We'll don our expertly designed Superwoman cape and work alongside your team whenever duty calls.",
    icon: "Sparkles",
    deliverables: [
      "Ongoing design support",
      "Brand stewardship",
      "Priority turnaround",
      "Dedicated design lead",
      "Monthly retainer packages",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  PORTFOLIO PROJECTS                                                */
/* ------------------------------------------------------------------ */

const img = (folder: string, file: string, alt: string, caption?: string): ProjectImage => ({
  src: `/images/projects/${folder}/${file}`,
  alt,
  caption,
});

export const PROJECTS: Project[] = [
  {
    slug: "kerbey-lane",
    title: "Kerbey Lane",
    shortTitle: "Kerbey Lane",
    excerpt:
      "Long-standing creative partner serving as both art director and designer across menu design, in-store collateral, weekly email campaigns and website banners.",
    description:
      "<a href=\"https://kerbeylanecafe.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Kerbey Lane All Day Cafe</a> is a long-standing creative partner, with our team serving as both art director and designer across a wide range of brand touchpoints. From menu design and in-store collateral to weekly email campaigns, promotional cards, business cards, and website banners, we bring consistency and personality to every piece of communication.",
    body: [
      "Our role extends beyond execution - we help guide the visual direction of the brand, ensuring each asset feels cohesive, intentional, and aligned with Kerbey Lane\u2019s evolving identity. Whether it\u2019s a seasonal promotion or an everyday staple, the goal is always the same: thoughtful design that supports the brand and enhances the guest experience.",
    ],
    client: "Kerbey Lane",
    clientUrl: "https://kerbeylanecafe.com/",
    year: "2021–2024",
    industry: "Hospitality / Restaurant",
    disciplines: ["Print + Editorial Design", "Advertising & Marketing Design"],
    deliverables: ["Menu design", "Email campaigns", "Promotional cards", "Website banners", "Business cards"],
    featured: false,
    images: [
      // Preview: the menu with the orange background (per user request)
      img("kerbey-lane", "gf_vegan-menu-mockup-4.png", "Kerbey Lane gluten-free vegan menu on orange background"),
      img("kerbey-lane", "gf_vegan-menu-mockup-1.png", "Kerbey Lane vegan menu mockup — interior spread"),
      img("kerbey-lane", "kerbey-lane-menu-landscape-mockup-3.png", "Kerbey Lane seasonal menu — landscape spread"),
      img("kerbey-lane", "seasonal-menu-kerbey-mockup-1.png", "Kerbey Lane seasonal menu — cover mockup"),
      img("kerbey-lane", "seasonal-menu-kerbey-mockup-2.png", "Kerbey Lane seasonal menu — interior spread"),
      // Email campaign GIFs
      img("kerbey-lane", "email-mockup-3.gif", "Kerbey Lane email campaign design — animated mockup"),
      img("kerbey-lane", "tax-day-email-design-edited.gif", "Kerbey Lane Tax Day email campaign — animated design"),
    ],
  },
  {
    slug: "united-way-for-greater-austin",
    title: "United Way for Greater Austin",
    shortTitle: "United Way Greater Austin",
    excerpt:
      "On retainer, we develop event collateral for signature moments like A Night United plus quarterly campaign branding, strategic plans and one-page infographics.",
    description:
      "<a href=\"https://unitedwayaustin.org/\" target=\"_blank\" rel=\"noopener noreferrer\">United Way for Greater Austin</a> is a long-term creative partner, with our team working closely alongside theirs to support both day-to-day communications and large-scale initiatives. On retainer, we develop a wide range of materials, from event collateral for signature moments like <a href=\"https://donate.unitedwayaustin.org/p/a-night-united-2026\" target=\"_blank\" rel=\"noopener noreferrer\">A Night United</a> to quarterly campaign branding, strategic plans, and one-page infographics.",
    body: [
      "Much of our work is rooted in mission-driven storytelling, helping translate complex social impact initiatives into clear, accessible, and compelling visuals that connect with diverse audiences. We understand the nuance and responsibility that comes with nonprofit work, and approach each project with intention, ensuring the design not only looks good, but supports understanding, engagement, and action. The result is a cohesive, flexible system that helps amplify their impact across every touchpoint.",
    ],
    client: "United Way for Greater Austin",
    clientUrl: "https://unitedwayaustin.org/",
    year: "2022–2027",
    industry: "Nonprofit",
    disciplines: ["Branding & Visual Identity", "Print + Editorial Design", "Advertising & Marketing Design"],
    deliverables: ["Event collateral", "Campaign branding", "Strategic plans", "One-page infographics"],
    featured: false,
    images: [
      img("united-way-for-greater-austin", "annual-report-square_1.png", "UWGA — A Night United event collateral"),
      img("united-way-for-greater-austin", "annual-report-square_2.png", "UWGA — quarterly campaign branding"),
      img("united-way-for-greater-austin", "fsi-booklet-square_2.png", "UWGA — strategic plan design"),
      img("united-way-for-greater-austin", "screenshot-2026-04-29-at-11.09.27-am.png", "UWGA — infographic design"),
      img("united-way-for-greater-austin", "screenshot-2026-04-29-at-11.10.39-am.png", "UWGA — social media graphics"),
      img("united-way-for-greater-austin", "screenshot-2026-04-29-at-11.11.31-am.png", "UWGA — campaign collateral"),
      img("united-way-for-greater-austin", "55138113898_0a37a24ae4_k.jpg", "UWGA — event signage"),
      img("united-way-for-greater-austin", "55149995557_fb36aae6c7_k.jpg", "UWGA — community impact collateral"),
      img("united-way-for-greater-austin", "55151046363_7b1e06052c_k.jpg", "UWGA — campaign launch photography"),
      img("united-way-for-greater-austin", "55151049598_00935b25b4_k.jpg", "UWGA — community event photography"),
      img("united-way-for-greater-austin", "55151050163_87513ec4ad_k.jpg", "UWGA — volunteer engagement photography"),
    ],
  },
  {
    slug: "hemisfair",
    title: "Hemisfair — Wayfinding Map",
    shortTitle: "Hemisfair",
    excerpt:
      "A 'You Are Here' wayfinding map that blends clarity with character — color-coded, simplified styling with clear iconography.",
    description:
      "For <a href=\"https://hemisfair.org/\" target=\"_blank\" rel=\"noopener noreferrer\">Hemisfair</a> , we designed a \u201cYou Are Here\u201d wayfinding map that blends clarity with character. The goal was to create something highly functional at a glance, easy to orient, easy to navigate, while still feeling inviting and visually cohesive within the park environment.",
    body: [
      "We developed a color-coded system, simplified map styling, and clear iconography to guide visitors through the district, highlighting key destinations, amenities, and points of interest. The result is a piece that not only helps people get where they\u2019re going, but enhances the overall experience of the space through thoughtful, approachable design.",
    ],
    client: "Hemisfair",
    clientUrl: "https://hemisfair.org/",
    year: "2024",
    industry: "Nonprofit",
    disciplines: ["Environmental Design", "Branding & Visual Identity"],
    deliverables: ["Wayfinding map design", "Color-coded system", "Iconography"],
    featured: false,
    images: [
      img("hemisfair", "advertising-panel-park3.png", "Hemisfair — wayfinding map at park entrance"),
      img("hemisfair", "screenshot-2026-04-21-at-10.15.12-am.png", "Hemisfair — wayfinding map detail"),
      img("hemisfair", "screenshot-2026-04-21-at-10.15.21-am.png", "Hemisfair — map detail with iconography"),
    ],
  },
  {
    slug: "baby-greens",
    title: "Baby Greens — Summer of Love",
    shortTitle: "Baby Greens",
    excerpt:
      "Reinventing fast food with fresh, vibrant options. We brought their Summer of Love energy into social media images, t-shirt graphics and a new menu board.",
    description:
      "Baby Greens is all about reinventing fast food with fresh, vibrant options. When they came to us for help with their Summer of Love promotional campaign, we brought that energy into social media images and logos that were fun and funky.",
    body: [
      "Their team loved the images so much, we went on to create T-Shirt images for the campaign and beyond. When Baby Greens moved to their new location, they came right back to us to design their Menu Board with an updated style and sizing.",
    ],
    client: "Baby Greens",
    year: "2022",
    industry: "Hospitality / Restaurant",
    disciplines: ["Advertising & Marketing Design", "Branding & Visual Identity"],
    deliverables: ["Social media graphics", "T-shirt graphics", "Menu board design", "Logo refresh"],
    featured: false,
    images: [
      img("baby-greens", "baby-greens-1.png", "Baby Greens social media campaign graphic — Summer of Love"),
      img("baby-greens", "baby-greens-2.png", "Baby Greens social media carousel — Summer of Love"),
      img("baby-greens", "baby-greens-3.png", "Baby Greens social media graphic — vibrant illustrated produce"),
      img("baby-greens", "baby-greens-4.png", "Baby Greens t-shirt design"),
      img("baby-greens", "baby-greens-5.png", "Baby Greens promotional artwork"),
      img("baby-greens", "baby-greens-6.png", "Baby Greens menu board layout"),
      img("baby-greens", "baby-greens-7.png", "Baby Greens menu board — installed"),
      img("baby-greens", "baby-greens-8.png", "Baby Greens in-store menu photography"),
    ],
  },
  {
    slug: "origen-biomedical",
    title: "Origen Biomedical — Tradeshow Refresh",
    shortTitle: "Origen Biomedical",
    excerpt:
      "A full brand refresh followed by 16 redesigned product brochures, pop-up banners and trade show collateral — polished, straightforward and eye-catching.",
    description:
      "Some clients come to us needing a full brand refresh. Origen was one such client. Once that look was solidified, Origen was looking to create a new, fresh face at tradeshows to promote their products.",
    body: [
      "We took on the challenge to redesign sixteen product brochures and booklets, as well as multiple trade show materials including pop up banners and collateral. Their final look was polished, straightforward and eye-catching.",
    ],
    client: "Origen Biomedical",
    year: "2022",
    industry: "Medical / Tech",
    disciplines: ["Branding & Visual Identity", "Print + Editorial Design"],
    deliverables: ["Brand refresh", "Product brochures (16)", "Pop-up banners", "Trade show collateral"],
    featured: false,
    images: [
      img("origen-biomedical", "origen-banner-01.png", "Origen Biomedical — trade show pop-up banner"),
      img("origen-biomedical", "origen-banner-3-01.png", "Origen Biomedical — large-format banner"),
      img("origen-biomedical", "origen-biomedical-2.png", "Origen Biomedical — product brochure spread"),
      img("origen-biomedical", "origen-biomedical-3.png", "Origen Biomedical — product brochure interior"),
      img("origen-biomedical", "origen-brochure1.png", "Origen Biomedical — brochure cover"),
      img("origen-biomedical", "origen-brochure2.png", "Origen Biomedical — brochure interior spread"),
    ],
  },
  {
    slug: "shiftmed",
    title: "ShiftMed — Tradeshow Marketing Refresh",
    shortTitle: "ShiftMed",
    excerpt:
      "ShiftMed had just rebranded. We learned their new guidelines and produced stunning printed materials for an upcoming tradeshow.",
    description:
      "ShiftMed recently went through a rebrand and they needed help with refreshing some marketing collateral. ColorWorks swooped in and learned about their new brand guidelines and helped them create some stunning printed materials to use at an upcoming tradeshow.",
    client: "ShiftMed",
    year: "2022",
    industry: "Medical / Tech",
    disciplines: ["Advertising & Marketing Design", "Print + Editorial Design"],
    deliverables: ["Tradeshow marketing materials", "Brand-aligned print collateral"],
    featured: false,
    images: [
      img("shiftmed", "shiftmed-01.png", "ShiftMed — tradeshow booth banner"),
      img("shiftmed", "shiftmed-02.png", "ShiftMed — tradeshow marketing collateral"),
      img("shiftmed", "shiftmed1.png", "ShiftMed — print collateral detail"),
      img("shiftmed", "shiftmed2.png", "ShiftMed — printed brochure spread"),
    ],
  },
  {
    slug: "texas-association-of-museums",
    title: "Texas Association of Museums — Annual Conference",
    shortTitle: "Texas Association of Museums",
    excerpt:
      "Each year we develop a custom conference brand inspired by the theme and host city — carried across a 70+ page program, signage, nametags and digital templates.",
    description:
      "ColorWorks Creative partners with the <a href=\"https://www.texasmuseums.org/\" target=\"_blank\" rel=\"noopener noreferrer\">Texas Association of Museums</a> to shape the look and feel of the TAM Annual Meeting each year\u2014an ever-evolving conference that brings together museum professionals from across the state for days of learning, connection, and big ideas.",
    body: [
      "Each year starts fresh. We develop a custom brand inspired by the conference theme and host city, then carry it across everything attendees see and touch. That means designing a full system of assets, from large-scale wayfinding signage that keeps people moving to a 70+ page printed program (a bit of a beast, but we love it), plus nametags, digital presentation templates, social media graphics, and more.",
      "The goal is simple: make a complex, multi-day conference feel seamless. Every detail works together to guide, inform, and create a cohesive experience that feels intentional from the first impression to the final session.",
    ],
    client: "Texas Association of Museums",
    clientUrl: "https://www.texasmuseums.org/",
    year: "2024–2027",
    industry: "Nonprofit",
    disciplines: ["Branding & Visual Identity", "Environmental Design", "Print + Editorial Design"],
    deliverables: ["Conference brand system", "70+ page program", "Wayfinding signage", "Nametags", "Digital templates", "Social media graphics"],
    featured: true,
    images: [
      img("texasassociationofmuseums", "tam-2026-program-square.png", "TAM 2026 — program cover"),
      img("texasassociationofmuseums", "tam-2026-program-square_1.png", "TAM 2026 — alternate program cover"),
      img("texasassociationofmuseums", "tam-2026-program-square-2.png", "TAM 2026 — program interior spread"),
      img("texasassociationofmuseums", "tam-2026-program-square_4.png", "TAM 2026 — program detail"),
      img("texasassociationofmuseums", "screenshot-2026-04-29-at-11.05.44-am.png", "TAM 2026 — conference branding in context"),
    ],
  },
  {
    slug: "united-ways-of-texas",
    title: "United Ways of Texas — Built for Texas Impact Report",
    shortTitle: "United Ways of Texas",
    excerpt:
      "We organized their data into a storyline, tested and perfected visualizations, and executed a publication that communicates their message with style and impact.",
    description:
      "<a href=\"https://www.uwtexas.org/\" target=\"_blank\" rel=\"noopener noreferrer\">United Ways of Texas</a> knew our reputation for effective visual communication with nonprofits and corporations. When creating their Built for Texas Impact Report, United Ways of Texas partnered with ColorWorks Creative to design a publication with engaging infographics and solid visuals.",
    body: [
      "What they got was our methodical approach that organized their data into a storyline, tested and perfected various visualizations, and executed a final product that communicated their message with style and impact. Pleased with the final product, United Ways of Texas engaged us to design the Built for Texas Toolkit to equip community leaders with communication resources, including illustrated infographics, social media graphics and media talking points.",
      "<a href=\"https://www.uwtexas.org/\" target=\"_blank\" rel=\"noopener noreferrer\">United Ways of Texas (UWT)</a> improves the lives of Texans by building the capacity of local United Ways and enhancing their impact. As a strategy to build awareness of and increase investment in the nonprofit sector of Texas, UWT developed a report to document the impact of the sector on the entire state. Spoiler Alert: the impact is huge, and UWT had as many data points to choose from as they did ways to communicate just how huge it is. UWT partnered with us to develop this report into a product that conveys the breadth and complexity of their findings simply and beautifully.",
      "Process is key to the KarliDesigns approach. Jumping straight into a big project can feel energizing for a client and a designer, but it can also lead to lots of revisions and unnecessary work. We tackled this project into three distinct phases.",
      "Find the Story: With so much information to share, the first challenge was to determine the story to tell through the data. This was the hardest part of the entire project - piecing together the information in a way that takes the reader on a journey. We flipped through all of the papers shared with her to really understand what was being reported and how it could compel Texans to look differently at the nonprofit sector.",
      "Plot the Journey: Once we had the thoughts in order, it was time to make sure that the client wanted to tell the same story. We presented her first version of the report without a single fancy chart, pull-quote or photo. This allowed UWT to understand and agree to the design of the journey before there was anything aesthetic to consider. Then We layered in super-simple visualizations of the data to make sure the numbers were clearly taking us on that journey. After a few rounds of revisions, the report was ready to get pretty!",
      "Style the data : With the path set, we started the visual design process by developing two possible look-and-feels for UWT to consider for the report and then applied this font/color/illustration extravaganza to the first few pages of the report for further review. (Not sure if you\u2019ve caught on yet, but we prefer working smart to working hard.) The triple-check on style looked great, giving me the go-ahead to design the full book for publication and PDF.",
      "For UWT, we were more like a sommelier than a drive-through screen. We didn\u2019t just take their order and design a report, We truly partnered with them on a process that got them organized and involved in producing an incredible report. Instead of feeling overwhelmed with all the data, UWT was able to take it step by step, considering the story and the style separately, and getting a better product through everyone\u2019s involvement.",
      "Making it work for you : You are great at making an impact in our community; We are great at designing for print and web. Let\u2019s both stick to what we do best and partner to communicate your impact through clean, engaging design. We promise to make the process simple, interactive and (gasp!) fun!",
    ],
    client: "United Ways of Texas",
    clientUrl: "https://www.uwtexas.org/",
    year: "2023",
    industry: "Nonprofit",
    disciplines: ["Print + Editorial Design", "Advertising & Marketing Design"],
    deliverables: ["Impact report design", "Infographic design", "Toolkit design", "Social media graphics", "Media talking points"],
    featured: false,
    images: [
      img("united-ways-of-texas", "united-ways-texas-1.png", "United Ways of Texas — Built for Texas Impact Report cover"),
      img("united-ways-of-texas", "united-ways-texas-2.png", "UWT — impact report interior spread"),
      img("united-ways-of-texas", "united-ways-texas-3.png", "UWT — infographic spread"),
      img("united-ways-of-texas", "united-ways-texas-4.png", "UWT — Built for Texas Toolkit cover"),
      img("united-ways-of-texas", "united-ways-texas-5.png", "UWT — toolkit interior spread"),
      img("united-ways-of-texas", "united-ways-texas-6.png", "UWT — illustrated infographic"),
      img("united-ways-of-texas", "united-ways-texas-7.png", "UWT — social media graphics set"),
    ],
  },
  {
    slug: "savor",
    title: "Meals on Wheels — SAVOR Gala",
    shortTitle: "Savor Gala",
    excerpt:
      "A comprehensive event identity for Meals on Wheels San Antonio\u2019s SAVOR gala, carried across program, menus, signage, stage graphics and large-scale environmental pieces.",
    description:
      "For <a href=\"https://www.mowsatx.org/\" target=\"_blank\" rel=\"noopener noreferrer\">Meals on Wheels San Antonio\u2019s</a> SAVOR gala, we developed a comprehensive event identity that carries through every detail of the guest experience. SAVOR, \u201cThe Art of Eating for Good,\u201d is an annual culinary event that brings together local chefs and sommeliers to support seniors and disabled adults in the community , and the branding needed to reflect both its elevated atmosphere and meaningful mission.",
    body: [
      "We created a cohesive visual system applied across all event touchpoints, including the program, menus, table signage, wayfinding assets, stage graphics, and large-scale environmental pieces. The result is a vibrant, recognizable identity that feels both celebratory and intentional, helping unify the event while reinforcing its purpose at every interaction point. Work done in collaboration with <a href=\"https://www.optinexperts.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Opt In Experts</a> .",
    ],
    client: "Meals on Wheels San Antonio",
    clientUrl: "https://www.mowsatx.org/",
    year: "2024",
    industry: "Nonprofit",
    disciplines: ["Branding & Visual Identity", "Print + Editorial Design", "Environmental Design"],
    deliverables: ["Event identity", "Program design", "Menus", "Table signage", "Stage graphics", "Wayfinding"],
    featured: true,
    images: [
      // Preview swapped to 10.59.58 (original site's first image, slightly higher res)
      img("savor", "screenshot-2026-04-21-at-10.59.58-am.png", "SAVOR gala — program cover"),
      img("savor", "screenshot-2026-04-21-at-10.59.37-am.png", "SAVOR gala — menu design"),
      img("savor", "screenshot-2026-04-21-at-10.59.48-am.png", "SAVOR gala — table signage"),
      img("savor", "screenshot-2026-04-21-at-11.00.10-am.png", "SAVOR gala — stage graphics"),
      img("savor", "screenshot-2026-04-21-at-11.00.23-am.png", "SAVOR gala — wayfinding"),
      img("savor", "screenshot-2026-04-21-at-11.00.33-am.png", "SAVOR gala — environmental piece"),
      img("savor", "screenshot-2026-04-21-at-11.01.08-am.png", "SAVOR gala — large-scale environmental"),
    ],
  },
  {
    slug: "doseum",
    title: "The DoSeum — Birthday Bash",
    shortTitle: "DoSeum Birthday Bash",
    excerpt:
      "A playful, immersive Candyland-inspired concept brought to life through event branding, environmental decals, custom gameboard and printed collateral.",
    description:
      "For <a href=\"https://www.thedoseum.org/\" target=\"_blank\" rel=\"noopener noreferrer\">The DoSeum\u2019s</a> 2024 Birthday Bash, we brought a playful, immersive Candyland-inspired concept to life through a full suite of event branding and collateral. Designed to match the vibrant, sugar-fueled atmosphere of the evening, every touchpoint was considered, from large-scale environmental decals and a custom gameboard experience to logo design, table numbers, and printed programs.",
    body: [
      "We focused on creating a cohesive visual world that carried guests through the event, turning branding into part of the experience rather than just supporting it. The result was a bold, highly interactive environment that reinforced the theme while elevating the overall guest experience. Photography by <a href=\"https://www.vanessavelazquez.com/events/2024doseumbdaybash/\" target=\"_blank\" rel=\"noopener noreferrer\">Vanessa Vel\u00e1zquez</a> , work done in collaboration with <a href=\"https://www.optinexperts.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Opt In Experts</a> .",
    ],
    client: "The DoSeum",
    clientUrl: "https://www.thedoseum.org/",
    year: "2024",
    industry: "Hospitality / Restaurant",
    disciplines: ["Branding & Visual Identity", "Environmental Design", "Print + Editorial Design"],
    deliverables: ["Event branding", "Environmental decals", "Custom gameboard", "Logo design", "Printed programs"],
    featured: true,
    images: [
      img("doseum", "screenshot-2026-04-21-at-10.23.53-am.png", "DoSeum Birthday Bash — branding"),
      img("doseum", "screenshot-2026-04-21-at-10.24.26-am.png", "DoSeum Birthday Bash — environmental decals"),
      img("doseum", "screenshot-2026-04-21-at-10.24.42-am.png", "DoSeum Birthday Bash — custom gameboard"),
      img("doseum", "screenshot-2026-04-21-at-10.25.01-am.png", "DoSeum Birthday Bash — printed program"),
      img("doseum", "screenshot-2026-04-21-at-10.25.10-am.png", "DoSeum Birthday Bash — table numbers"),
      img("doseum", "screenshot-2026-04-21-at-10.47.10-am.png", "DoSeum Birthday Bash — event photography"),
      img("doseum", "screenshot-2026-04-21-at-10.47.22-am.png", "DoSeum Birthday Bash — immersive environment"),
      img("doseum", "screenshot-2026-04-21-at-10.47.31-am.png", "DoSeum Birthday Bash — guest experience"),
      img("doseum", "screenshot-2026-04-21-at-10.48.18-am.png", "DoSeum Birthday Bash — full event setting"),
    ],
  },
  {
    slug: "book-nerd",
    title: "Book Nerd — Brand Identity",
    shortTitle: "Book Nerd",
    excerpt:
      "A complete branding package for a San Antonio independent bookstore — logo, visual identity and interior color palette selection.",
    description:
      "ColorWorks Creative partnered with <a href=\"https://www.book-nerd.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Book Nerd</a> to build a brand as bold and curious as the readers it serves. From the ground up, we developed a complete branding package that captures the shop\u2019s playful, literary spirit\u2014balancing a love for books with a modern, approachable edge.",
    body: [
      "Beyond the logo and visual identity, we extended the brand into the physical space by helping select interior color palettes for the San Antonio storefront, creating an environment that feels cohesive, inviting, and distinctly Book Nerd. The result is an independent bookstore brand that stands out in San Antonio while creating a memorable experience for book lovers both in-store and online.",
    ],
    client: "Book Nerd",
    clientUrl: "https://www.book-nerd.com/",
    year: "2025",
    industry: "Hospitality / Restaurant",
    disciplines: ["Branding & Visual Identity", "Environmental Design"],
    deliverables: ["Logo design", "Visual identity", "Interior color palette", "Brand guide"],
    featured: true,
    images: [
      img("book-nerd", "chatgpt-image-apr-29-2026-11_24_36-am.png", "Book Nerd — logo & brand mark"),
      img("book-nerd", "chatgpt-image-apr-29-2026-11_30_40-am.png", "Book Nerd — brand application"),
      img("book-nerd", "screenshot-2026-04-29-at-11.29.40-am.png", "Book Nerd — storefront signage"),
      img("book-nerd", "screenshot-2026-04-29-at-11.30.25-am.png", "Book Nerd — in-store brand experience"),
    ],
  },
  {
    slug: "the-private-client",
    title: "The Private Client — Magazine",
    shortTitle: "The Private Client",
    excerpt:
      "An 82-page, full-color, ad-free magazine art-directed for an exclusive client list — luxurious, bold and high-end.",
    description:
      "AW Media approached us about a magazine that a private client wanted to be produced and they needed an art director for the publication. We worked closely with AW Media and PCMA Lending to craft a luxurious, bold publication that they could deliver to their exclusive client list.",
    body: [
      "The 82-page publication is full color, picture heavy, includes zero ads, and is the high-end magazine of our dreams!",
    ],
    client: "AW Media / PCMA Lending",
    year: "2023",
    industry: "Editorial",
    disciplines: ["Print + Editorial Design"],
    deliverables: ["Magazine art direction", "82-page publication", "Full-color layout design"],
    featured: false,
    images: [
      img("the-private-client", "private-client-1.png", "The Private Client — magazine cover"),
      img("the-private-client", "private-client-3.png", "The Private Client — interior editorial spread"),
      img("the-private-client", "private-client-4.png", "The Private Client — full-page photography spread"),
      img("the-private-client", "private-client-5.png", "The Private Client — back cover"),
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  TESTIMONIALS                                                      */
/* ------------------------------------------------------------------ */

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Karli is a crucial member of our external team at United Way for Greater Austin! She is not only incredibly easy to work with, but everything she creates is beautiful and hits the mark every time. Additionally, she is super quick in getting things done and always hit, our sometimes very tight, deadlines. I would 100% recommend them to anyone looking to take their graphics to the next level!",
    author: "United Way for Greater Austin",
    role: "Long-term retainer partner",
  },
  {
    quote:
      "Karli jumped on a project with us when it was already started, after another designer stepped back. She hit the ground running right away, really acting as a thought partner and project organizer. She asked us all the right questions at the right times, and kept us informed about work progress and time lines along the way. Additionally, she is generally responsive and thorough in all her communications. In the end, the design and product exceeded all our expectations; we\u2019re very proud of the results.",
    author: "United Ways of Texas",
    role: "Impact Report project partner",
  },
  {
    quote:
      "I've worked with Karli and her team for years and am continually so impressed with the quality of her work, her responsiveness, and organization. She always listens to our client's requests and then adds her own unique flair to deliver a high quality product that delights our customers. If you are looking for a graphic designer, Colorworks Creative should be at the top of your list!",
    author: "HMPSN",
    role: "Multi-year creative partner",
  },
  {
    quote:
      "We have utilized Karli for several projects over the course of a few years and have absolutely loved working with her. The work is top notch, responsiveness is prompt, and overall she has been a pleasure to work with. I would absolutely recommend her services to anyone needing help with various design needs!",
    author: "My Event is the Bomb",
    role: "Annual conference partner",
  },
];

/* ------------------------------------------------------------------ */
/*  BLOG POSTS                                                        */
/* ------------------------------------------------------------------ */

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "rebrand-vs-brand-refresh-with-experienced-graphic-designer",
    title: "ReBrand vs. Brand Refresh with an Experienced Graphic Designer",
    excerpt:
      "While a brand refresh and rebranding might sound similar, there are some key differences that make them very different. Learn what those differences are from an experienced graphic designer.",
    date: "2022-02-15",
    readingTime: "5 min read",
    tags: ["branding", "tips & tricks"],
    image: "/images/blog/rebrand-vs-refresh.jpg",
  },
  {
    slug: "communication-is-key-how-to-communicate-with-a-graphic-designer",
    title: "Communication is Key — How to Communicate with a Graphic Designer",
    excerpt:
      "Nobody likes to be unprepared, so it only makes sense that when meeting with a new designer for the first time you are expected to come prepared.",
    date: "2022-03-22",
    readingTime: "4 min read",
    tags: ["process", "tips & tricks"],
    image: "/images/blog/how-to-communicate.jpg",
  },
  {
    slug: "why-does-good-graphic-design-cost-more",
    title: "Why Does Good Graphic Design Cost More?",
    excerpt:
      "A lot of people think design is expensive, whether they need branding help, website design, print design, or some other service. But the truth is, good graphic design isn't expensive.",
    date: "2022-04-12",
    readingTime: "6 min read",
    tags: ["company", "tips & tricks"],
    image: "/images/blog/costs-more.jpg",
  },
];

/* ------------------------------------------------------------------ */
/*  CLIENTS — for the "Some of Our Clients" marquee                   */
/* ------------------------------------------------------------------ */

export const CLIENTS: string[] = [
  "United Way for Greater Austin",
  "United Ways of Texas",
  "Texas Association of Museums",
  "The DoSeum",
  "Kerbey Lane",
  "Baby Greens",
  "Hemisfair",
  "Meals on Wheels San Antonio",
  "Origen Biomedical",
  "Book Nerd",
  "Covenant House",
];
