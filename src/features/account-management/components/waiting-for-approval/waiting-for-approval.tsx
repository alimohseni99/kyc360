import { customerService } from "../../instance";
import Header from "../dashboard/header";
import { ApprovalCard } from "./approval-card";

export async function WaitingForApproval() {
  const customers = await customerService.getAccountByStatus();
  if (!customers) {
    return <div>No customers found</div>;
  }

  return (
    <>
      <Header place="Waiting For Approval" />
      {customers.map((customer) => (
        <ApprovalCard
          key={customer.account.id}
          accountId={customer.account.status_id}
          company_name={customer.account.company_name}
          org_number={customer.account.org_number}
          business_description={customer.account.business_description}
          annual_revenue={customer.account.annual_revenue}
          company_address={customer.account.company_address}
          company_type={customer.account.company_type}
          contact_name={customer.account.contact_name}
          contact_email={customer.account.contact_email}
          owner_name={customer.account.owner_name}
          img_url={customer.account.image_url}
        />
      ))}
    </>
  );
}
