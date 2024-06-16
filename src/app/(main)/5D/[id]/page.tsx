'use client'
import { useEffect, useState } from 'react'
import SSC from '@/views/5D'
import { useParams } from 'next/navigation'
const Index: React.FC = () => {
  const {id} = useParams()
  return (<SSC id={id}/> )
}

export default Index
