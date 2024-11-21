# KYC360: Simplifying Know Your Customer

KYC360 is a full-stack application designed to streamline the KYC (Know Your Customer) process for bank employees. This system ensures compliance with GDPR by enabling secure and efficient document collection directly from customers.

## Features

### For Bank Staff:
- **Customer Creation**: Add new customer profiles as either Private Person or Company.
- **Secure Document Management**: Automatically generate secure, time-limited upload links for document submission.
- **Dashboard**: Track customer KYC statuses (Pending, Verified, Rejected) and view uploaded documents.
- **Role-Based Access**: Limit data visibility to authorized personnel.

### For Customers:
- **Secure Upload**: Upload required documents (ID or business documents) via a unique link.
- **Guided Steps**: Simple and intuitive interface for document submission.

## Tech Stack

### Frontend:
- **Next.js**: React framework for a fast, user-friendly interface.
- **Zod**: Schema validation for safe and consistent form handling.
- **Chakra UI**: Modern UI components for professional design.

### Backend:
- **Next.js API Routes**: Server-side logic.
- **Drizzle ORM**: Lightweight and type-safe database interactions.

### Database:
- **PostgreSQL**: Robust data storage.

## How It Works
1. **Admin Creates a Customer**: Specify customer type (Private Person or Company).
2. **Secure Email Sent**: Generate a unique, secure upload link for the customer.
3. **Customer Uploads Documents**: Customers upload their required files via the secure link.
4. **Verification**: Admin reviews the uploaded documents and updates the KYC status.

## Setup Instructions

### Prerequisites:
- Node.js 18+
- PostgreSQL

### Steps:
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/KYC360.git
    cd KYC360
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up the database:
    - Configure your Postgres database in the `.env` file.

4. Run the app locally in production mode:
    ```bash
    npm run build  
    npm start
    ```

5. Open your browser:
    - Visit `http://localhost:3000` to start using KYC360.

## Future Features
- **Automated Document Validation**: Integrate OCR for validating ID and business documents.
- **Analytics Dashboard**: Provide insights into KYC timelines and success rates.
- **Third-Party Integrations**: Add APIs for real-time verification services.
