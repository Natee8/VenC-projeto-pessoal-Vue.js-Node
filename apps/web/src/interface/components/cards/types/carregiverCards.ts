export interface Service {
  id: number;
  name: string;
}

export interface Props {
  name: string;
  rating: number;
  reviewsCount: number;
  location: string;
  lastActive: string;
  description: string;
  services: Service[];
  price: number;
  avatarUrl?: string;
}
