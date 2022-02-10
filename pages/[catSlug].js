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

function valuetext(value) {
  return `${value * 100}`
}

const filters = [
  {
    title: 'Categories',
    data: [
      {
        id: 1,
        title: 'Sarees',
        total: 875,
      },
      {
        id: 2,
        title: 'Whats New',
        total: 123,
      },
      {
        id: 3,
        title: 'Collection',
        total: 23,
      },
    ],
  },
  {
    title: 'Color',
    data: [
      {
        id: 4,
        title: 'red',
        total: 875,
      },
      {
        id: 5,
        title: 'green',
        total: 123,
      },
      {
        id: 6,
        title: 'yellow',
        total: 23,
      },
      {
        id: 7,
        title: 'black',
        total: 23,
      },
      {
        id: 6,
        title: 'blue',
        total: 23,
      },
    ],
  },
  {
    title: 'Fabric',
    data: [
      {
        id: 4,
        title: 'Crepe',
        total: 12,
      },
      {
        id: 5,
        title: 'Tussar silk',
        total: 45,
      },
      {
        id: 6,
        title: 'Tissue',
        total: 654,
      },
      {
        id: 7,
        title: 'Cotton',
        total: 232,
      },
      {
        id: 6,
        title: 'Satin',
        total: 12,
      },
    ],
  },
]

export default function Category() {
  const router = useRouter()
  const { catSlug } = router.query
  const { data: productDetail, error } = useSWR(`/api/${catSlug}`, fetcher)
  const [PriceValue, setPriceValue] = React.useState([20, 37])

  const handlePriceChange = (event, newValue) => {
    setPriceValue(newValue)
  }

  const breadcrumb = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: catSlug,
      href: `/${catSlug}`,
    },
  ]
  let sortBy = ['Trading', 'Product Name', 'Price low->High', 'Price High->Low']

  let filterProducts = [
    {
      name: 'Off-White Stone Embroidered Net Indowestern Gown-GW1154',
      price: '61,000',
      currency: '₹',
      src: '/Trending/1.jpg',
      zoomSrc: '/Trending/1_zoom.png',
    },
    {
      name: 'Ballerina Pink Stone Embroidered Net Evening Gown-GW1155',
      price: '34,000',
      currency: '₹',
      src: '/Trending/2.jpg',
      zoomSrc: '/Trending/1_zoom.png',
    },
    {
      name: 'White Zari Embroidered Georgette Designer Salwar-SI1219',
      price: '67,000',
      currency: '₹',
      src: '/Trending/3.jpg',
      zoomSrc: '/Trending/1_zoom.png',
    },
    {
      name: 'White Bead Embroidered Organza Palazzo Suit-SI1754',
      price: '12,200',
      currency: '₹',
      src: '/Trending/4.jpg',
      zoomSrc: '/Trending/1_zoom.png',
    },
    {
      name: 'Teal Green Mirror Embroidered Georgette Designer Lehenga-GC3925',
      price: '78,500',
      currency: '₹',
      src: '/Trending/5.jpg',
      zoomSrc: '/Trending/1_zoom.png',
    },
    {
      name: 'Off-White Stone Embroidered Net Indowestern Gown-GW1154',
      price: '61,000',
      currency: '₹',
      src: '/Trending/1.jpg',
      zoomSrc: '/Trending/1_zoom.png',
    },
    {
      name: 'Ballerina Pink Stone Embroidered Net Evening Gown-GW1155',
      price: '34,000',
      currency: '₹',
      src: '/Trending/2.jpg',
      zoomSrc: '/Trending/1_zoom.png',
    },
    {
      name: 'White Zari Embroidered Georgette Designer Salwar-SI1219',
      price: '67,000',
      currency: '₹',
      src: '/Trending/3.jpg',
      zoomSrc: '/Trending/1_zoom.png',
    },
    {
      name: 'White Bead Embroidered Organza Palazzo Suit-SI1754',
      price: '12,200',
      currency: '₹',
      src: '/Trending/4.jpg',
      zoomSrc: '/Trending/1_zoom.png',
    },
    {
      name: 'Teal Green Mirror Embroidered Georgette Designer Lehenga-GC3925',
      price: '78,500',
      currency: '₹',
      src: '/Trending/5.jpg',
      zoomSrc: '/Trending/1_zoom.png',
    },
    {
      name: 'Off-White Stone Embroidered Net Indowestern Gown-GW1154',
      price: '61,000',
      currency: '₹',
      src: '/Trending/1.jpg',
      zoomSrc: '/Trending/1_zoom.png',
    },
    {
      name: 'Ballerina Pink Stone Embroidered Net Evening Gown-GW1155',
      price: '34,000',
      currency: '₹',
      src: '/Trending/2.jpg',
      zoomSrc: '/Trending/1_zoom.png',
    },
    {
      name: 'White Zari Embroidered Georgette Designer Salwar-SI1219',
      price: '67,000',
      currency: '₹',
      src: '/Trending/3.jpg',
      zoomSrc: '/Trending/1_zoom.png',
    },
    {
      name: 'White Bead Embroidered Organza Palazzo Suit-SI1754',
      price: '12,200',
      currency: '₹',
      src: '/Trending/4.jpg',
      zoomSrc: '/Trending/1_zoom.png',
    },
    {
      name: 'Teal Green Mirror Embroidered Georgette Designer Lehenga-GC3925',
      price: '78,500',
      currency: '₹',
      src: '/Trending/5.jpg',
      zoomSrc: '/Trending/1_zoom.png',
    },
  ]
  let catDec = '           Banarasi sarees are one of the sensational traditional textiles which have made a remarkable impression from the city of Varanasi. The original banarasi silk saree has retained the imperial component made out of the silver yarns given the gold polish. These banarasi silk sarees are the cardinal hunk of the Indian women’s trousseau. This quintessential silk has thrived an eccentric fashion around the globe with the super-eminent rank of the ethereal elegance.“Samyakk” has the diversified collection of banarasi silk sarees that includes Banarasi kora silk sarees, Banarasi georgette sarees, Banarasi tussar silk sarees, Banarasi bamboo silk sarees, Banarasi linen silk sarees, Banarasi satin silk sarees, Banarasi cotton silk saree and Banarasi organza sarees. Original banarasi saree engross the vivacious visage in terms of glaring real gold zari woven motifs from the mughal influence like flora & fauna, paisley patterns, contrast border and pallu with intricate butta detailing. The splendid color spectrum of dual tones, contrast combinations, always endorses a dexterous gander to this 6 yard engrossing drape.Accentuate your banarasi silk saree debut for the impeccable decorum by pairing it with antique jewel pieces, trending uncut stone jewelry/traditional temple jewelry. Combine your trendy banarasi organza sarees with the blouse patterns such as the long length sleeves, corset blouse or jacket blouse with lapels, boat necklines and backless with ornamental embroidery. Drape your banarasi cotton silk saree in such a way that you showoff your blouse too along with the saree. Furbish on to the comfortable and stone studded footwear to compliment the ensemble that will makes the wearer look like a sculpture of the ethnic etiquette for the royal regime. Leaf through banarasi silk saree online collection for a numerous styles. Samyakk’s e-commerce shopping portal has made your banarasi silk saree online search easier. Now you can go through magnificent collection of banarasi silk saree online in the vast abundance of Samyakk for a gorgeous original banarasi saree, contemporary banarasi cotton silk saree and luxurious collection of banarasi organza sarees in myriad of colors and designs. “Samyakk” has made a remarkable network not only in India but has crossed the barriers spreading its essence internationally too connecting to our happy customers in UAE, USA, UK, Canada, Australia,Mauritius & Singapore. The team feels grateful to receive such massive support & affection towards the brand and we assure to delight you further in future.'
  const renderFilterProducts = () => {
    return (
      <div className="grid grid-cols-3 gap-4 p-4">
        {filterProducts.map((product) => (
          <ProductShortView {...product} theme="cardLayout" />
        ))}
      </div>
    )
  }

  const pagination = (
    <Pagination count={30} color="primary" defaultPage={0} siblingCount={1} />
  )
  return (
    <ReactThemeProvider>
      <div className={{}}>
        <Head>
          <title>Search for best sarees</title>
        </Head>

        <main className={{}}>
          <Navbar />
          <div className="lg:px-60 mt-10">
            <SBreadcrumb data={breadcrumb} />
            <Typography variant="h4" className="my-4">
              {catSlug}
            </Typography>
            <div className="flex justify-around flex-row ">
              <div className="flex-1">
                <Typography variant="h6" className="">
                  Filters
                </Typography>
              </div>
              <div className="flex-1 flex justify-center">{pagination}</div>
              <div className="flex-1 flex justify-end">
                <Typography variant="body1" className="mr-2">
                  Sort By :
                  <Select className="w-40" size="small">
                    {(sortBy || []).map((unit) => (
                      <MenuItem value={unit} key={unit}>
                        {unit}
                      </MenuItem>
                    ))}
                  </Select>
                </Typography>
              </div>
            </div>

            <div className="flex border-t border-black-dull mt-2 border-b">
              <div className="border-r border-black-dull" style={{ flex: 0.3 }}>
                <div className="border-b border-black-dull pb-3 ">
                  <Typography variant="body1" className="my-4">
                    Price
                  </Typography>
                  <div className="flex justify-center">
                    <Box sx={{ width: 300 }}>
                      <Slider
                        value={PriceValue}
                        onChange={handlePriceChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        disableSwap
                        marks={[
                          { value: 0, label: '$ 5000' },
                          { value: 100, label: '$ 143000' },
                        ]}
                      />
                    </Box>
                  </div>
                </div>
                {filters.map((filter) => (
                  <Filter
                    title={filter.title}
                    filterData={filter.data}
                    key={filter.title}
                  />
                ))}
              </div>
              <div className="flex-1" style={{ flex: 0.7 }}>
                {renderFilterProducts()}
                <div className="mt-2 flex justify-center">{pagination}</div>
              </div>
            </div>
            <div className='mt-4'>
              <Typography variant="body1" className="my-4 text-bold" align='center' style={{ fontWeight : 'bold'}}>
                {catSlug}
              </Typography>
              <Typography variant="body2" className="my-4" align='center'>
                {catDec}
                  </Typography>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </ReactThemeProvider>
  )
}

const Filter = ({ filterData, title }) => {
  return (
    <div className="border-b border-black-dull pb-3  py-2">
      <Typography variant="body1" className="my-4">
        {title}
      </Typography>
      <div className="mt-2 max-h-60 overflow-scroll">
        {filterData.map((item) => (
          <div key={item.title} className="flex items-center h-8">
            <Checkbox size="small" />
            <Typography variant="body2" className="my-4 flex-1">
              {item.title}
            </Typography>
            <span className="mr-3 p-1 bg-gray-200 rounded-lg px-3 text-xs text-gray-500">
              {item.total}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
