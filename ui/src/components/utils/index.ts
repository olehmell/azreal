export const createDescItem = (title: string, description?: string | number | React.ReactNode) => description
  ? { 
    title,
    description
  }
  : undefined

  