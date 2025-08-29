// $ ?? => Ersatzwert
// $ && => Bedingung

export function UserProfile({ name }: any) {
  return (
    <>
      <div>
        {/* Backup, wenn nichts "undefined oder null" da ist, dann sollte der Ersatzwert übernommen werden*/}
        <h2>{name ?? `Unbekannter Benutzer`}</h2>
      </div>
    </>
  )
}

export function Notifications({ count }: any) {
  return (
    <>
      <div>
        <h2>Benachrichtigung </h2>
        {count >= 0 && <p>Du hast {count} neue Nachrichten </p>}
      </div>
    </>
  )
}
