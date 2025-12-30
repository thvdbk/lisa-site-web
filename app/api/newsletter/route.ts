import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // Validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      )
    }

    // Ajouter le contact à Brevo
    const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY || '',
      },
      body: JSON.stringify({
        email: email,
        listIds: [3], // Remplacer par l'ID de votre liste newsletter
        updateEnabled: true,
      }),
    })

    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.json()

      // Si le contact existe déjà, c'est ok
      if (errorData.code === 'duplicate_parameter') {
        return NextResponse.json(
          { success: true, message: 'Vous êtes déjà inscrit à la newsletter' },
          { status: 200 }
        )
      }

      console.error('Brevo API error:', errorData)
      return NextResponse.json(
        { error: 'Erreur lors de l\'inscription' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Inscription réussie' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'inscription' },
      { status: 500 }
    )
  }
}
