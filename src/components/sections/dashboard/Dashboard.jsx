import AcademicStatusCard from "./AcademicStatusCard"
import AnnouncementsCard from "./AnnouncementsCard"
import StudentEssentialsCard from "./StudentEssentialsCard"
import ForumCard from "./ForumCard"
import DisciplinaryActionCard from "./DisciplinaryActionCard"
import GeneralLibraryCard from "./GeneralLibraryCard"

function Dashboard() {
  return (
    <>
  {/* Mobile — 1 column, all six stacked */}
  <div className="grid grid-cols-1 gap-6 md:hidden">
    <AcademicStatusCard />
    <StudentEssentialsCard />
    <DisciplinaryActionCard />
    <AnnouncementsCard />
    <ForumCard />
    <GeneralLibraryCard />
  </div>

  {/* Tablet — 2 columns, 3 cards each */}
  <div className="hidden md:grid xl:hidden md:grid-cols-2 gap-6 items-start">
    <div className="flex flex-col gap-6">
      <AcademicStatusCard />
      <StudentEssentialsCard />
      <GeneralLibraryCard />
    </div>
    <div className="flex flex-col gap-6">
      <DisciplinaryActionCard />
      <AnnouncementsCard />
      <ForumCard />
    </div>
  </div>

  {/* Desktop — 3 columns, 2 cards each, columns equal height */}
  <div className="hidden xl:grid xl:grid-cols-3 gap-6">
    <div className="flex flex-col gap-6">
      <AcademicStatusCard />
      <StudentEssentialsCard />
    </div>
    <div className="flex flex-col gap-6">
      <DisciplinaryActionCard />
      <AnnouncementsCard />
    </div>
    <div className="flex flex-col gap-6">
      <ForumCard />
      <GeneralLibraryCard />
    </div>
  </div>
</>
  )
}


export default Dashboard