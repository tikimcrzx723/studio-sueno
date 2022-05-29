import { FC, PropsWithChildren } from 'react';
import NextLink from 'next/link';

import {
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import { initialData } from '../../database/products';
import { ItemCounter } from '../ui';

const productInCart = [
  initialData.products[2],
  initialData.products[1],
  initialData.products[5],
];

interface Props {
  editable?: boolean;
}

export const CartList: FC<PropsWithChildren<Props>> = ({
  editable = false,
}) => {
  return (
    <>
      {productInCart.map((product) => (
        <Grid container spacing={2} key={product.slug} sx={{ mb: 1 }}>
          <Grid item xs={3}>
            {/* Llevar a la pagina del producto */}
            <NextLink href="/product/slug" passHref>
              <Link>
                <CardActionArea>
                  <CardMedia
                    image={`/products/${product.images[0]}`}
                    component="img"
                    sx={{ borderRadius: '5px' }}
                  />
                </CardActionArea>
              </Link>
            </NextLink>
          </Grid>
          <Grid item xs={7}>
            <Box display="7" flexDirection="column">
              <Typography variant="body2">{product.title}</Typography>
              <Typography variant="body1">
                Talla: <strong>M</strong>
              </Typography>
              {/* Conditional */}
              {editable ? <ItemCounter /> : <Typography>3</Typography>}
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Typography variant="subtitle1">${product.price}</Typography>
            {editable && (
              <Button variant="text" color="secondary">
                Remover
              </Button>
            )}
          </Grid>
        </Grid>
      ))}
    </>
  );
};
