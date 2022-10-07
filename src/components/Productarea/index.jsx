import React from 'react';
import { Box, Grid, Rating, Typography } from '@mui/material';
import styles from './styles.module.css';

const products = [
	{
		name: `placerat vestibulum`,
		price: '$68.00',
		oldPrice: '$92.00',
		image: 'https://htmldemo.net/lukani/lukani/assets/img/product/product3.jpg',
		sale: '-77%',
		rate: 1,
	},
	{
		name: `sapien libero`,
		price: '$69.00',
		oldPrice: '$92.00',
		image: 'https://htmldemo.net/lukani/lukani/assets/img/product/product1.jpg',
		sale: '-77%',
		rate: 2,
	},
	{
		name: `adipiscing curcus`,
		price: '$68.00',
		oldPrice: '$92.00',
		image: 'https://htmldemo.net/lukani/lukani/assets/img/product/product2.jpg',
		sale: '-77%',
		rate: 3,
	},
	{
		name: `fringilla augue`,
		price: '$68.00',
		oldPrice: '$92.00',
		image: 'https://htmldemo.net/lukani/lukani/assets/img/product/product4.jpg',
		sale: '-77%',
		rate: 4,
	},
	{
		name: `massa porror`,
		price: '$68.00',
		oldPrice: '$92.00',
		image: 'https://htmldemo.net/lukani/lukani/assets/img/product/product5.jpg',
		sale: '-77%',
		rate: 5,
	},
	{
		name: `Donec eu cook`,
		price: '$68.00',
		oldPrice: '$92.00',
		image: 'https://htmldemo.net/lukani/lukani/assets/img/product/product6.jpg',
		sale: '-77%',
		rate: 4,
	},
	{
		name: `placerat vestibulum`,
		price: '$68.00',
		oldPrice: '$92.00',
		image: 'https://htmldemo.net/lukani/lukani/assets/img/product/product7.jpg',
		sale: '-77%',
		rate: 4,
	},
	{
		name: `sapien libero`,
		price: '$69.00',
		oldPrice: '$92.00',
		image: 'https://htmldemo.net/lukani/lukani/assets/img/product/product8.jpg',
		sale: '-77%',
		rate: 4,
	},
	{
		name: `adipiscing curcus`,
		price: '$68.00',
		oldPrice: '$92.00',
		image: 'https://htmldemo.net/lukani/lukani/assets/img/product/product9.jpg',
		sale: '-77%',
		rate: 4,
	},
	{
		name: `fringilla augue`,
		price: '$68.00',
		oldPrice: '$92.00',
		image: 'https://htmldemo.net/lukani/lukani/assets/img/product/product10.jpg',
		sale: '-77%',
		rate: 4,
	},
	{
		name: `massa porror`,
		price: '$68.00',
		oldPrice: '$92.00',
		image: 'https://htmldemo.net/lukani/lukani/assets/img/product/product11.jpg',
		sale: '-77%',
		rate: 4,
	},
	{
		name: `Donec eu cook`,
		price: '$68.00',
		oldPrice: '$92.00',
		image: 'https://htmldemo.net/lukani/lukani/assets/img/product/product12.jpg',
		sale: '-77%',
		rate: 4,
	},
	{
		name: `placerat vestibulum`,
		price: '$68.00',
		oldPrice: '$92.00',
		image: 'https://htmldemo.net/lukani/lukani/assets/img/product/product13.jpg',
		sale: '-77%',
		rate: 4,
	},
	{
		name: `sapien libero`,
		price: '$69.00',
		oldPrice: '$92.00',
		image: 'https://htmldemo.net/lukani/lukani/assets/img/product/product1.jpg',
		sale: '-77%',
		rate: 4,
	},
	{
		name: `adipiscing curcus`,
		price: '$68.00',
		oldPrice: '$92.00',
		image: 'https://htmldemo.net/lukani/lukani/assets/img/product/product5.jpg',
		sale: '-77%',
		rate: 4,
	},
	{
		name: `fringilla augue`,
		price: '$68.00',
		oldPrice: '$92.00',
		image: 'https://htmldemo.net/lukani/lukani/assets/img/product/product6.jpg',
		sale: '-77%',
		rate: 4,
	},
	{
		name: `massa porror`,
		price: '$68.00',
		oldPrice: '$92.00',
		image: 'https://htmldemo.net/lukani/lukani/assets/img/product/product7.jpg',
		sale: '-77%',
		rate: 4,
	},
	{
		name: `Donec eu cook`,
		price: '$68.00',
		oldPrice: '$92.00',
		image: 'https://htmldemo.net/lukani/lukani/assets/img/product/product2.jpg',
		sale: '-77%',
		rate: 4,
	},
];

const Productarea = (props) => {
	
	return (
		<div>
			<Box component="section" className={styles.product_area}>
				<Box className={styles.section_title}>
					<Typography component="h2">Featured Products</Typography>
				</Box>
				<Box className={styles.product_container}>
					<Box className={`${styles.row}`}>
						{products.map(({ name, price, oldPrice, image, sale,rate, items }) => (
							<Grid key={name} className={styles.product_item}>
								<Box className={styles.product_thumb}>
									<Typography component="a" href="#" target="_blank">
										<Box component="img" alt="Logo-product" src={image} />
									</Typography>
									<Box className={styles.label_product}>
										<Typography component="span" className={styles.label_sale}>
											{sale}
										</Typography>
									</Box>
								</Box>
								<Box className={styles.product_content}>
                                <Rating name="read-only" value={rate} readOnly />
									<Typography component="h4">{name}</Typography>

									<Box className={styles.price_box}>
										<Typography component="span" className={styles.current_price}>
											{price}
										</Typography>
										<Typography component="span" className={styles.old_price}>
											{oldPrice}
										</Typography>
									</Box>
								</Box>
							</Grid>
						))}
					</Box>
				</Box>
			</Box>
		</div>
	);
};

Productarea.propTypes = {};

export default Productarea;
