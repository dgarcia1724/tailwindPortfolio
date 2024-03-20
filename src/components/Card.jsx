function Card({ project }) {
  const { title, image, description, tools, viewLive, gitHub } = project;

  const showTitle = title != "Paw Pal" && title != "Peak Sports";

  return (
    <div className=" w-[100%] text-center bg-white text-black rounded-xl overflow-hidden">
      <img src={image} className="h-[200px]  object-cover" width={"100%"} />
      <section className="py-10 px-4">
        <div className="mb-8 flex justify-center items-center gap-6">
          <a
            href={viewLive}
            target="_blank"
            className="block px-8 py-2  bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg cursor-pointer"
          >
            VIEW LIVE
          </a>
          {showTitle && (
            <a
              href={gitHub}
              target="_blank"
              className="block px-8 py-2  bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg cursor-pointer"
            >
              GITHUB
            </a>
          )}
        </div>
        <h1 className="mb-2 text-xl font-bold">{title}</h1>
        <p className="mb-8">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => {
            return <Pill key={tool} tool={tool} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default Card;

function Pill({ tool }) {
  return (
    <div className="px-[12px] py-[6px] bg-cyan-950 text-cyan-100 rounded-full">
      {tool}
    </div>
  );
}
