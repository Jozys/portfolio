export type Milestone = {
  title: string;
  description: string;
  period: {
    start: number;
    end: number;
  };
  badge: string;
  icon: React.ReactNode;
  location: string;
};
