export type Review = {
  comment: string;
  date: string;
  id: string;
  rating: number;
  user: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
}
