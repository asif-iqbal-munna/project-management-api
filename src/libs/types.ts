export type ApiResponse<T> = {
  code: number;
  status: boolean;
  message: string;
  totalPages?: number;
  data?: T;
  stack?: string;
};
