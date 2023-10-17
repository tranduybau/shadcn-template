import React from 'react'

interface PageProps {
  params: {
    slugs: string[]
  }
}

function Page(props: PageProps) {
  return <div>{props.params.slugs.join('/')}</div>
}

export default Page
