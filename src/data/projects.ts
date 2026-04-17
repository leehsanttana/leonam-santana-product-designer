export interface Project {
  id: string;
  slug: string;
  title: string;
  type: string;
  href: string;
  image: string;
  disabled?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "01",
    slug: "core-system",
    title: "Core System",
    type: "Web App • WealthTech • 2024",
    href: "/projects/core-system",
    disabled: false,
    image: "/Core-system-case/core-system-project-banner.jpg"
  },
  {
    id: "02",
    slug: "adocao",
    title: "Adocão",
    type: "Mobile App • Health • 2025",
    href: "/projects/adocao",
    image: "/Adocao-case/adocao-project-banner.jpg"
  },
  {
    id: "03",
    slug: "viajaflux",
    title: "Viajaflux",
    type: "Mobile App • Viagens • 2023",
    href: "#",
    disabled: true,
    image: "https://placehold.co/600x800/221e30/ede8f7?text=Viajaflux"
  },
  {
    id: "04",
    slug: "medschool",
    title: "MedSchool",
    type: "Web App • Educação • 2024",
    href: "#",
    disabled: true,
    image: "https://placehold.co/600x800/221e30/ede8f7?text=MedSchool"
  },
];
