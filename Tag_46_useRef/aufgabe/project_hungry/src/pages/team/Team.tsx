import TextContent from "../../components/textContent/TextContent"
import YellowShape from "../../components/yellowShape/YellowShape"
import { ScrollTo } from "../../utility/scrollTo/ScrollTo"

export default function Team() {
  ScrollTo("team")
  return (
    <>
      <div id="team" className="relative w-screen h-screen">
        <div className="absolute inset-0 bg-[url(/img/bg-team.jpg)] bg-center bg-cover bg-no-repeat z-0" />

        <div className="absolute inset-0 bg-black/60 z-10" />

        <div className="relative z-20 w-[80%] mx-auto px-10 pt-20 pb-20">
          <div className="py-10">
            <p className="uppercase text-center text-xs tracking-widest text-white">our team</p>
          </div>

          <div className="grid grid-cols-2 gap-10 items-center my-10">
            <div>
              <div className="relative sepia-20 saturate-150 bg-[url(/img/team.jpg)] w-[475px] bg-center bg-cover aspect-square rounded-[5px] shadow-2xl">
                <div className="absolute top-30 -left-30">
                  <YellowShape variant="square" />
                </div>
              </div>
            </div>

            <div>
              <TextContent
                heading="master chef"
                subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna."
                paragraph="Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet."
                variant="white"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
