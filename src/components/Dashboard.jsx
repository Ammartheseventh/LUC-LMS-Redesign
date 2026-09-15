import AcademicStatusCard from "./AcademicStatusCard"
import AnnouncementsCard from "./AnnouncementsCard"
import StudentEssentialsCard from "./StudentEssentialsCard"
import ForumCard from "./ForumCard"
import DisciplinaryActionCard from "./DisciplinaryActionCard"
import GeneralLibraryCard from "./GeneralLibraryCard"

function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <div className="flex flex-col gap-6">
        <AcademicStatusCard />
        <StudentEssentialsCard />
      </div>
      <div className="flex flex-col gap-6">
        <AnnouncementsCard />
        <DisciplinaryActionCard />
      </div>
      <div className="flex flex-col gap-6">
        <ForumCard />
        <GeneralLibraryCard />
      </div>
    </div>
  )
}

export default Dashboard