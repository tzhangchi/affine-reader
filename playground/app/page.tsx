import { WorkspaceRenderer } from './workspace-renderer';

const defaultWorkspaceId = "mWn__KSlOgS1tdDEjdX6P";

export default async function Home() {
  return (
    <main>
      <WorkspaceRenderer workspaceId={defaultWorkspaceId}  />
    </main>
  )
}
