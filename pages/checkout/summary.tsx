import { useContext } from 'react';
import NextLink from 'next/link';
import { CartContext } from '../../context/cart/CartContext';

import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import { CartList, OrderSummary } from '../../components/cart';
import { ShopLayout } from '../../components/layouts';
import { countries } from '../../utils';

const SummaryPage = () => {
  const { shippingAddress, numberOfItems } = useContext(CartContext);

  if (!shippingAddress) {
    return <></>;
  }

  const { firstName, lastName, address, city, country, phone, zip, address2 } =
    shippingAddress;

  return (
    <ShopLayout
      title='Resumen de la orden'
      pageDescription='Resumen de la Orden'
    >
      <Typography variant='h1' component='h1'>
        Carrito
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className='summary-card'>
            <CardContent>
              <Typography variant='h2'>
                Resumen ({numberOfItems} producto
                {numberOfItems === 1 ? '' : 's'})
              </Typography>
              <Divider sx={{ my: 1 }} />

              <Box display='flex' justifyContent='end'>
                <NextLink href='/checkout/address' passHref>
                  <Link underline='always'>Editar</Link>
                </NextLink>
              </Box>

              <Typography variant='subtitle1'>Dirección de Entrega</Typography>
              <Typography>
                {firstName} {lastName}
              </Typography>
              <Typography>
                {address}
                {address2 ? `, ${address2}` : ''}
              </Typography>
              <Typography>
                {city}, {zip}
              </Typography>
              <Typography>
                {countries.find((c) => c.code === country)?.name}
              </Typography>
              <Typography>{phone}</Typography>

              <Divider sx={{ my: 1 }} />

              <Box display='flex' justifyContent='end'>
                <NextLink href='/checkout/address' passHref>
                  <Link underline='always'>Editar</Link>
                </NextLink>
              </Box>

              <OrderSummary />
              <Box sx={{ mt: 3 }}>
                <Button color='secondary' className='circular-btn' fullWidth>
                  Confirmar Orden
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default SummaryPage;
