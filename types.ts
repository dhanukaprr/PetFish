export interface FishProduct {
  id: number;
  name: string;
  scientificName: string;
  price: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Expert';
  size: string;
  image: string;
  description: string;
  tags: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavItem {
  label: string;
  path: string;
}