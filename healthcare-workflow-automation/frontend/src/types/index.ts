export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  role: string
  department?: string
}

export interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
}

export interface Patient {
  id: string
  patientId: string
  firstName: string
  lastName: string
  dateOfBirth: string
  gender: string
  phone: string
  email?: string
  address: string
  bloodGroup?: string
  allergies?: string
  emergencyContact?: string
  emergencyPhone?: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface Appointment {
  id: string
  patient: Patient
  doctor: User
  department: { id: string; name: string }
  date: string
  status: 'SCHEDULED' | 'CHECKED_IN' | 'IN_CONSULTATION' | 'COMPLETED' | 'CANCELLED' | 'NO_SHOW'
  notes?: string
  createdAt: string
  updatedAt: string
}