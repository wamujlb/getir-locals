import items from './items.json';
import {
  GetProductsRequestBody,
  ProductData,
  ProductsResults,
} from './productsApi.interface';

const TOTAL_COUNT = items.length;

export const DEFAULT_PAGE_SIZE = 16;

export const fetchProducts = async ({
  page,
  pageSize = DEFAULT_PAGE_SIZE,
}: GetProductsRequestBody): Promise<ProductsResults> => {
  const data = await new Promise<ProductData[]>(
    (res: (value: ProductData[] | PromiseLike<ProductData[]>) => void) => {
      const end = page * pageSize;
      const start = end - pageSize;

      setTimeout(() => {
        res(items.slice(start, end));
      }, 2000);
    }
  );

  return {
    page,
    pageSize,
    count: TOTAL_COUNT,
    nextPage: page + 1,
    ...(page > 1 ? { prevPage: page - 1 } : {}),
    items: data.map((pd: ProductData) => ({
      id: pd.slug,
      title: pd.name,
      price: pd.price,
      imageUri: 'https://picsum.photos/300',
    })),
  };
};
