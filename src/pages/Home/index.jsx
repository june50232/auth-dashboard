import React from 'react'

import Card, { CardsRow } from '../../components/Card'

export default function Home () {
  return (<section>
    <CardsRow>
      <Card>test</Card>
      <Card>test</Card>
      <Card>test</Card>
      <Card>test</Card>
    </CardsRow>
    <CardsRow>
      <Card className='grow-2'>test</Card>
      <Card>test</Card>
    </CardsRow>
    <CardsRow>
      <Card className='grow-2'>test</Card>
      <Card>test</Card>
    </CardsRow>
  </section>
  )
}