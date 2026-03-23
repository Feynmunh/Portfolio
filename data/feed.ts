export type FeedItemType = 'image' | 'link' | 'text';

export interface FeedItem {
  id: string;
  type: FeedItemType;
  title?: string;
  text?: string;
  imageUrl?: string;
  linkUrl?: string;
  linkText?: string;
  bentoClass: string;
}

export const feedItems: FeedItem[] = [
  {
    id: "1",
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=800&auto=format&fit=crop",
    bentoClass: "md:col-span-2 md:row-span-2",
  },
  {
    id: "2",
    type: "text",
    title: "Current Focus",
    text: "Deep diving into AI agents and structured concurrency. Building scalable systems that can handle real-time intelligent interactions.",
    bentoClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "3",
    type: "link",
    title: "Awesome Resource",
    text: "Check out this incredibly detailed breakdown of modern web architectures and how edge computing plays a role.",
    linkUrl: "https://example.com",
    linkText: "Read Article ↗",
    bentoClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "4",
    type: "image",
    imageUrl: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop",
    bentoClass: "md:col-span-1 md:row-span-2",
  },
  {
    id: "5",
    type: "text",
    title: "Quick thought",
    text: "Sometimes the best code you can write is no code at all. Deleting complex legacy paths is so satisfying.",
    bentoClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "6",
    type: "link",
    title: "My GitHub",
    text: "View all my open-source projects, experiments, and contributions here.",
    linkUrl: "https://github.com",
    linkText: "Visit GitHub ↗",
    bentoClass: "md:col-span-2 md:row-span-1",
  },
];
