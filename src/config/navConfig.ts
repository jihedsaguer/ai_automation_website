export interface NavItem {
  path: string;
  label: string;
}

export const navItems: NavItem[] = [
  { path: '/', label: 'Home' },
  { path: '/innovation', label: 'Building Innovation Together' },
  { path: '/about', label: 'About Us' },
  { path: '/portfolio', label: 'Project Portfolio' },
  { path: '/partners', label: 'Partners' },
  { path: '/testimonials', label: 'Testimonials' },
  { path: '/blog', label: 'Blog' }
]; 