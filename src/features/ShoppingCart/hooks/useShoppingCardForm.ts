import { FormikHelpers } from 'formik';
import { useCallback, useMemo } from 'react';

export interface ShoppingCartFormValues {
  items: {
    [key: string]: number;
  };
}

export interface UseShoppingCartFormReturn {
  initialValues: ShoppingCartFormValues;
  onSubmit: (
    values: ShoppingCartFormValues,
    helpers: FormikHelpers<ShoppingCartFormValues>
  ) => Promise<void>;
}

export const useShoppingCartForm = () => {
  const initialValues = useMemo<ShoppingCartFormValues>(() => {
    return {
      items: {
        id_1: 3,
        id_2: 1,
        id_3: 2,
      },
    };
  }, []);

  const handleSubmit = useCallback(
    async (
      values: ShoppingCartFormValues,
      { setSubmitting }: FormikHelpers<ShoppingCartFormValues>
    ) => {},
    []
  );

  return {
    initialValues,
    onSubmit: handleSubmit,
  };
};
