import { Typography } from '@mui/material';
import { NextPage } from 'next';
import { ShopLayout } from '../../components/layouts';
import { FullScreenLoading } from '../../components/ui';
import { useProducts } from '../../hooks';
import { ProductList } from '../../components/products';

const KidPage: NextPage = () => {
  const { products, isLoading } = useProducts('products?gender=kid');
  return (
    <ShopLayout
      title='Studio-Sueno - Niños'
      pageDescription='Encuentra los mejores productos de Studio-Sueno para los pequeños'
    >
      <Typography variant='h1' component='h1'>
        Tienda
      </Typography>
      <Typography variant='h2' sx={{ mb: 1 }} fontSize={20}>
        Producto para niños
      </Typography>
      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default KidPage;
