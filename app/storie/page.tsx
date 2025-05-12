import Image from "next/image"
import Link from "next/link"
import { Quote, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function StoriePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-20 bg-emerald-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-emerald-800">
                  Storie di successo
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Testimonianze di famiglie romane che hanno ritrovato serenità grazie alle nostre soluzioni
                  specializzate per il mercato immobiliare della Capitale
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12">
              <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Famiglia Bianchi"
                    className="rounded-lg object-cover shadow-xl"
                  />
                </div>
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-md bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                    <Users className="h-4 w-4" />
                    <span>Famiglia Bianchi, Milano</span>
                  </div>
                  <blockquote className="space-y-2">
                    <Quote className="h-8 w-8 text-emerald-200" />
                    <p className="text-xl font-medium text-gray-700">
                      "Dopo la malattia di mio marito, non riuscivamo più a pagare il mutuo del nostro appartamento nel
                      quartiere Trieste. La banca aveva già avviato la procedura esecutiva presso il Tribunale di Roma e
                      l'asta era fissata. Eravamo disperati all'idea di perdere la casa dove i nostri figli sono
                      cresciuti, in un quartiere dove abbiamo costruito relazioni e una vita di comunità. Stop
                      Pignoramento Casa Roma è intervenuta quando pensavamo non ci fosse più speranza."
                    </p>
                    <p className="text-gray-500">
                      "Hanno bloccato l'asta e negoziato con la banca un piano di rientro che potevamo permetterci,
                      considerando anche il costo della vita a Roma. Oggi viviamo ancora nella nostra casa e abbiamo
                      ripreso in mano la nostra vita. Non smetteremo mai di ringraziare il team di Stop Pignoramento
                      Casa Roma per averci ridato speranza e serenità, permettendoci di rimanere nel quartiere che
                      amiamo."
                    </p>
                  </blockquote>
                </div>
              </div>

              <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
                <div className="order-2 md:order-1 space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-md bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                    <Users className="h-4 w-4" />
                    <span>Marco R., Roma</span>
                  </div>
                  <blockquote className="space-y-2">
                    <Quote className="h-8 w-8 text-emerald-200" />
                    <p className="text-xl font-medium text-gray-700">
                      "Dopo la perdita del lavoro, mi sono trovato in una spirale di debiti che non riuscivo più a
                      gestire. Il mutuo per il mio appartamento a Monteverde era diventato insostenibile e la banca non
                      voleva sentire ragioni. Ero sul punto di perdere l'appartamento che avevo acquistato con tanti
                      sacrifici, in una delle zone più vivibili di Roma."
                    </p>
                    <p className="text-gray-500">
                      "Stop Pignoramento Casa Roma ha analizzato la mia situazione e ha trovato una soluzione che non
                      avrei mai immaginato: hanno negoziato con la banca una riduzione significativa del debito residuo
                      e ristrutturato il piano di ammortamento, tenendo conto del valore attuale dell'immobile nel
                      mercato romano. Oggi ho un mutuo sostenibile e sto gradualmente risanando la mia situazione
                      finanziaria, senza dover abbandonare il quartiere dove ho costruito la mia vita sociale."
                    </p>
                  </blockquote>
                </div>
                <div className="order-1 md:order-2 relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Marco R."
                    className="rounded-lg object-cover shadow-xl"
                  />
                </div>
              </div>

              <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Famiglia Rossi"
                    className="rounded-lg object-cover shadow-xl"
                  />
                </div>
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-md bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                    <Users className="h-4 w-4" />
                    <span>Famiglia Rossi, Torino</span>
                  </div>
                  <blockquote className="space-y-2">
                    <Quote className="h-8 w-8 text-emerald-200" />
                    <p className="text-xl font-medium text-gray-700">
                      "La nostra casa nel quartiere Appio-Latino era già all'asta quando abbiamo contattato Stop
                      Pignoramento Casa Roma. Avevamo accumulato debiti a causa della nostra attività commerciale nel
                      centro storico che aveva chiuso durante la pandemia. Pensavamo fosse troppo tardi per qualsiasi
                      soluzione, soprattutto considerando la rapidità con cui procedono le aste a Roma."
                    </p>
                    <p className="text-gray-500">
                      "Il team di Stop Pignoramento Casa è riuscito a intervenire anche in questa fase avanzata. Hanno
                      trovato irregolarità nella procedura esecutiva che hanno permesso di sospendere l'asta. Nel
                      frattempo, hanno strutturato una soluzione di lease-back che ci ha permesso di rimanere nella
                      nostra casa con un contratto di affitto e la possibilità di riacquistarla in futuro. È stata una
                      seconda possibilità che non speravamo più di avere."
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20 bg-emerald-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-5 w-5 text-emerald-600" />
                  <h3 className="font-bold">Famiglia Verdi, Napoli</h3>
                </div>
                <blockquote className="space-y-2">
                  <p className="text-gray-500">
                    "Grazie a Stop Pignoramento Casa abbiamo evitato il pignoramento della nostra casa e ristrutturato i
                    nostri debiti. Ora abbiamo un piano di pagamento sostenibile e possiamo guardare al futuro con
                    serenità."
                  </p>
                </blockquote>
              </div>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-5 w-5 text-emerald-600" />
                  <h3 className="font-bold">Lucia M., Bologna</h3>
                </div>
                <blockquote className="space-y-2">
                  <p className="text-gray-500">
                    "Dopo il divorzio, non riuscivo più a sostenere il mutuo da sola. Stop Pignoramento Casa ha
                    negoziato con la banca e trovato una soluzione che mi ha permesso di mantenere la casa per me e mio
                    figlio."
                  </p>
                </blockquote>
              </div>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-5 w-5 text-emerald-600" />
                  <h3 className="font-bold">Antonio P., Palermo</h3>
                </div>
                <blockquote className="space-y-2">
                  <p className="text-gray-500">
                    "La mia casa era già stata messa all'asta quando ho contattato Stop Pignoramento Casa. Sono riusciti
                    a bloccare la procedura e a trovare una soluzione che mi ha permesso di rimanere nella mia
                    abitazione."
                  </p>
                </blockquote>
              </div>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-5 w-5 text-emerald-600" />
                  <h3 className="font-bold">Famiglia Esposito, Bari</h3>
                </div>
                <blockquote className="space-y-2">
                  <p className="text-gray-500">
                    "Avevamo perso la speranza di poter salvare la nostra casa. Stop Pignoramento Casa ci ha mostrato
                    che esistevano ancora delle possibilità e ci ha guidato passo dopo passo verso la soluzione."
                  </p>
                </blockquote>
              </div>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-5 w-5 text-emerald-600" />
                  <h3 className="font-bold">Giovanni T., Firenze</h3>
                </div>
                <blockquote className="space-y-2">
                  <p className="text-gray-500">
                    "La professionalità e l'empatia del team di Stop Pignoramento Casa mi hanno colpito fin dal primo
                    incontro. Non solo hanno risolto la mia situazione, ma mi hanno fatto sentire supportato in ogni
                    momento."
                  </p>
                </blockquote>
              </div>
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-5 w-5 text-emerald-600" />
                  <h3 className="font-bold">Famiglia Moretti, Genova</h3>
                </div>
                <blockquote className="space-y-2">
                  <p className="text-gray-500">
                    "Stop Pignoramento Casa ha trovato irregolarità nella nostra procedura esecutiva che nemmeno il
                    nostro avvocato aveva notato. Questo ci ha dato il tempo necessario per ristrutturare il debito e
                    salvare la casa."
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20 bg-emerald-700 text-white">
          <div className="container px-4 md:px-6 text-center">
            <div className="mx-auto max-w-3xl space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">La tua storia di successo inizia qui</h2>
              <p className="text-emerald-100 md:text-xl/relaxed">
                Unisciti alle centinaia di famiglie che hanno già ritrovato serenità grazie alle nostre soluzioni.
                Contattaci oggi stesso per una consulenza gratuita e senza impegno.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-emerald-100">
                  <Link href="/#contattaci">
                    Richiedi consulenza gratuita
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
