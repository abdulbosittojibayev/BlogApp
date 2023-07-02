import React from 'react'
import BaseLayout from '../../layouts/base-layout'
import Header from '../../components/Header/Header'
import RecentBlog from '../../components/RecentBlog/RecentBlog'
import AllBlogs from '../../components/AllBlogs/AllBlogs'

function Home() {
  return (
    <BaseLayout>
         <Header />
        <RecentBlog />
        <AllBlogs />
    </BaseLayout>
  )
}

export default Home