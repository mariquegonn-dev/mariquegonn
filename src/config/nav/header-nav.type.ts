export type HeaderNavType = {
  title: string;
  icon: React.ReactNode;
  href: string;
}[];

export type HeaderProps = {
  config: HeaderNavType;
  social: SocialType;
};
