/* eslint-disable @next/next/no-img-element */
import { IconButton, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

export function ProductShortView({
  name,
  src: url,
  price,
  currency,
  zoomSrc: zoomSrc,
  theme = 'simple',
}) {
  const [zoomed, setZoomed] = useState(false)
  const ShowImageZoom = () => setZoomed(true)
  const showRegularImage = () => setZoomed(false)

  const simple = (
    <>
      <Link
        href={`/product/${encodeURIComponent(name)}`}
        passHref
        className="cursor-pointer"
        as={`/product/${name}`}
      >
        <Typography
          variant="body1"
          align="center"
          className="my-1 cursor-pointer"
        >
          {name}
        </Typography>
      </Link>
      <Typography variant="h6" align="center" className="my-1">
        {`${currency} ${price}`}
      </Typography>
    </>
  )

  const cardLayout = (
    <div className="mt-1">
      <div className="flex items-center">
        <Link
          href={`/product/${encodeURIComponent(name)}`}
          passHref
          className="cursor-pointer"
          as={`/product/${name}`}
        >
          <Typography
            variant="body2"
            align="left"
            className="my-1 cursor-pointer"
          >
            {name}
          </Typography>
        </Link>
        <div className="mx-2">
          <FavoriteBorderIcon className="mr-2" color="primary" />
        </div>
      </div>
      <div className="">
        <Typography variant="body2" align="left" className="my-1">
          {`${currency} ${price}`}
        </Typography>
      </div>
      <div className="">
        <Typography
          fontSize="900"
          variant="body2"
          className="pr-20 text-primary"
          style={{}}
        >
          Ready To Ship
        </Typography>
      </div>
    </div>
  )

  const bottomSection = {
    simple,
    cardLayout,
  }
  return (
    <div className="">
      <div
        className="relative"
        onMouseEnter={ShowImageZoom}
        onMouseLeave={showRegularImage}
      >
        <img src={url} alt={name} className="cornerImage m-auto" />
        <img
          src={zoomSrc || url}
          alt={name}
          style={{ opacity: zoomed ? 1 : 0 }}
          className={`cornerImage m-auto absolute left-0 right-0 top-0 `}
        />
      </div>
      {bottomSection[theme]}
    </div>
  )
}
