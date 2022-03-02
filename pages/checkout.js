/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { useRouter } from 'next/router'
import {
  Button,
  Checkbox,
  Divider,
  Input,
  MenuItem,
  Pagination,
  Select,
  Slider,
  Tab,
  Tabs,
  TextareaAutosize,
  Typography,
} from '@mui/material'
import Navbar from '../src/components/Navbar'
import SBreadcrumb from '../src/components/SBreadcrumb'
import ReactThemeProvider from '../src/components/ThemeProvider'
import Footer from '../src/components/Footer'
import React, { useEffect, useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShareIcon from '@mui/icons-material/Share'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { TextField } from '@mui/material'
import { FactCheckRounded } from '@mui/icons-material'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import GppGoodIcon from '@mui/icons-material/GppGood'
import EditOffIcon from '@mui/icons-material/EditOff'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining'
import { Box } from '@mui/system'
import Trending from '../src/components/Trending'
import SlideFourProduct from '../src/components/SlideFourProduct'
import useSWR from 'swr'
import fetcher from '../src/components/fetcher'
import { ProductShortView } from '../src/components/ProductShortView'
import CartList from '../src/components/CartList'
import { Providers } from '.'

export default function Category() {
  const router = useRouter()

  const { data: productDetail, error } = useSWR(`/api/checkout`, fetcher)

  const breadcrumb = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Checkout',
      href: `/checkout`,
    },
  ]

  return (
    <Providers>
    <Navbar />
      <div className="lg:px-60 mt-14 flex ">
        <div className="flex-1">
          <Typography variant="h4" className="font-bold my-4">
            CHECKOUT
          </Typography>
        </div>
        <div className="flex-1">
          <div className="bg-gray-100">
            <Typography variant="h5" className="m-4 my-4 pt-2 ">
              ORDER SUMMARY
            </Typography>
            <CartList />
          </div>
        </div>
      </div>
    </Providers>
  )
}
