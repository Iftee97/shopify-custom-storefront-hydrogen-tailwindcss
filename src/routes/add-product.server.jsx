import { fetchSync } from '@shopify/hydrogen'
import Layout from '../components/Layout.server'
import ProductDetails from '../components/ProductDetails.client'

export default function AddProduct() {
  const product = fetchSync('https://another-store0.myshopify.com/admin/api/2022-10/products.json', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': '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'
    },
    body: JSON.stringify({
      "product": {
        "title": "Very cool product 2",
        "body_html": "Html body for product",
        "vendor": "The biggest vendor",
        "product_type": "Mini product",
        "tags": [
          "winter",
          "cold"
        ]
      }
    })
  }).json()
  console.log('product', product)

  return (
    <Layout>
      <div className="container pt-2 flex items-center justify-center flex-col prose">
        <h1>Add Product page</h1>
      </div>
      <div className="product-page container">
        <ProductDetails product={product.product} />
      </div>
    </Layout>
  )
}
