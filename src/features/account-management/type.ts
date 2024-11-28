export type AccountStatus = {
  name: string;
  email: string;
  status?: string;
};

export type Account = {
  company_name: string;
  org_number: string;
  business_description: string;
  annual_revenue: number;
  contact_name: string;
  contact_email: string;
  image_url: string;
  company_address: string;
  company_type: string;
  owner_name: string;
  status_id: string;
};
