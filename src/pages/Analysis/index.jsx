import React from 'react'

import Card, { CardsRow } from '../../components/Card'
import SankeyD3 from '../../components/SankeyD3'

export default function Analysis() {
  return (<section>
    <CardsRow className='border'>
      <Card>test</Card>
      <Card>test</Card>
      <Card>test</Card>
      <Card>test</Card>
    </CardsRow>
    <CardsRow>
      <Card className='grow-2'><SankeyD3 /></Card>
      <Card>test</Card>
      <Card>test</Card>
    </CardsRow>
    <CardsRow>
      <Card>test</Card>
      <Card>test</Card>
    </CardsRow>
  </section>)
}