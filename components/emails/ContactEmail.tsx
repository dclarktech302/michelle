import { ContactFormData } from '@/lib/types'

export default function ContactEmail({ name, email, message }: ContactFormData) {
    return (
        <div style={{ fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ color: '#1a1a1a' }}>
                New message — Michele W. Johnson Campaign
            </h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '24px' }}>
                <tbody>
                    <tr>
                        <td style={{ padding: '8px 0', fontWeight: 600, width: '100px', color: '#555' }}>Name</td>
                        <td style={{ padding: '8px 0' }}>{name}</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px 0', fontWeight: 600, color: '#555' }}>Email</td>
                        <td style={{ padding: '8px 0' }}>
                            <a href={`mailto:${email}`}>{email}</a>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px 0', fontWeight: 600, color: '#555', verticalAlign: 'top' }}>Message</td>
                        <td style={{ padding: '8px 0', whiteSpace: 'pre-wrap' }}>{message}</td>
                    </tr>
                </tbody>
            </table>
            <hr style={{ margin: '32px 0', borderColor: '#eee' }} />
            <p style={{ fontSize: '12px', color: '#999' }}>
                By Authority Friends of Michele W. Johnson 37B, Sarah Moerschel, Treasurer
            </p>
        </div>
    )
}