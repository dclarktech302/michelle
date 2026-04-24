import { VolunteerFormData } from '@/lib/types'

export default function VolunteerEmail({
  name, email, phone, address, city, state, zip, interests, message,
}: VolunteerFormData) {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ color: '#1a1a1a' }}>New Volunteer — Michele W. Johnson Campaign</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '24px' }}>
        <tbody>
          <tr>
            <td style={{ padding: '8px 0', fontWeight: 600, width: '140px', color: '#555' }}>Name</td>
            <td style={{ padding: '8px 0' }}>{name}</td>
          </tr>
          <tr>
            <td style={{ padding: '8px 0', fontWeight: 600, color: '#555' }}>Email</td>
            <td style={{ padding: '8px 0' }}><a href={`mailto:${email}`}>{email}</a></td>
          </tr>
          <tr>
            <td style={{ padding: '8px 0', fontWeight: 600, color: '#555' }}>Phone</td>
            <td style={{ padding: '8px 0' }}>{phone}</td>
          </tr>
          <tr>
            <td style={{ padding: '8px 0', fontWeight: 600, color: '#555' }}>Address</td>
            <td style={{ padding: '8px 0' }}>{address}<br />{city}, {state} {zip}</td>
          </tr>
          <tr>
            <td style={{ padding: '8px 0', fontWeight: 600, color: '#555', verticalAlign: 'top' }}>Interests</td>
            <td style={{ padding: '8px 0' }}>
              <ul style={{ margin: 0, paddingLeft: '16px' }}>
                {interests.map((interest, i) => <li key={i}>{interest}</li>)}
              </ul>
            </td>
          </tr>
          {message && (
            <tr>
              <td style={{ padding: '8px 0', fontWeight: 600, color: '#555', verticalAlign: 'top' }}>Message</td>
              <td style={{ padding: '8px 0' }}>{message}</td>
            </tr>
          )}
        </tbody>
      </table>
      <hr style={{ margin: '32px 0', borderColor: '#eee' }} />
      <p style={{ fontSize: '12px', color: '#999' }}>
        By Authority Friends of Michele W. Johnson 37B, Sarah Moerschel, Treasurer
      </p>
    </div>
  )
}