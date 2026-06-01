export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  badge?: string;
}

export interface Feature {
  title: string;
  description: string;
  iconName: string;
}

export interface ContactFormState {
  name: string;
  phone: string;
  message: string;
}
