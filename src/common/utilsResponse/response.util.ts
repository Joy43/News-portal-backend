export type TResponse<T = unknown> = {
  success: boolean;
  message: string | string[];
  data: T;
};

export type TPaginatedResponse<T = unknown> = {
  success: boolean;
  message: string | string[];
  data: T[];
  metadata: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
};

export const successResponse = <T>(
  data: T,
  message = 'Request Success',
): TResponse<T> => ({
  success: true,
  message,
  data,
});

export const successPaginatedResponse = <T>(
  data: T[],
  metaData: {
    page: number;
    limit: number;
    total: number;
  },
  message = 'Request Success',
): TPaginatedResponse<T> => ({
  success: true,
  message,
  data,
  metadata: {
    page: metaData.page,
    limit: metaData.limit,
    total: metaData.total,
    totalPage: Math.ceil(metaData.total / metaData.limit),
  },
});

export const errorResponse = <T>(
  data: T,
  message = 'Request Failed',
): TResponse<T> => ({
  success: false,
  message,
  data,
});

export const errorPaginatedResponse = <T>(
  data: T[],
  metaData: {
    page: number;
    limit: number;
    total: number;
  },
  message = 'Request Failed',
): TPaginatedResponse<T> => ({
  success: false,
  message,
  data,
  metadata: {
    page: metaData.page,
    limit: metaData.limit,
    total: metaData.total,
    totalPage: Math.ceil(metaData.total / metaData.limit),
  },
});
// ----------- filter & serch util ----------------
export const buildSearchAndFilterQuery = (
  searchTerm: string,
  filterFields: string[],
  filters: Record<string, any>,
) => {
  const query: Record<string, any> = {};

  // Search term handling
  if (searchTerm) {
    query.$or = filterFields.map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    }));
  }

  // Additional filters handling
  Object.keys(filters).forEach((key) => {
    if (filters[key] !== undefined && filters[key] !== null) {
      query[key] = filters[key];
    }
  });

  return query;
}