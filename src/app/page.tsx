import React from 'react'
import { Grid } from '@radix-ui/themes';
import HomeSideBar from './components/HomeSideBar';

export default function Home() {
  return (
        <Grid columns='7' gap='3' className='pt-12 pl-8'>
          <HomeSideBar/>
        </Grid>
      )
    }