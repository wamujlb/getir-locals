import { ProductItemData } from 'features/ProductResults/ProductResults.interface';

export interface GetProductsRequestBody {
  page: number;
  pageSize?: number;
}

export interface ProductData {
  readonly tags: string[];
  readonly price: number;
  readonly name: string;
  readonly description: string;
  readonly slug: string;
  readonly added: number;
  readonly manufacturer: string;
  readonly itemType: string;
}

export interface ProductsResults {
  readonly page: number;
  readonly pageSize: number;
  readonly count: number;
  readonly nextPage?: number;
  readonly prevPage?: number;
  readonly items: ProductItemData[];
}
