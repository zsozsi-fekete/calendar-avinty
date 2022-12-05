export interface Event {
  id: number;
  start: string;
  end: string;
  title: string;
  color: string;
  registered?: boolean;
  location?: string;
}

export interface SeedData {
  events: Event[];
}
