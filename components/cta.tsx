import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="max-w6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              Videos
            </h2>
            <div className="mx-auto flex flex-wrap gap-6 justify-center max-w-screen-lg">
  <div className="w-full sm:w-1/2 lg:w-1/3 rounded-lg overflow-hidden">
    <iframe className="w-full h-56 rounded-lg" src="https://www.youtube.com/embed/fUb4aolcJ38?rel=0"></iframe>
  </div>
  <div className="w-full sm:w-1/2 lg:w-1/3 rounded-lg overflow-hidden">
    <iframe className="w-full h-56 rounded-lg" src="https://www.youtube.com/embed/Irqn14-dj90?rel=0"></iframe>
  </div>
  <div className="w-full sm:w-1/2 lg:w-1/3 rounded-lg overflow-hidden">
    <iframe className="w-full h-56 rounded-lg" src="https://www.youtube.com/embed/3nnDfE-y9pk?rel=0"></iframe>
  </div>
  <div className="w-full sm:w-1/2 lg:w-1/3 rounded-lg overflow-hidden">
    <iframe className="w-full h-56 rounded-lg" src="https://www.youtube.com/embed/Aikx02HNyiw?rel=0"></iframe>
  </div>
  <div className="w-full sm:w-1/2 lg:w-1/3 rounded-lg overflow-hidden">
    <iframe className="w-full h-56 rounded-lg" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
  </div>
</div>


          </div>
        </div>
      </div>
    </section>
  );
}
