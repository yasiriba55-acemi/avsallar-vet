export interface NavigationItem {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly submenu?: readonly SubMenuItem[];
}

export interface SubMenuItem {
  readonly id: string;
  readonly label: string;
}

export interface LanguageButton {
  readonly code: string;
}

export const navigationData: readonly NavigationItem[] = [
  {
    id: 'home',
    label: 'Ana Sayfa',
    href: '/'
  },
  {
    id: 'services',
    label: 'Hizmetler',
    href: '/services',
    submenu: [
      { id: 'examination', label: 'Muayene' },
      { id: 'vaccination', label: 'Aşı' },
      { id: 'surgery', label: 'Cerrahi' },
      { id: 'dental', label: 'Diş Bakımı' },
      { id: 'laboratory', label: 'Laboratuvar' }
    ]
  },
  {
    id: 'team',
    label: 'Ekibimiz',
    href: '/team'
  },
  {
    id: 'blog',
    label: 'Blog',
    href: '/blog'
  },
  {
    id: 'contact',
    label: 'İletişim',
    href: '/contact'
  }
] as const;

export const languageButtons: readonly LanguageButton[] = [
  { code: 'TR' },
  { code: 'EN' },
  { code: 'DE' },
  { code: 'RU' }
] as const;
