import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create roles
  const adminRole = await prisma.role.upsert({
    where: { name: 'Admin' },
    update: {},
    create: {
      name: 'Admin',
      permissions: ['manage_users', 'manage_departments', 'view_reports', 'configure_workflows']
    }
  })

  const receptionistRole = await prisma.role.upsert({
    where: { name: 'Receptionist' },
    update: {},
    create: {
      name: 'Receptionist',
      permissions: ['manage_patients', 'manage_appointments', 'manage_billing']
    }
  })

  const doctorRole = await prisma.role.upsert({
    where: { name: 'Doctor' },
    update: {},
    create: {
      name: 'Doctor',
      permissions: ['view_patients', 'manage_consultations', 'order_lab_tests', 'prescribe_medicines', 'manage_admissions']
    }
  })

  const nurseRole = await prisma.role.upsert({
    where: { name: 'Nurse' },
    update: {},
    create: {
      name: 'Nurse',
      permissions: ['manage_ward_tasks', 'update_vitals', 'monitor_patients']
    }
  })

  const labTechRole = await prisma.role.upsert({
    where: { name: 'Lab Technician' },
    update: {},
    create: {
      name: 'Lab Technician',
      permissions: ['manage_lab_orders', 'upload_results']
    }
  })

  const pharmacistRole = await prisma.role.upsert({
    where: { name: 'Pharmacist' },
    update: {},
    create: {
      name: 'Pharmacist',
      permissions: ['manage_prescriptions', 'manage_inventory']
    }
  })

  const billingStaffRole = await prisma.role.upsert({
    where: { name: 'Billing Staff' },
    update: {},
    create: {
      name: 'Billing Staff',
      permissions: ['manage_invoices', 'process_payments']
    }
  })

  // Create departments
  const cardiology = await prisma.department.upsert({
    where: { name: 'Cardiology' },
    update: {},
    create: { name: 'Cardiology' }
  })

  const neurology = await prisma.department.upsert({
    where: { name: 'Neurology' },
    update: {},
    create: { name: 'Neurology' }
  })

  const generalMedicine = await prisma.department.upsert({
    where: { name: 'General Medicine' },
    update: {},
    create: { name: 'General Medicine' }
  })

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10)
  await prisma.user.upsert({
    where: { email: 'admin@hospital.com' },
    update: {},
    create: {
      email: 'admin@hospital.com',
      password: hashedPassword,
      firstName: 'Admin',
      lastName: 'User',
      roleId: adminRole.id
    }
  })

  // Create sample doctor
  await prisma.user.upsert({
    where: { email: 'doctor@hospital.com' },
    update: {},
    create: {
      email: 'doctor@hospital.com',
      password: hashedPassword,
      firstName: 'John',
      lastName: 'Doe',
      roleId: doctorRole.id,
      departmentId: generalMedicine.id
    }
  })

  // Create sample receptionist
  await prisma.user.upsert({
    where: { email: 'receptionist@hospital.com' },
    update: {},
    create: {
      email: 'receptionist@hospital.com',
      password: hashedPassword,
      firstName: 'Jane',
      lastName: 'Smith',
      roleId: receptionistRole.id
    }
  })

  console.log('Seed data created successfully')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })