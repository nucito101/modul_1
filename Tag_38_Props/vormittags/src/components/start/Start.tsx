import React from "react"
import Item from "../item/Item"

export default function Start() {
  return (
    <>
      <section className="start">
        <h2>Not sure where to Start</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita perspiciatis repudiandae voluptas
          accusantium corporis earum eveniet corrupti vel, magnam praesentium?
        </p>
        <div className="box">
          <Item title="Product 1" description="das ist unser erstes Product, ist sehr hochwertig" bg="red" />

          <Item title="Product 2" description="das ist ein gutes Product, blablabla" bg="blue" />
        </div>
      </section>
    </>
  )
}
