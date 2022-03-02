/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { useRouter } from 'next/router'
import {
  Button,
  Divider,
  Input,
  MenuItem,
  Select,
  Tab,
  Tabs,
  TextareaAutosize,
  Typography,
} from '@mui/material'
import Navbar from '../../src/components/Navbar'
import SBreadcrumb from '../../src/components/SBreadcrumb'
import ReactThemeProvider from '../../src/components/ThemeProvider'
import Footer from '../../src/components/Footer'
import { useEffect, useState } from 'react'
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
import Trending from '../../src/components/Trending'
import SlideFourProduct from '../../src/components/SlideFourProduct'
import useSWR from 'swr'
import fetcher from '../../src/components/fetcher'
import { Providers } from '..'

function Info(props) {
  const { title, data = {} } = props

  return (
    <div>
      <Typography variant="h6" className="my-1">
        {title}
      </Typography>
      <div class="">
        {Object.keys(data).map((key) => (
          <div key={key} className="flex">
            <Typography variant="body1" className="my-1 w-60">
              {key}
            </Typography>
            <Typography variant="body2" className="my-1">
              : {'  '} {data[key]}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  )
}

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function SideProductPhoto({ photo, selectedPhoto, setSelectedPhoto }) {
  return (
    <div
      className="p-3 h-24 cursor-pointer"
      onClick={() => setSelectedPhoto(photo)}
    >
      <img
        src={photo.src}
        alt={photo.name}
        className={`w-full ${selectedPhoto?.id != photo?.id && 'opacity-50'} `}
      />
    </div>
  )
}

export default function Category() {
  const router = useRouter()
  const { productSlug } = router.query
  const { data: productDetail, error } = useSWR(
    `/api/product/${productSlug}`,
    fetcher,
  )
  const breadcrumb = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Salwar Kameez',
      href: '/salwar-kameez',
    },

    {
      name: productSlug,
      href: `/sarees/${productSlug}`,
    },
  ]
  let similarProduct = {
    title: 'Similar Products',
    data: productDetail?.similar || [],
  }

  const [selectedPhoto, setSelectedPhoto] = useState(
    productDetail && productDetail?.photos[0],
  )
  useEffect(() => {
    if (productDetail?.photos) setSelectedPhoto(productDetail?.photos[0])
  }, [productDetail])
  const [tabValue, handleTabChange] = useState(0)
  return (
    <Providers>
    <Navbar />
      <div className="lg:px-60 mt-10">
        <SBreadcrumb data={breadcrumb} />
        <div className="flex flex-row  bg-gray-100 mt-4">
          <div className="" style={{ flex: 0.8 }}>
            {(productDetail?.photos || []).map((photo) => (
              <SideProductPhoto
                key={photo.name}
                photo={photo}
                selectedPhoto={selectedPhoto}
                setSelectedPhoto={setSelectedPhoto}
              />
            ))}
          </div>
          <div style={{ flex: 6 }}>
            <img
              src={selectedPhoto?.src}
              className="p-2 h-50rem m-auto"
              alt={selectedPhoto?.name}
            />
          </div>
          <div className="" style={{ flex: 7 }}>
            <div className="mt-4">
              <Typography
                variant="h6"
                className=""
                style={{ fontWeight: '400' }}
              >
                {productDetail?.name}
              </Typography>
            </div>
            <div className="flex flex-row items-center">
              <div className="my-1 flex-1">
                <Typography
                  fontSize="900"
                  variant="h5"
                  style={{ fontWeight: 'bold' }}
                >{`${productDetail?.currency} ${productDetail?.price}`}</Typography>
              </div>
              {productDetail?.inStock && (
                <div>
                  <Typography
                    fontSize="900"
                    variant="body2"
                    className="pr-20"
                    style={{ fontWeight: 'bold' }}
                  >
                    Ready To Ship
                  </Typography>
                </div>
              )}
            </div>
            <div className="flex mt-4">
              <Typography variant="body2" className="mr-2 ">
                <FavoriteBorderIcon className="mr-2" color="primary" />
                Add To WishList
              </Typography>
              <Typography variant="body2" className="mr-2 ">
                <ShareIcon className="mx-2" />
                Share
              </Typography>
            </div>
            <div className=" mt-4">
              <Typography variant="caption" className="mr-2 ">
                comments
              </Typography>
              <div>
                <TextareaAutosize
                  minRows={2}
                  className="bg-transparent border border-primary"
                />
              </div>
            </div>
            <div className=" mt-4">
              <Typography variant="caption" className="mr-2 ">
                Check Delivery
              </Typography>
              <div>
                <TextField
                  margin="normal"
                  required
                  id="pincode"
                  label="pincode"
                  name="pincode"
                  size="small"
                />
                <Button
                  variant="contained"
                  color="primary"
                  className="mt-4"
                  className="bg-primary text-white mt-4 px-8"
                >
                  check
                </Button>
              </div>
            </div>
            <div className=" mt-4">
              <Typography variant="caption" className="mr-2  flex">
                Size <p className="pl-2 text-primary">(* Required field)</p>
              </Typography>
              <Select className="w-72" size="small">
                {(productDetail?.size || []).map((size) => (
                  <MenuItem value={size} key={size}>
                    {size}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className=" mt-4">
              <div className="flex items-center">
                <Typography variant="body1" className="mr-2  flex">
                  QTY
                </Typography>
                <Select className="w-20" size="small" value={1}>
                  {Array.from(Array(10).keys()).map((size) => (
                    <MenuItem key={size + 1} value={size + 1}>
                      {size + 1}
                    </MenuItem>
                  ))}
                </Select>
                <Button
                  variant="contained"
                  color="primary"
                  className="bg-primary text-white mx-4 px-8"
                >
                  Add To Cart
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className="bg-primary text-white mx-4 px-8"
                >
                  Buy Now
                </Button>
              </div>
            </div>
            <div className=" mt-8 flex space-x-40">
              <div>
                <Typography variant="body1" className="  flex opacity-80 my-2">
                  <CheckCircleIcon className="mr-3" fontSize="large" />
                  Assured Quality
                </Typography>
                <Typography variant="body1" className="  flex opacity-80 my-2">
                  <FlightTakeoffIcon className="mr-3" fontSize="large" />
                  90% Ready to Ship
                </Typography>
                <Typography variant="body1" className="  flex opacity-80 my-2">
                  <LocalOfferIcon className="mr-3" fontSize="large" />
                  Best Price
                </Typography>
              </div>
              <div>
                <Typography variant="body1" className="  flex opacity-80 my-2">
                  <GppGoodIcon className="mr-3" fontSize="large" />
                  100% Purchase Protection
                </Typography>
                <Typography variant="body1" className="  flex opacity-80 my-2">
                  <DeliveryDiningIcon className="mr-3" fontSize="large" />
                  Free Shipping Worldwide
                </Typography>
                <Typography variant="body1" className="  flex opacity-80 my-2">
                  <EditOffIcon className="mr-3" fontSize="large" />
                  Custom Fit
                </Typography>
              </div>
            </div>
          </div>
        </div>
        {/* product info */}
        <div className="border border-primary mt-4">
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={tabValue}
              onChange={(e, value) => handleTabChange(value)} //handleTabChange
              aria-label="product info"
            >
              <Tab label="Product Info" />
              <Tab label="Description" />
            </Tabs>
          </Box>
          <TabPanel value={tabValue} index={0}>
            {Object.keys(productDetail?.productInfo || {}).map((info) => (
              <Info
                key={info}
                title={info}
                data={productDetail?.productInfo[info]}
              />
            ))}
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            {productDetail?.description}
          </TabPanel>
        </div>
        {/* review */}
        <div className="mt-8">
          <Typography variant="h6">REVIEWS</Typography>
          <Divider />
          <div className="flex mt-4 justify-end">
            <Button variant="outlined">Write a Review</Button>
          </div>
          <div className=" mt-4 opacity-75 h-24 justify-center items-center flex">
            No Review
          </div>
          <Divider />
        </div>
        <div className="mt-4">
          {/* similar product */}
          <SlideFourProduct data={similarProduct} sidePadding={false} />
        </div>
      </div>
    </Providers>
  )
}
