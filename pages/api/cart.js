// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  let cart = {
    products: [
      {
        name: 'Powder Blue Zari woven Kanchipuram Tissue Saree-SG2700',
        src: 'https://samyakkimg.gumlet.io/catalog/product/cache/827f49c550643a04504cf3778c542fe7/s/g/sg2700_1.jpg?w=128&dpr=2.0',
        price: '68, 0000',
        currency: '₹',
        qty: 1,
        size : false
      },
      {
        name: 'Gold Woven Silk Kurta-KR781',
        src: 'https://samyakkimg.gumlet.io/catalog/product/k/r/kr781.jpg?w=576&dpr=2.0',
        price: '5, 9000',
        currency: '₹',
        qty: 1,
        size : 'L( 40 inches/ 101cm\'s )'
      }
    ],
    subTotal: '73, 990',
    total: '73, 900',
    currency: '₹',
  }
  res.status(200).json(cart)
}
