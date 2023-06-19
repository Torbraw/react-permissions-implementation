import PageTitle from '../components/page-title';

export default function Dashboard() {
  return (
    <>
      <PageTitle
        title="Dashboard Page"
        description="This page is only accessible to authenticated users with the dashboard permission."
      />
      <div></div>
    </>
  );
}
