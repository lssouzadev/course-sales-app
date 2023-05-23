import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useUser } from "@auth0/nextjs-auth0/client";


export default function Home() {
  const {user} = useUser()

  return (
    <div>
      <h1>Hello World</h1>
      <pre>
      {JSON.stringify(user, null, 2)}
      </pre>
      <div>
        <a href="/api/auth/logout">LOG</a>
      </div>
    </div>
  )
}

export const getServerSideProps = withPageAuthRequired()
