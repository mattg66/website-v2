import Link from 'next/link'
import Video from '../layouts/video'
const Index = () => (
  <>
  <Video/>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </>
)

export default Index
