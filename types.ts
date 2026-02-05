export interface Product {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface UnitCode {
  code: string;
  title: string;
  type: 'HRW' | 'Competency';
  category: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface TestCaseStudy {
  client: string;
  metric: string;
  quote: string;
  author: string;
}