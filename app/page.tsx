import Image from "next/image";
import Link from "next/link";
import Faq from "@/components/Faq";
import Gallery from "@/components/Gallery";
import { BENEFITS, HERO, STEPS } from "@/lib/content";
import { WA_GENERAL } from "@/lib/whatsapp";

const pad = (i: number) => String(i + 1).padStart(2, "0");

export default function Home() {
  return (
    <main>
      {/* 01 Hero */}
      <section
        id="inicio"
        className="relative flex min-h-[clamp(600px,86vh,920px)] flex-col justify-end overflow-hidden bg-carbon text-white"
      >
        <Image src={HERO.src} alt="" fill preload quality={90} sizes="100vw" className="object-cover" style={{ objectPosition: HERO.pos }} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(32,16,10,.84)_0%,rgba(32,16,10,.62)_34%,rgba(32,16,10,.12)_66%,rgba(32,16,10,0)_82%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(32,16,10,0)_55%,rgba(32,16,10,.6)_100%)]" />
        <div className="relative mx-auto w-full max-w-[1440px] px-[clamp(20px,4vw,64px)] pt-[clamp(80px,10vw,140px)]">
          <div className="flex max-w-[780px] flex-col gap-[clamp(20px,2.4vw,30px)]">
            <span className="text-[clamp(13px,1vw,14px)] font-medium tracking-[.16em] text-hormigon uppercase">
              Cobogós y revestimientos de concreto
            </span>
            <h1 className="display text-balance">
              {HERO.headline[0]}
              <span className="text-terracota">{HERO.headline[1]}</span>.
            </h1>
            <p className="lede max-w-[560px] text-hormigon">
              Cobogós y placas de concreto de alta performance, fabricados a mano en nuestro taller de Asunción para tu
              casa, tu local o la obra que estás proyectando.
            </p>
            <div className="mt-[6px] flex flex-wrap gap-3">
              <Link
                href="/tienda"
                className="inline-flex items-center gap-[10px] rounded-full bg-terracota px-8 py-[18px] text-[17px] font-medium text-white hover:bg-hormigon hover:text-carbon"
              >
                Ver la tienda <span>→</span>
              </Link>
              <a
                href={WA_GENERAL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-[10px] rounded-full border-[1.5px] border-[rgba(255,255,255,.85)] px-[31px] py-[17px] text-[17px] font-medium text-white hover:bg-white hover:text-carbon"
              >
                Cotizar por WhatsApp
              </a>
            </div>
          </div>
          <div className="mt-[clamp(64px,8vw,112px)] flex flex-wrap justify-between gap-x-10 gap-y-4 border-t border-[rgba(236,233,228,.3)] pt-[22px] pb-7 text-[15px] text-hormigon">
            <div className="flex flex-wrap gap-x-10 gap-y-3">
              {["Concreto de alta performance", "Entrega en 30 días", "Envíos a todo el país"].map((t) => (
                <span key={t} className="flex items-center gap-3">
                  <span className="pill-dot" />
                  {t}
                </span>
              ))}
            </div>
            <span>{HERO.cap}</span>
          </div>
        </div>
      </section>

      {/* 02 Dos líneas */}
      <section id="categorias" className="section bg-hormigon">
        <div className="shell">
          <div className="mb-[clamp(40px,5vw,72px)] flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
            <h2 className="t1 max-w-[780px]">
              Dos líneas, <span className="text-terracota">una misma trama</span>.
            </h2>
            <p className="lede max-w-[440px]">
              Revestimientos para vestir un muro entero y cobogós para que ese muro respire. Todo de concreto, fabricados
              en Asunción.
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-x-[clamp(20px,3vw,40px)] gap-y-[clamp(40px,4vw,56px)]">
            <CategoryTile
              href="/tienda/revestimientos"
              src="/images/productos/placa-escalera.png"
              alt="Muro revestido con placas de concreto"
              title="Revestimientos"
              text="Placas y azulejos de concreto para muros interiores y fachadas. Textura, sombra y color en una sola superficie."
              cta="Ver revestimientos →"
            />
            <CategoryTile
              href="/tienda/cobogos"
              src="/images/productos/cob-diagonal-terracota-muro.jpg"
              alt="Muro de cobogó Diagonal visto de cerca"
              pos="50% 40%"
              title="Cobogós"
              text="Piezas caladas para muros que filtran la luz, el aire y la vista. Separan sin encerrar."
              cta="Ver cobogós →"
            />
          </div>
        </div>
      </section>

      {/* 03 El material */}
      <section id="material" className="section bg-white">
        <div className="shell grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] items-start gap-[clamp(48px,7vw,112px)]">
          <div className="flex flex-col gap-7">
            <span className="kicker">El material</span>
            <h2 className="t1">
              Concreto de <span className="text-terracota">alta performance</span>.
            </h2>
            <p className="lede max-w-[540px]">
              No usamos una sola mezcla. Desarrollamos fórmulas propias para interior, exterior y muros perimetrales, y
              cada pieza sale con la que pide su lugar en la obra.
            </p>
            <div className="relative mt-3 aspect-[16/10] overflow-hidden rounded-full bg-placeholder">
              <Image
                src="/images/productos/cob-duo-piezas.jpg"
                alt="Cobogós Dúo de concreto recién desmoldados"
                fill
                sizes="(max-width: 960px) 100vw, 50vw"
                className="object-cover object-[50%_45%]"
              />
            </div>
          </div>
          <div className="flex flex-col">
            {BENEFITS.map(([t, d], i) => (
              <div
                key={t}
                className="grid grid-cols-[clamp(56px,6vw,84px)_1fr] gap-5 border-t-[1.5px] border-carbon py-[clamp(24px,2.6vw,34px)]"
              >
                <span className="num text-[clamp(32px,3.4vw,44px)]">{pad(i)}</span>
                <div className="flex flex-col gap-[10px]">
                  <h3 className="t3">{t}</h3>
                  <p className="copy">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 Muros con presencia */}
      <section id="obras" className="section bg-hormigon">
        <div className="shell">
          <div className="mb-[clamp(40px,5vw,64px)] flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
            <h2 className="t1 max-w-[780px]">
              Muros con <span className="text-terracota">presencia</span>.
            </h2>
            <p className="lede max-w-[440px]">
              Casas, locales y jardines donde el muro deja de ser fondo y pasa a ser protagonista.
            </p>
          </div>
          <Gallery />
        </div>
      </section>

      {/* 05 Nosotros */}
      <section id="nosotros" className="section bg-carbon text-hormigon">
        <div className="shell grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))] items-center gap-[clamp(48px,7vw,112px)]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[24px_24px_999px_999px] bg-[#3A251C]">
            <Image
              src="/images/taller/taller-materiales.jpg"
              alt="Materias primas en el taller de Trama"
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-7">
            <span className="kicker text-hormigon">Nosotros</span>
            <h2 className="t1">
              Artesanos paraguayos, <span className="text-terracota">pieza por pieza</span>.
            </h2>
            <p className="lede">
              Trama nace de una idea simple: un muro también puede tener carácter. Fabricamos revestimientos y cobogós de
              concreto que, pieza a pieza, construyen patrones de luz, sombra y textura. Solo, un bloque es una forma.
              Repetido, se convierte en trama.
            </p>
            <p className="lede">
              En nuestro taller de Asunción mezclamos, moldeamos, curamos y terminamos cada pieza a mano. Trabajamos junto
              a arquitectos y diseñadores de interiores, con la misma atención en un muro de jardín que en una fachada
              completa.
            </p>
            <div className="mt-3 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-x-10 gap-y-7 border-t border-[rgba(236,233,228,.25)] pt-8">
              {[
                ["Hecho a mano", "Cada pieza se moldea y se termina en nuestro taller de Asunción."],
                ["Curado", "Respetamos los tiempos del concreto para que cada pieza dure."],
                ["Diseño", "Formas pensadas para crear trama, luz y sombra en el espacio."],
                ["Cercanía", "Acompañamos a arquitectos y diseñadores en cada proyecto."],
              ].map(([t, d]) => (
                <div key={t} className="flex flex-col gap-[10px]">
                  <span className="flex items-center gap-3 text-[20px] font-medium">
                    <span className="pill-dot" />
                    {t}
                  </span>
                  <span className="text-[16px] leading-[1.5] text-arena">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 06 Cómo comprar */}
      <section id="como-comprar" className="section bg-white">
        <div className="shell">
          <div className="mb-[clamp(40px,5vw,72px)] flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
            <div className="flex max-w-[760px] flex-col gap-5">
              <span className="kicker">Cómo comprar</span>
              <h2 className="t1">
                De la tienda a tu muro, <span className="text-terracota">en 30 días</span>.
              </h2>
            </div>
            <p className="lede max-w-[420px]">
              Todo se fabrica sobre pedido, en el color y la cantidad que necesitás. Sin registro ni pago online: lo
              cerramos juntos por WhatsApp.
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-[clamp(32px,3vw,40px)]">
            {STEPS.map(([t, d], i) => (
              <div key={t} className="flex flex-col gap-[18px] border-t-[1.5px] border-carbon pt-6">
                <div className="flex gap-[6px]">
                  {[0, 1, 2, 3].map((j) => (
                    <span key={j} className="pill-dot" style={{ background: j <= i ? "#C35B36" : "rgba(43,23,16,.14)" }} />
                  ))}
                </div>
                <span className="num text-[clamp(40px,4vw,56px)]">{pad(i)}</span>
                <h3 className="t3">{t}</h3>
                <p className="copy">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-[clamp(48px,5vw,72px)] flex flex-wrap gap-3">
            <Link
              href="/tienda"
              className="inline-flex items-center gap-[10px] rounded-full bg-carbon px-8 py-[18px] text-[17px] font-medium text-hormigon hover:bg-terracota hover:text-white"
            >
              Ir a la tienda →
            </Link>
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-[10px] rounded-full border-[1.5px] border-carbon px-[31px] py-[17px] text-[17px] font-medium text-carbon hover:bg-carbon hover:text-hormigon"
            >
              Prefiero hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 07 FAQ */}
      <section id="faq" className="section bg-hormigon">
        <div className="shell grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-start gap-[clamp(40px,6vw,96px)]">
          <div className="flex flex-col gap-6">
            <span className="kicker">Preguntas frecuentes</span>
            <h2 className="t1 [text-wrap:wrap]">
              Lo que más nos <span className="text-terracota">preguntan</span>.
            </h2>
            <p className="lede max-w-[420px]">¿No encontrás tu respuesta? Escribinos y te contestamos el mismo día.</p>
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-[10px] self-start rounded-full bg-terracota px-7 py-4 text-[16px] font-medium text-white hover:bg-carbon hover:text-hormigon"
            >
              Consultar por WhatsApp
            </a>
          </div>
          <Faq />
        </div>
      </section>
    </main>
  );
}

function CategoryTile({
  href,
  src,
  alt,
  pos,
  title,
  text,
  cta,
}: {
  href: string;
  src: string;
  alt: string;
  pos?: string;
  title: string;
  text: string;
  cta: string;
}) {
  return (
    <Link href={href} className="flex h-full flex-col gap-7 text-carbon hover:text-carbon">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[999px_999px_24px_24px] bg-placeholder">
        <Image src={src} alt={alt} fill sizes="(max-width: 900px) 100vw, 50vw" className="object-cover" style={{ objectPosition: pos }} />
      </div>
      {/* Texto arriba y botón siempre abajo a la izquierda: ambos botones quedan alineados. */}
      <div className="flex flex-1 flex-col items-start justify-between gap-5">
        <div className="flex max-w-[440px] flex-col gap-3">
          <h3 className="t2">{title}</h3>
          <p className="copy">{text}</p>
        </div>
        <span className="inline-flex items-center gap-[10px] rounded-full bg-carbon px-[26px] py-[15px] text-[16px] font-medium text-hormigon">
          {cta}
        </span>
      </div>
    </Link>
  );
}
