import TextContent from "../../components/textContent/TextContent"
import YellowShape from "../../components/yellowShape/YellowShape"

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 gap-30 items-center my-30 px-10 w-[80%] m-auto">
        <div>
          <TextContent
            heading="about us"
            subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna."
            paragraph="Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet."
          />
        </div>
        <div>
          <div className="relative sepia-20 saturate-150 bg-[url(/img/about-us.jpg)] w-[475px] bg-center bg-cover aspect-square rounded-[5px] shadow-2xl">
            <div className="absolute top-30 left-80">
              <YellowShape variant="square" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
