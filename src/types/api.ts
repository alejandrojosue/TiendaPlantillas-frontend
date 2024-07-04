
export interface Template {
  id?: number
  title: string
  images: string[]
  description: string
  categories: Category[]
  unitPrice: number
  freelancer: User&{role: Role.freelancer};
  createdAt?: string;
  status: TemplateStatus
  url: string;
  template?: string
}

export interface Project {
  id?: number
  title: string
  description: string
  categories: Category[]
  unitPrice: number
  customer: User&{role: Role.customer} 
  status: ProjectStatus
  createdAt?: string
}

export interface User {
  id?: number, username?: string
  email?: string
  biography?: string
  githubLink?: string
  instagramLink?: string
  LinkedInLink?: string
  stripeLink?: string
  role: Role
}

export interface Category {
  id?: number
  categoryName: string
}

export interface PurchaseHistory {
  stripeId: string
  updatedAt: string
  products: [{id: number, name: string, unitPrice: number}]
}

export interface Payment {
  id: number
  amount: number
  isWithDrawn: boolean
  createdAt: string
  product: {id: number, name: string}
}

export enum Role {
  customer = 'Customer',
  freelancer = 'Freelancer'
}

export enum ProjectStatus {
  Open,
  Finished
}

export enum TemplateStatus {
  'PENDING REVIEW' = 'PENDING REVIEW',
  APPROVED = 'APPROVED',
  REVIEWING = 'REVIEWING',
  'NOT APPROVED' = 'NOT APPROVED'
}

export enum TypeFileToUpload {
  ZIP = '.zip',
  IMAGE = 'images'
}