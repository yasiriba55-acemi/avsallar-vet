export interface TeamMember {
  readonly id: string;
  readonly name: string;
  readonly image: string;
}

export const teamData: readonly TeamMember[] = [
  {
    id: 'ahmet',
    name: 'Dr. Ahmet Yılmaz',
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 'ayse',
    name: 'Dr. Ayşe Demir',
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 'mehmet',
    name: 'Dr. Mehmet Kaya',
    image: "https://randomuser.me/api/portraits/men/65.jpg"
  }
] as const;
