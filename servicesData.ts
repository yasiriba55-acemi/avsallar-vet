export interface Service {
  readonly id: string;
  readonly title: string;
  readonly image: string;
}

export const servicesData: readonly Service[] = [
  {
    id: 'examination',
    title: 'Muayene',
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328d2f82"
  },
  {
    id: 'vaccination',
    title: 'Aşı',
    image: "https://images.unsplash.com/photo-1624571243601-5e7b3b44e0c6"
  },
  {
    id: 'surgery',
    title: 'Cerrahi',
    image: "https://images.unsplash.com/photo-1625340915788-31c52f845ed9"
  },
  {
    id: 'dental',
    title: 'Diş Bakımı',
    image: "https://c.animaapp.com/meg2psxgZt3H1N/assets/photo-1607746882042-944635dfe10e.jpg"
  },
  {
    id: 'laboratory',
    title: 'Laboratuvar',
    image: "https://images.unsplash.com/photo-1625841091050-665fbf7b6e20"
  }
] as const;
