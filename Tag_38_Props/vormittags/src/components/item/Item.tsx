interface Itemprops {
  title: string
  description: string
  bg?: string
}

// wenn ich Daten von Eltern zum Kind schicken möchte, muss ich meinen Komponent zu einer React.FC komponent typisieren. so weiss dann React das die Daten ankommen, zudem muss ich eine Interface schreiben, was die Daten die reinkommen beschreibt

//  Über das wort props kann ich dann final auf die Daten zugreifen (Objekt)

const Item: React.FC<Itemprops> = (props) => {
  return (
    <>
      <div className="item" style={{ backgroundColor: `${props.bg}` }}>
        {/* die {} benötigen wir damit wie JS/TS in HTML benutzen können, innterHtml etc gibt es nicht mehr in React */}
        <h5>Title {props.title}</h5>
        <p>desc: {props.description}</p>
      </div>
    </>
  )
}

export default Item
