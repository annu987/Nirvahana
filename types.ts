
export interface EventItem {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
}

export interface TimelineDay {
  day: number;
  title: string;
  description: string;
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
