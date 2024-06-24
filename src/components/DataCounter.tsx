import TemplateRepository from "../repositories/TemplateRepository"
import ProjectRepository from "../repositories/ProjectRepository"
import UserRepository from "../repositories/UserRepository";
import { useEffect, useState } from "preact/hooks"
export default function DataCounter() {
 const templateRepository = new TemplateRepository();
 const projectRepository = new ProjectRepository();
 const [counters, setCounters] = useState<{
  freelancers: number,
  customers: number,
  templates: number,
  projects: number,
  loading: boolean,
  error: string | null
 }>({
  freelancers: 0,
  customers: 0,
  templates: 0,
  projects: 0,
  loading: true,
  error: null
 })
 const handleCounter = async () => {
  try {
   const [
    //@ts-ignore
    { countFreelancers, countCustomers },
    countTemplates,
    countProjects,
   ] = await Promise.all([
    new UserRepository().countByRole(),
    templateRepository.count(),
    projectRepository.count(),
   ]);
   if (countProjects instanceof Error || countTemplates instanceof Error) {
    return;
   }
   setCounters(prev => ({ ...prev, freelancers: countFreelancers, customers: countCustomers, templates: countTemplates, projects: countProjects }))
  } catch (error) {
   setCounters(prev => ({ ...prev, error: (error as Error).message }))
   console.error((error as Error).message);

  } finally {
   setCounters(prev => ({ ...prev, loading: false }))
  }
 }

 useEffect(() => {
  handleCounter()
 }, [])
 return (
  <div class="container grid justify-center grid-cols-2 mx-auto text-center">
  <div class="flex flex-col justify-start m-2 lg:m-6">
   <p
    class="text-4xl font-bold leading-none lg:text-6xl text-gray-700 dark:text-gray-200"
   >
    {counters.customers ?? 0}
   </p>
   <p class="text-semibold text-sm sm:text-base text-blue-500">
    Clientes Satisfechos
   </p>
  </div>
  <div class="flex flex-col justify-start m-2 lg:m-6">
   <p
    class="text-4xl font-bold leading-none lg:text-6xl text-gray-700 dark:text-gray-200"
   >
    {counters.freelancers ?? 0}
   </p>
   <p class="text-semibold text-sm sm:text-base text-blue-500">
    Freelancers Disponibles
   </p>
  </div>
  <div class="flex flex-col justify-start m-2 lg:m-6">
   <p
    class="text-4xl font-bold leading-none lg:text-6xl text-gray-700 dark:text-gray-200"
   >
    {counters.templates ?? 0}
   </p>
   <p class="text-semibold text-sm sm:text-base text-blue-500">
    Plantillas Publicadas
   </p>
  </div>
  <div class="flex flex-col justify-start m-2 lg:m-6">
   <p
    class="text-4xl font-bold leading-none lg:text-6xl text-gray-700 dark:text-gray-200"
   >
    {counters.projects ?? 0}
   </p>
   <p class="text-semibold text-sm sm:text-base text-blue-500">
    Proyectos Publicados
   </p>
  </div>
 </div>)
}