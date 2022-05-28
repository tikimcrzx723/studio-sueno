import { FC, PropsWithChildren } from 'react';
import { Grid } from '@mui/material';
import { IProduct } from '../../interfaces';
import { ProductCart } from './ProductCart';

interface Props {
  products: IProduct[];
}

export const ProductList: FC<PropsWithChildren<Props>> = ({ products }) => {
  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <ProductCart key={product.slug} product={product} />
      ))}
    </Grid>
  );
};
