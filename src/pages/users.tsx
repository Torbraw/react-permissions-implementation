import PageTitle from '../components/page-title';
import UserCards from '../layouts/user-cards';

export default function Users() {
  return (
    <>
      <PageTitle
        title="Users Page"
        description="This page is only accessible to authenticated users with the users permission."
      />
      <UserCards showLogin={false} />
    </>
  );
}
