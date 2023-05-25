import { useGetProductsQuery, useMeQuery } from "@/src/graphql/generated/graphql";
import { getServerPageGetProducts, ssrGetProducts } from "@/src/graphql/generated/page";
import { withApollo } from "@/src/lib/withApollo";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useUser } from "@auth0/nextjs-auth0/client";

export function Home({ data }: any) {
  const { user } = useUser()
  const { data: me } = useMeQuery()
  return (
    <div>
      <h1>Hello World</h1>
      <pre>
        {JSON.stringify(me, null, 2)}
      </pre>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
      {/* <pre>
      {JSON.stringify(data.products, null, 2)}
      </pre> */}
    </div>
  )
}

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async (ctx) => {
    return {
      props: {}
    }

  }
})

export default withApollo(
  ssrGetProducts.withPage()(Home)
);