export interface User {
    id: string;
    name: string;
    userName: string;
    email: string;
    phone: string;
  }

  export type FetchError = {
    message: string;
  }

  export interface PaginationProps {
    page: number;
  
  }