import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message, acceptPrivacy, subscribeNewsletter } = body

    console.log('[Contact API] Request received:', { name, email, subject })

    // Validation
    if (!name || !email || !subject || !message || !acceptPrivacy) {
      console.log('[Contact API] Validation failed')
      return NextResponse.json(
        { error: 'Tous les champs requis doivent être remplis' },
        { status: 400 }
      )
    }

    // Vérifier que la clé API existe
    if (!process.env.BREVO_API_KEY) {
      console.error('[Contact API] BREVO_API_KEY is not set')
      return NextResponse.json(
        { error: 'Configuration serveur manquante' },
        { status: 500 }
      )
    }

    // Envoyer l'email via Brevo
    const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY || '',
      },
      body: JSON.stringify({
        sender: {
          name: process.env.BREVO_SENDER_NAME,
          email: process.env.BREVO_SENDER_EMAIL,
        },
        to: [
          {
            email: process.env.BREVO_RECIPIENT_EMAIL,
            name: process.env.BREVO_SENDER_NAME,
          },
        ],
        replyTo: {
          email: email,
          name: name,
        },
        subject: `[Contact Vie_Vent] ${subject}`,
        htmlContent: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #5E8C61;">Nouveau message de contact</h2>
            <div style="background-color: #f5f0e6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Nom :</strong> ${name}</p>
              <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Sujet :</strong> ${subject}</p>
            </div>
            <div style="margin: 20px 0;">
              <h3 style="color: #6B4F4F;">Message :</h3>
              <p style="line-height: 1.6; color: #6B4F4F;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            ${subscribeNewsletter ? '<p style="color: #5E8C61; font-style: italic;">✓ Cette personne souhaite s\'abonner à la newsletter, et a donc été ajouté à la liste sur Brevo</p>' : ''}
            <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">
            <p style="color: #999; font-size: 12px;">Message envoyé depuis le formulaire de contact de eco-inf.fr</p>
          </div>
        `,
      }),
    })

    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.json()
      console.error('[Contact API] Brevo API error:', {
        status: brevoResponse.status,
        error: errorData
      })
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi du message' },
        { status: 500 }
      )
    }

    console.log('[Contact API] Email sent successfully')

    // Si l'utilisateur veut s'abonner à la newsletter, l'ajouter aux contacts Brevo
    if (subscribeNewsletter) {
      await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'api-key': process.env.BREVO_API_KEY || '',
        },
        body: JSON.stringify({
          email: email,
          attributes: {
            PRENOM: name.split(' ')[0],
            NOM: name.split(' ').slice(1).join(' ') || '',
          },
          listIds: [3], // Remplacer par l'ID de votre liste newsletter
          updateEnabled: true,
        }),
      }).catch(err => console.error('Error adding to newsletter:', err))
    }

    return NextResponse.json(
      { success: true, message: 'Message envoyé avec succès' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[Contact API] Unexpected error:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    )
  }
}
