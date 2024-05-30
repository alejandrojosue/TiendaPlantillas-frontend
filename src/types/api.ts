
export interface Template{
 id?: number
 title:string
 images:String[]
 description:string
 categories: string[]
 unitPrice:number
 freelancer: User & {role:Role.freelancer}
 createdAt: string
 status: TemplateStatus
 url:string
 template?: string
}

export interface Project{
 id?:number
 title:string
 description:string
 categories: Category[]
 unitPrice:number
 customer: User & {role:Role.customer}
 status: ProjectStatus
 createdAt?: string
}

export interface User{
 id?: number,
 username?: string
 email?: string
 biography?: string
 githubLink?:string
 instagramLink?:string
 LinkedInLink?: string
 role: Role
}

export interface Category{
 id?:number
 categoryName:string
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
 'PENDING REVIEW',
 'APPROVED',
 'REVIEWING',
 'NOT APPROVED'
}