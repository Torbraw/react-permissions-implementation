import PageTitle from '../components/page-title';
import PermissionsGate from '../components/permission-gate';
import { Button } from '../components/ui/button';
import { PERMISSION } from '../config';

export default function Dashboard() {
  return (
    <>
      <PageTitle
        title="Dashboard Page"
        description="This page is only accessible to authenticated users with the dashboard permission."
      />
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-semibold">
          Those button will be disabled if you don't have CRUD access for this page
        </h1>
        <div className="flex gap-3">
          <PermissionsGate permissions={[PERMISSION.DASHBOARD_CRUD]} actionType="DISABLE">
            <Button onClick={() => alert('Report generated (fake)')}>Generate report</Button>
            <Button onClick={() => alert('Chart generated (fake)')}>Generate chart</Button>
          </PermissionsGate>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-semibold">
          The following <span className="text-green-500">green text</span> will not be visible if you don't have CRUD
          access for this page
        </h1>
        <p>
          Number of dollars:
          <PermissionsGate permissions={[PERMISSION.DASHBOARD_CRUD]} actionType="HIDE">
            <span className="text-green-500">&nbsp;$100</span>
          </PermissionsGate>
        </p>
      </div>
    </>
  );
}
