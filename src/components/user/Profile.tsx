import { useEffect } from "preact/hooks"
import useUser from "../../hooks/useUser"
import EditProfile from "./EditProfile"
import Sidebar from "./Sidebar"
import Templates from "../template/Templates"
import { Role } from "../../types/api"
import Projects from "../project/Projects"
interface Props {
  token: string
  username?: string
}

export default function Profile({ token, username }: Props) {
  const { user, loading, error, me, getByUser } = useUser()
  useEffect(() => {
    if (username) { getByUser({ username }) } else { me({ token }) }
  }, [])
  return (<>
    <EditProfile
      biography={user?.biography ?? ""}
      githubLink={user?.githubLink ?? ""}
      instagramLink={user?.instagramLink ?? ""}
      LinkedInLink={user?.LinkedInLink ?? ""}
      stripeLink={user?.stripeLink ?? ""}
      isFreelancer={user?.role === "Freelancer"}
    />
    <div class="w-full flex flex-col lg:flex-row" slot="before-main">
      <Sidebar
        username={user?.username ?? ""}
        isMyProfile={username ? false : true}
        email={user?.email ?? ""}
        role={user?.role === "Customer" ? "Cliente" : user?.role ? user.role : ""}
        githubLink={user?.githubLink ?? ""}
        instagramLink={user?.instagramLink ?? ""}
        LinkedInLink={user?.LinkedInLink ?? ""}
      />
      <div class="w-full p-4">
        <h2 class="text-2xl">Mi Biografía</h2>
        <p class="text-gray-400 my-4">
          {user?.biography ? user?.biography : "// Nada aún"}
        </p>
        <h2 class="text-2xl mb-4">
          Mis {
            user?.role && user?.role === Role.customer
              ? "Proyectos"
              : "Plantillas"
          }
        </h2>
        <div>
          {
            user?.role === Role.customer && (
              <Projects
                username={(user.username as string) ?? ""}
                isMyProfile={username ? false : true}
              />
            )
          }
          {
            user?.role == Role.freelancer && (
              <Templates
                username={(user.username as string) ?? ""}
                isMyProfile={username ? false : true}
              />
            )
          }
        </div>
      </div>
    </div>
  </>)
}