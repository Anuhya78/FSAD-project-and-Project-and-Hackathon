# Healthcare Workflow Automation System

A comprehensive full-stack web application for automating patient and operational workflows in hospitals, clinics, and healthcare facilities.

## Features

- **Patient Management**: Registration, profiles, history tracking
- **Appointment Scheduling**: Book, reschedule, manage queues
- **OPD/IPD Workflow**: Complete outpatient and inpatient processes
- **Lab Management**: Order tests, track status, upload results
- **Pharmacy Management**: Prescriptions, dispensing, inventory
- **Billing & Invoicing**: Auto-generate bills, payments, receipts
- **Task Automation**: Workflow-driven task creation and management
- **Role-based Access**: Admin, Doctor, Nurse, Receptionist, Lab Tech, Pharmacist, Billing Staff
- **Real-time Notifications**: In-app and email/SMS alerts
- **Analytics & Reports**: Dashboards and comprehensive reporting

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- React Router for navigation
- Axios for API calls
- Recharts for analytics
- React Hook Form + Zod for forms
- Lucide icons

### Backend
- Node.js with Express
- TypeScript
- PostgreSQL with Prisma ORM
- JWT authentication
- bcrypt for password hashing
- Redis for caching (optional)
- Socket.io for real-time updates
- Nodemailer for emails

### DevOps
- Docker & Docker Compose
- Swagger for API documentation

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 15+
- Redis (optional)
- Docker & Docker Compose (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd healthcare-workflow-automation
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env with your database credentials
   npm run prisma:generate
   npm run db:setup
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Run the Application**

   **Using Docker (Recommended)**
   ```bash
   cd ..
   docker-compose up --build
   ```

   **Manual Setup**
   ```bash
   # Terminal 1: Backend
   cd backend
   npm run dev

   # Terminal 2: Frontend
   cd frontend
   npm run dev
   ```

5. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000
   - API Docs: http://localhost:3000/api-docs

### Default Users

- **Admin**: admin@hospital.com / admin123
- **Doctor**: doctor@hospital.com / admin123
- **Receptionist**: receptionist@hospital.com / admin123

## API Documentation

The API is documented using Swagger. Visit `/api-docs` endpoint for interactive documentation.

## Database Schema

The application uses Prisma ORM with PostgreSQL. Key entities include:
- Users & Roles
- Patients
- Appointments & Visits
- Consultations & Diagnoses
- Lab Orders & Results
- Prescriptions
- Invoices & Payments
- Workflow Tasks
- Notifications

## Development

### Running Tests
```bash
cd backend
npm test
```

### Linting
```bash
cd backend
npm run lint

cd ../frontend
npm run lint
```

### Building for Production
```bash
cd backend
npm run build

cd ../frontend
npm run build
```

## Security Considerations

- JWT-based authentication with role-based access control
- Password hashing with bcrypt
- Input validation and sanitization
- Rate limiting
- CORS configuration
- Audit logging for critical actions
- Environment variable management

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, please contact the development team or create an issue in the repository.