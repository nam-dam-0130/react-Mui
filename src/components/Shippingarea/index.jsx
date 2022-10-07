import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import styles from './styles.module.css';
import shipper from '../../constants/shipper';

const Shippingarea = (props) => {
	return (
		<div>
			<Box component="section" className={styles.shipping_area}>
				<Box className={styles.row}>
					{shipper.map(({ title, desc, desc2, icon, items }) => (
						<Grid key={title} className={styles.single_shipping}>
							<Box
								className={styles.shipping_icone}
								component="img"
								alt="Logo-ship"
								src={icon}
							/>
							<Box className={styles.shipping_content}>
								<Typography component="h3">{title}</Typography>
								<Typography component="p">{desc}</Typography>
								<Typography component="p">{desc2}</Typography>
							</Box>
						</Grid>
					))}
				</Box>
			</Box>
		</div>
	);
};

Shippingarea.propTypes = {};

export default Shippingarea;
