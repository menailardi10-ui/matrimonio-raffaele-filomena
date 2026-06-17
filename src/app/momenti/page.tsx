export default function MomentiPage() {
  return (
    <main className="min-h-screen bg-[#F8F5F0] px-5 py-6 pb-24">
      <div className="mx-auto max-w-md">

        <div className="text-center">
          <h1 className="font-title text-4xl text-[#0F6B6B]">
            I nostri momenti
          </h1>

          <div className="my-3 flex items-center justify-center gap-2">
            <div className="h-px w-10 bg-[#0F6B6B]/30" />
            <span className="text-[#0F6B6B]">♡</span>
            <div className="h-px w-10 bg-[#0F6B6B]/30" />
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-lg">
          <video
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            className="w-full"
          >
            <source
              src="/videos/malta-backstage.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="mt-6 text-center">
          <p className="font-title text-2xl text-[#0F6B6B]">
            Malta 2025
          </p>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            Un piccolo sguardo dietro le quinte
            della nostra anteprima fotografica.
          </p>
        </div>

      </div>
    </main>
  );
}
