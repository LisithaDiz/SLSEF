import { facebook, instagram, twitter } from "../assets/icons";
import { archaeology, astronomy, biochemistry, bioinformatics, biomedical, biomimetic, calculating,cell,  diagnose, genetic_engineering,integrated_system,mechanical, microbiology, sustainability, planet_earth,plant, robot,social_science    } from "../assets/icons";
// import {archaeology} from "../assets/icons";
import { albert, Nelson, jobs, customer1, customer2, iesl,  gov, nsf, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#compete", label: "Compete" },
    { href: "#winners", label: "Winners" },
    { href: "#eventsandupdates", label: "Events and Updates" },
    { href: "#contact-us", label: "Contact Us" },

];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: albert,
        name: "Imagination",
        quote: "\"The true sign of intelligence is not knowledge but imagination.\""
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: Nelson,
        name: "Courage",
        quote: "\"It always seems impossible until it’s done.\""
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: jobs,
        name: "Innovation",
        quote: "\"Innovation distinguishes between a leader and a follower.\""
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: iesl,
        name: "Institution of Engineers, Sri Lanka",
        price: "$200.20",
    },
    {
        imgURL: gov,
        name: "Ministry of Education Sri Lanka",
        price: "$210.20",
    },
    {
        imgURL: nsf,
        name: "National Science Foundation",
        price: "$220.20",
    },

];

export const services = [
    {
        imgURL: archaeology,
        label: "BIOMEDICAL ENGINEERING",
    },
    {
        imgURL: astronomy,
        label: "CELLULAR AND MOLECULAR BIOLOGY",
    },
    {
        imgURL: biochemistry,
        label: "CHEMISTRY",
    },
    {
        imgURL: bioinformatics,
        label: "COMPUTATIONAL BIOLOGY AND BIOINFORMATICS",
    },
    {
        imgURL: biomedical,
        label: "EARTH AND ENVIRONMENTAL SCIENCES",
    },
    {
        imgURL: integrated_system,
        label: "EMBEDDED SYSTEMS",
    },
    {
        imgURL: integrated_system,
        label: "EMBEDDED SYSTEMS",
    },
    {
        imgURL: biomimetic,
        label: "MATERIALS SCIENCE",
    },
    {
        imgURL: calculating,
        label: "MATHEMATICS",
    },
    {
        imgURL: cell,
        label: "MICROBIOLOGY",
    },
    {
        imgURL: diagnose,
        label: "PHYSICS AND ASTRONOMY",
    },
    {
        imgURL: genetic_engineering,
        label: "PLANT SCIENCES",
    },
    {
        imgURL: integrated_system,
        label: "ROBOTICS AND INTELLIGENT MACHINES",
    },
    {
        imgURL: mechanical,
        label: "SYSTEMS SOFTWARE",
    },
    {
        imgURL: microbiology,
        label: "TRANSLATIONAL MEDICAL SCIENCE",
    },
    {
        imgURL: sustainability,
        label: "ARCHAEOLOGY",
    },
    {
        imgURL: planet_earth,
        label: "ASTRONOMY",
    },
    {
        imgURL: plant,
        label: "BIOCHEMISTRY",
    },
    {
        imgURL: robot,
        label: "BIOINFORMATICS",
    },
    {
        imgURL: social_science,
        label: "BIOMEDICAL ENGINEERING",
    },
];


export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
