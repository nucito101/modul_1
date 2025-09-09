import TextContent from "../../components/textContent/TextContent"
import YellowShape from "../../components/yellowShape/YellowShape"

export default function Team() {
  return (
    <>
      <div className="relative w-screen h-screen top-0 left-0 bg-[url(/img/bg-team.jpg)] bg-center bg-cover bg-no-repeat">
        {" "}
      </div>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="px-10 pb-20 pt-20 w-[80%] m-auto absolute inset-0">
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
    </>
  )
}
