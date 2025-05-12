import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Shield, FileText, Home, Scale, Calculator, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SoluzioniPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-20 bg-emerald-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-emerald-800">
                  Le nostre soluzioni
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Strategie personalizzate per proteggere la tua casa a Roma e ritrovare stabilità finanziaria,
                  sviluppate da esperti che conoscono a fondo le procedure del Tribunale Civile di Roma e le peculiarità
                  del mercato immobiliare capitolino.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-md bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  <Shield className="h-4 w-4" />
                  <span>Protezione Immobiliare</span>
                </div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-emerald-800">
                  Blocco delle procedure esecutive
                </h2>
                <p className="text-gray-500 md:text-lg/relaxed">
                  Interveniamo tempestivamente per bloccare o sospendere le procedure esecutive in corso presso il
                  Tribunale di Roma, utilizzando strumenti legali specifici e strategie finanziarie innovative che
                  permettono di guadagnare tempo prezioso per trovare la soluzione più adatta alla tua situazione. Il
                  nostro team conosce in profondità le prassi del Tribunale romano e le tempistiche delle aste
                  immobiliari nella Capitale.
                </p>
                <ul className="space-y-2 text-gray-500">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-emerald-600" />
                    <span>Opposizione alle procedure esecutive</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-emerald-600" />
                    <span>Sospensione delle aste immobiliari</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-emerald-600" />
                    <span>Contestazione di irregolarità procedurali</span>
                  </li>
                </ul>
                <p className="text-gray-500 md:text-lg/relaxed">
                  La nostra esperienza con le procedure esecutive romane ci permette di individuare rapidamente
                  eventuali irregolarità procedurali specifiche che possono essere utilizzate a tuo vantaggio.
                </p>
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700 mt-4">
                  <Link href="#contattaci">Richiedi consulenza</Link>
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Protezione immobiliare"
                  className="rounded-lg object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <div className="order-2 md:order-1 relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Ristrutturazione del debito"
                  className="rounded-lg object-cover shadow-xl"
                />
              </div>
              <div className="order-1 md:order-2 space-y-4">
                <div className="inline-flex items-center gap-2 rounded-md bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  <FileText className="h-4 w-4" />
                  <span>Ristrutturazione Debiti</span>
                </div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-emerald-800">
                  Piani di rientro sostenibili
                </h2>
                <p className="text-gray-500 md:text-lg/relaxed">
                  Analizziamo la tua situazione debitoria complessiva e negoziamo con i creditori e gli istituti bancari
                  operanti a Roma per ottenere condizioni più favorevoli, riducendo l'importo totale del debito,
                  abbassando i tassi di interesse o estendendo i tempi di pagamento per renderli sostenibili.
                  Consideriamo il valore reale del tuo immobile nel contesto del mercato romano, notoriamente tra i più
                  costosi d'Italia.
                </p>
                <ul className="space-y-2 text-gray-500">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-emerald-600" />
                    <span>Negoziazione con banche e finanziarie</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-emerald-600" />
                    <span>Riduzione del debito complessivo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-emerald-600" />
                    <span>Piani di rientro personalizzati</span>
                  </li>
                </ul>
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700 mt-4">
                  <Link href="#contattaci">Richiedi consulenza</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-md bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  <Home className="h-4 w-4" />
                  <span>Riacquisto Proprietà</span>
                </div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-emerald-800">
                  Soluzioni per mantenere la tua casa
                </h2>
                <p className="text-gray-500 md:text-lg/relaxed">
                  Anche quando la situazione sembra compromessa, abbiamo sviluppato strategie innovative che permettono
                  di mantenere o riacquistare la proprietà della tua casa a Roma, attraverso l'intervento di partner
                  finanziari o soluzioni di lease-back immobiliare. Conosciamo il valore degli immobili nei diversi
                  quartieri romani e possiamo sfruttare questa conoscenza per negoziare le migliori condizioni
                  possibili.
                </p>
                <ul className="space-y-2 text-gray-500">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-emerald-600" />
                    <span>Soluzioni di lease-back immobiliare</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-emerald-600" />
                    <span>Intervento di partner finanziari</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-emerald-600" />
                    <span>Riacquisto programmato dell'immobile</span>
                  </li>
                </ul>
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700 mt-4">
                  <Link href="#contattaci">Richiedi consulenza</Link>
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Riacquisto proprietà"
                  className="rounded-lg object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20 bg-emerald-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-emerald-800">
                  Servizi complementari
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Assistenza completa per proprietari di immobili a Roma
                </p>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Un supporto completo per ogni aspetto della tua situazione
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 mt-12">
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow-sm">
                <div className="rounded-full bg-emerald-100 p-3">
                  <Scale className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Consulenza Legale</h3>
                <p className="text-center text-sm text-gray-500">
                  Assistenza legale specializzata in diritto bancario e procedure esecutive immobiliari.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow-sm">
                <div className="rounded-full bg-emerald-100 p-3">
                  <Calculator className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Consulenza Finanziaria</h3>
                <p className="text-center text-sm text-gray-500">
                  Analisi della situazione finanziaria e sviluppo di strategie per il risanamento economico.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow-sm">
                <div className="rounded-full bg-emerald-100 p-3">
                  <Handshake className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Supporto Psicologico</h3>
                <p className="text-center text-sm text-gray-500">
                  Supporto per affrontare lo stress e l'ansia legati alle difficoltà finanziarie e abitative.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contattaci" className="py-12 md:py-16 lg:py-20 bg-emerald-700 text-white">
          <div className="container px-4 md:px-6 text-center">
            <div className="mx-auto max-w-3xl space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Non aspettare che sia troppo tardi</h2>
              <p className="text-emerald-100 md:text-xl/relaxed">
                Contattaci oggi stesso per una consulenza gratuita e senza impegno. I nostri esperti sono pronti ad
                aiutarti a trovare la soluzione più adatta alla tua situazione.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-emerald-100">
                  <Link href="/#contattaci">Richiedi consulenza gratuita</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-emerald-600">
                  <Link href="tel:800123456">Chiama 800 123 456</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
