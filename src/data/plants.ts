export interface Plant {
  id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
}

export const plantsData: Plant[] = [
  {
    id: "p4",
    name: "Orange Anthurium (තැඹිලි ඇන්තූරියම්)",
    category: "Anthurium",
    price: 1350,
    imageUrl: "/17.jpeg",
  },
  {
    id: "p5",
    name: "Purple Orchid (දම් ඕකිඩ්)",
    category: "Orchid",
    price: 1800,
    imageUrl: "/18.jpeg",
  },
  {
    id: "p6",
    name: "Yellow Rose (කහ රෝස)",
    category: "Outdoor",
    price: 950,
    imageUrl: "/19.jpeg",
  },
  {
    id: "p7",
    name: "White Anthurium (සුදු ඇන්තූරියම්)",
    category: "Anthurium",
    price: 1400,
    imageUrl: "/20.jpeg",
  }
];