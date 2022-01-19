const URL = {
  baseApiUrl: () => 'https://same-base-url',
  facilities: {
    create: '/',
    queryFacilities: (query: string) => `/facilities/${query && ''}`,
    getById: (id: string) => `/facilities/${id}`,
    update: (id: string) => `/facilities/${id}`,
    delete: (id: string) => `/facilities/${id}`,
  },
};

export default URL;
