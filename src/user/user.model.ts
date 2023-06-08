export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  isAdmin: boolean;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
