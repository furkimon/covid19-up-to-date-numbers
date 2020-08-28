import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading...'
    }

    const singleGrid = () => {
        const array = [
            { name: 'Infected', end: confirmed.value, text: 'Number of Active cases of COVID-19' },
            { name: 'Recovered', end: recovered.value, text: 'Number of recoveries from COVID-19' },
            { name: 'Deaths', end: deaths.value, text: 'Deaths caused by COVID-19' }
        ];

        return (
            array.map(({ name, end, text }) => (
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>{name}</Typography>
                        <Typography variant="h5"><CountUp start={0} end={end} duration={2.5} separator="," /></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">{text}</Typography>
                    </CardContent>
                </Grid>
            )))
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                {singleGrid()}
            </Grid>
        </div>
    )
}

export default Cards;