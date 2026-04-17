export interface Project {
  id: string;
  title: string;
  type: string;
  href: string;
  image: string;
  disabled?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "01",
    title: "Core System",
    type: "Design System • Sistemas • 2024",
    href: "/projects/core-system",
    disabled: false,
    image: "/Core-system-case/core-system-project-banner.jpg"
  },
  {
    id: "02",
    title: "Adocão",
    type: "Mobile App • Health • 2025",
    href: "/projects/adocao",
    image: "/Adocao-case/adocao-project-banner.jpg"
  },
  {
    id: "03",
    title: "Viajaflux",
    type: "Mobile App • Viagens • 2023",
    href: "#",
    disabled: true,
    image: "https://placehold.co/600x800/221e30/ede8f7?text=Viajaflux"
  },
  {
    id: "04",
    title: "MedSchool",
    type: "Web App • Educação • 2024",
    href: "#",
    disabled: true,
    image: "https://placehold.co/600x800/221e30/ede8f7?text=MedSchool"
  },
];
