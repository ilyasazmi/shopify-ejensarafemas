// import {defer} from '@shopify/remix-oxygen';
// import {redirect} from '@shopify/remix-oxygen';
// import {Await, useLoaderData, Link} from '@remix-run/react';
// import {Suspense} from 'react';
// import {Image, Money} from '@shopify/hydrogen';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

//Custom Section
import IlyasComponent from '~/components/ilyas/IlyasComponent';

export const meta = () => {
  return [{ title: 'Saraf Emas Ubat Mujarab Sakit Saraf, Sakit sendi, Gout, Tangan kebas-kebas' }];
};

export default function Homepage() {


  // const data = useLoaderData();

  const tagManagerArgs = {
    gtmId: "GTM-PV7ZSTS",
    dataLayerName: 'Page View'
  }

  useEffect(() => {
    TagManager.initialize(tagManagerArgs)

  }, [])

  return (
    <div className="home" >
      <IlyasComponent />

      {/* <FeaturedCollection collection={data.featuredCollection} />
      <RecommendedProducts products={data.recommendedProducts} /> */}
    </div >
  );
}
// export async function loader({context}) {
//   const {storefront} = context;
//   const {collections} = await storefront.query(FEATURED_COLLECTION_QUERY);
//   const featuredCollection = collections.nodes[0];
//   const recommendedProducts = storefront.query(RECOMMENDED_PRODUCTS_QUERY);

//   return defer({featuredCollection, recommendedProducts});
// }

// 404 redirect
// export async function loader({request, context: {storefront}}) {
//   const {origin} = new URL(request.url);

//   const {shop} = await storefront.query(
//     `query getShopDomain{ shop { primaryDomain{ url } } }`,
//   );

//   const onlineStoreStatusPage = request.url.replace(
//     origin,
//     shop.primaryDomain.url,
//   );

//   return redirect(onlineStoreStatusPage);
// }

// function FeaturedCollection({collection}) {
//   const image = collection.image;
//   return (
//     <Link
//       className="featured-collection"
//       to={`/collections/${collection.handle}`}
//     >
//       {image && (
//         <div className="featured-collection-image">
//           <Image data={image} sizes="100vw" />
//         </div>
//       )}
//       <h1>{collection.title}</h1>
//     </Link>
//   );
// }

// function RecommendedProducts({products}) {
//   return (
//     <div className="recommended-products">
//       <h2>Recommended Products</h2>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Await resolve={products}>
//           {({products}) => (
//             <div className="recommended-products-grid">
//               {products.nodes.map((product) => (
//                 <Link
//                   key={product.id}
//                   className="recommended-product"
//                   to={`/products/${product.handle}`}
//                 >
//                   <Image
//                     data={product.images.nodes[0]}
//                     aspectRatio="1/1"
//                     sizes="(min-width: 45em) 20vw, 50vw"
//                   />
//                   <h4>{product.title}</h4>
//                   <small>
//                     <Money data={product.priceRange.minVariantPrice} />
//                   </small>
//                 </Link>
//               ))}
//             </div>
//           )}
//         </Await>
//       </Suspense>
//       <br />
//     </div>
//   );
// }

// const FEATURED_COLLECTION_QUERY = `#graphql
//   fragment FeaturedCollection on Collection {
//     id
//     title
//     image {
//       id
//       url
//       altText
//       width
//       height
//     }
//     handle
//   }
//   query FeaturedCollection($country: CountryCode, $language: LanguageCode)
//     @inContext(country: $country, language: $language) {
//     collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
//       nodes {
//         ...FeaturedCollection
//       }
//     }
//   }
// `;

// const RECOMMENDED_PRODUCTS_QUERY = `#graphql
//   fragment RecommendedProduct on Product {
//     id
//     title
//     handle
//     priceRange {
//       minVariantPrice {
//         amount
//         currencyCode
//       }
//     }
//     images(first: 1) {
//       nodes {
//         id
//         url
//         altText
//         width
//         height
//       }
//     }
//   }
//   query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
//     @inContext(country: $country, language: $language) {
//     products(first: 4, sortKey: UPDATED_AT, reverse: true) {
//       nodes {
//         ...RecommendedProduct
//       }
//     }
//   }
// `;
