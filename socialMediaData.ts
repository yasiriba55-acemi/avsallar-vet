export interface SocialMedia {
  readonly id: string;
  readonly alt: string;
  readonly icon: string;
}

export const socialMediaData: readonly SocialMedia[] = [
  {
    id: 'instagram',
    alt: 'Instagram',
    icon: "https://c.animaapp.com/meg2psxgZt3H1N/assets/733558.png"
  },
  {
    id: 'facebook',
    alt: 'Facebook',
    icon: "https://c.animaapp.com/meg2psxgZt3H1N/assets/733547.png"
  },
  {
    id: 'youtube',
    alt: 'YouTube',
    icon: "https://c.animaapp.com/meg2psxgZt3H1N/assets/733646.png"
  }
] as const;
