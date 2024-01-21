export interface User {
  _id:      string;
  email:    string;
  password: string;
  name:     string;
  isActive: boolean;
  roles:    string[];
}
