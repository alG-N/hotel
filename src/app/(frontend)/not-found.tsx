import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/ui/button'
import { T } from '@/providers/Language/T'

export default function NotFound() {
  return (
    <div className="container py-28">
      <div className="prose max-w-none">
        <h1 style={{ marginBottom: 0 }}>404</h1>
        <p className="mb-4"><T vi="Không tìm thấy trang này." en="This page could not be found." /></p>
      </div>
      <Button asChild variant="default">
        <Link href="/"><T vi="Về trang chủ" en="Go home" /></Link>
      </Button>
    </div>
  )
}
