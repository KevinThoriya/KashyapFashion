import { Divider, Typography } from '@mui/material'
import useSWR from 'swr'
import fetcher from './fetcher'
import CancelIcon from '@mui/icons-material/Cancel'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

export function CartProductCard({ name, price, currency, src, size, qty }) {
  return (
    <>
      <Divider />
      <div className="flex p-3">
        <div style={{ flex: 0.2 }} className="">
          <img src={src} className="w-full h-40" />
        </div>
        <div style={{ flex: 0.7 }} className="px-3">
          <Typography variant="body2">{name}</Typography>
          <Typography variant="h6">{`${currency} ${price}`}</Typography>
          <Typography variant="caption">{` Quantity : ${qty}`}</Typography>

          {size && (
            <Typography variant="caption" className="ml-32">{` Size : ${size}`}</Typography>
          )}
        </div>
        <div style={{ flex: 0.1 }}>
          <FavoriteBorderIcon className="mr-2" color="primary" />
          <CancelIcon className="mr-2" color="primary" />
        </div>
      </div>
    </>
  )
}

export function PriceTable({ subTotal, total, promocode, currency }) {
    return <div className="p-4">
        <div className="flex items-center justify-between mb-2 ">
            <Typography variant='h6' className="font-normal">
                TOTAL PRICE
            </Typography>
            <Typography variant='h6' className="font-bold">
                {`${currency} ${subTotal}`}
            </Typography>
        </div>

        <div className="flex items-center justify-between">
            <Typography variant='h5' className="font-normal">
                GRAND TOTAL
            </Typography>
            <Typography variant='h5' className="font-bold">
            {`${currency} ${total}`}
            </Typography>
        </div>
    </div>
}
export default function CartList({}) {
  const { data, error } = useSWR('/api/cart', fetcher)

  if (!data) return <div>loading ...</div>
  return (
    <div>
      {data.products.map((product) => (
        <CartProductCard {...product} />
      ))}
          <Divider />
          <PriceTable {...data} />
    </div>
  )
}
