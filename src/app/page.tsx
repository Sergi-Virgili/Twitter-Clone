import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { AuthButtonServer } from './components/auth-button-server'
import { redirect } from 'next/navigation'
import PostCard from './components/post-card'

export default async function Home () {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  if (session === null) {
    redirect('/login')
  }
  const { data: posts } = await supabase
    .from('posts')
    .select('*, users (*)')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AuthButtonServer />
      {posts?.map((post) => {
        const {
          id,

          content
        } = post
        const {
          avatar_url: avatarURL,
          name,
          username
        } = post.users

        return <PostCard key={post.id} { ... { id, avatarURL, name, username, content }}/>
      })}
    </main>
  )
}
