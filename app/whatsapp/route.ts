import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.redirect(
    'https://wa.me/47997448050?text=Ol%C3%A1%20Willian%2C%20preciso%20de%20ajuda%20para%20agendar%20a%20reuni%C3%A3o.'
  )
}
