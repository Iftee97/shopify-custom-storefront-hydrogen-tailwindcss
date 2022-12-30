import { Suspense } from 'react'
import { useShopQuery, CacheLong, gql, Link } from '@shopify/hydrogen'
import Layout from '../../components/Layout.server'

export default function Collections() {
  const data = useShopQuery({
    query: COLLECTIONS_QUERY,
    cache: CacheLong(),
    preload: true,
  })

  // console.log(data.data.collections.nodes)

  return (
    <>
      <Layout>
        <Suspense>
          <div className='container pt-3'>
            <h1 className='text-5xl font-semibold mb-4'>Collections</h1>
            <ul>
              {data.data.collections.nodes.map((collection) => (
                <li key={collection.handle}>
                  <Link to={`/collections/${collection.handle}`}>
                    <span className='inline-block py-2 underline'>{collection.handle}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Suspense>
      </Layout>
    </>
  )
}

const COLLECTIONS_QUERY = gql`
  query collections {
    collections(first: 10) {
      nodes {
        handle
        image {
          altText
          height
          id
          src
          url
          width
        }
      }
    }
  }
`
