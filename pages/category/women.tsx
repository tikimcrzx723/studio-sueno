import { Typography } from '@mui/material';
import { NextPage } from 'next';
import { ShopLayout } from '../../components/layouts';
import { FullScreenLoading } from '../../components/ui';
import { useProducts } from '../../hooks';
import { ProductList } from '../../components/products';

const WomenPage: NextPage = () => {
  const { products, isLoading } = useProducts('products?gender=women');
  return (
    <ShopLayout
      title='Studio-Sueno - Mujeres'
      pageDescription='Encuentra los mejores productos de Studio-Sueno para ellas'
    >
      <Typography variant='h1' component='h1'>
        Tienda
      </Typography>
      <Typography variant='h2' sx={{ mb: 1 }} fontSize={20}>
        Producto para mujeres
      </Typography>
      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default WomenPage;
