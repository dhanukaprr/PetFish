import { FishProduct } from './types';

export const fishProducts: FishProduct[] = [
  {
    id: 1,
    name: "Neon Tetra",
    scientificName: "Paracheirodon innesi",
    price: 3.99,
    difficulty: "Beginner",
    size: "1.5 inches",
    image: "https://picsum.photos/id/111/600/400", // Using placeholder as requested, though real fish images would be better
    description: "A peaceful community fish known for its striking blue and red stripes.",
    tags: ["Schooling", "Peaceful", "Community"]
  },
  {
    id: 2,
    name: "Siamese Fighting Fish",
    scientificName: "Betta splendens",
    price: 19.99,
    difficulty: "Beginner",
    size: "2.5 inches",
    image: "https://picsum.photos/id/222/600/400",
    description: "Known for their brilliant colors and flowing fins. Must be kept alone or in specific community setups.",
    tags: ["Showpiece", "Colorful", "Hardy"]
  },
  {
    id: 3,
    name: "Discus",
    scientificName: "Symphysodon",
    price: 89.99,
    difficulty: "Expert",
    size: "6 inches",
    image: "https://picsum.photos/id/333/600/400",
    description: "The king of the aquarium. Requires pristine water conditions and specialized care.",
    tags: ["Colorful", "Large", "Sensitive"]
  },
  {
    id: 4,
    name: "Fancy Guppy",
    scientificName: "Poecilia reticulata",
    price: 5.99,
    difficulty: "Beginner",
    size: "2 inches",
    image: "https://picsum.photos/id/444/600/400",
    description: "Active and colorful livebearers that reproduce easily. Great for beginners.",
    tags: ["Breeding", "Active", "Nano"]
  },
  {
    id: 5,
    name: "Angelfish",
    scientificName: "Pterophyllum scalare",
    price: 24.50,
    difficulty: "Intermediate",
    size: "6 inches",
    image: "https://picsum.photos/id/555/600/400",
    description: "Elegant cichlids with distinct triangular shapes. They need vertical swimming space.",
    tags: ["Semi-Aggressive", "Tall Tank", "Cichlid"]
  },
  {
    id: 6,
    name: "Corydoras Catfish",
    scientificName: "Corydoras paleatus",
    price: 8.50,
    difficulty: "Beginner",
    size: "2.5 inches",
    image: "https://picsum.photos/id/666/600/400",
    description: "Peaceful bottom dwellers that help keep the substrate clean. Best kept in groups.",
    tags: ["Bottom Dweller", "Cleanup Crew", "Schooling"]
  }
];