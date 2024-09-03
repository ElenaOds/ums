export interface User {
    id: string;
    name: string;
    userName: string;
    email: string;
    phone: string;
  }

  export interface FilterState {
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
    handleClickNext: () => void;
    handleClickPrevious: () => void;
    handlePageSet: (pageNumber: number) => void;
    usersPerPage: number;
    totalUsers: number;
  }

  export interface TableProps {
    users: User[];
    usersPerPage: number;
    page: number;
  }