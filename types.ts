export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
}

export interface Feature {
  title: string;
  description: string;
  icon: any;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  image: string;
}