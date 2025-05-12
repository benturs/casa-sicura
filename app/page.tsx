import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Shield, Users, FileText, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b sticky top-0 z-50 w-full bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-emerald-600" />
            <span className="text-xl font-bold text-emerald-700">Stop Pignoramento Casa</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/soluzioni" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              SOLUZIONI
            </Link>
            <Link href="/storie" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              STORIE DI SUCCESSO
            </Link>
            <Link href="/responsabilita" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              RESPONSABILITÀ SOCIALE
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              BLOG
            </Link>
            <Link href="/partner" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              PARTNER
            </Link>
            <Link href="/stampa" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              PRESS
            </Link>
          </nav>
          <Button asChild className="hidden md:flex bg-emerald-600 hover:bg-emerald-700">
            <Link href="#contattaci">Contattaci</Link>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-b from-emerald-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-emerald-800">
                  FERMA IL PIGNORAMENTO DELLA TUA CASA A ROMA E RICONQUISTA LA TRANQUILLITÀ
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stop Pignoramento Casa Roma ti offre soluzioni concrete e personalizzate per affrontare e risolvere
                  situazioni di difficoltà finanziaria che mettono a rischio la tua abitazione nella Capitale. Il nostro
                  team di esperti conosce a fondo le procedure esecutive del Tribunale di Roma.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                    <Link href="#contattaci">
                      Richiedi consulenza gratuita
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/come-funziona">Scopri come funziona</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Famiglia felice davanti a casa protetta"
                  className="rounded-lg object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-emerald-800">
                  Come possiamo aiutarti
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Offriamo soluzioni concrete per proteggere la tua casa e il tuo futuro
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 mt-12">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-emerald-100 p-3">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Protezione Immobiliare</h3>
                <p className="text-center text-sm text-gray-500">
                  Strategie legali e finanziarie specifiche per bloccare procedure esecutive e pignoramenti in corso
                  presso il Tribunale di Roma, con particolare attenzione alle normative locali.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-emerald-100 p-3">
                  <FileText className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Ristrutturazione Debiti</h3>
                <p className="text-center text-sm text-gray-500">
                  Piani personalizzati per rinegoziare i tuoi debiti con istituti di credito operanti a Roma e trovare
                  un equilibrio finanziario sostenibile, considerando il costo della vita nella Capitale.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-emerald-100 p-3">
                  <Home className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold">Riacquisto Proprietà</h3>
                <p className="text-center text-sm text-gray-500">
                  Soluzioni innovative per mantenere o riacquistare la tua casa a Roma anche dopo l'avvio di procedure
                  esecutive, sfruttando le opportunità del mercato immobiliare capitolino.
                </p>
              </div>
            </div>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed mt-4">
              Conosciamo in profondità le dinamiche del mercato immobiliare romano e le procedure del Tribunale Civile
              di Roma, garantendoti assistenza specializzata per il tuo caso.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20 bg-emerald-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700">
                  Il nostro approccio
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-emerald-800">
                  Un metodo efficace in 4 fasi
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-emerald-600 p-1 text-white">1</div>
                    <div>
                      <h3 className="font-bold">Analisi della situazione</h3>
                      <p className="text-gray-500">
                        Valutiamo attentamente la tua situazione finanziaria e legale per identificare le migliori
                        strategie.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-emerald-600 p-1 text-white">2</div>
                    <div>
                      <h3 className="font-bold">Piano d'azione personalizzato</h3>
                      <p className="text-gray-500">
                        Sviluppiamo un piano su misura per le tue esigenze specifiche e la tua situazione.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-emerald-600 p-1 text-white">3</div>
                    <div>
                      <h3 className="font-bold">Implementazione delle soluzioni</h3>
                      <p className="text-gray-500">
                        Il nostro team di esperti mette in atto le strategie legali e finanziarie necessarie.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-emerald-600 p-1 text-white">4</div>
                    <div>
                      <h3 className="font-bold">Monitoraggio e supporto continuo</h3>
                      <p className="text-gray-500">
                        Ti accompagniamo in ogni fase del processo fino alla completa risoluzione della situazione.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Consulente che spiega il piano d'azione"
                  className="rounded-lg object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-emerald-800">
                  Storie di successo
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Famiglie che hanno ritrovato serenità grazie alle nostre soluzioni
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <div className="flex flex-col space-y-3 rounded-lg border p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-emerald-600" />
                  <h3 className="font-bold">Famiglia Bianchi, Milano</h3>
                </div>
                <p className="text-sm text-gray-500">
                  "Stavamo per perdere il nostro appartamento nel quartiere Prati a causa di un debito che non
                  riuscivamo più a gestire. Stop Pignoramento Casa Roma ci ha aiutato a ristrutturare il debito e a
                  mantenere la nostra abitazione. Oggi viviamo sereni nella nostra casa nel cuore di Roma."
                </p>
              </div>
              <div className="flex flex-col space-y-3 rounded-lg border p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-emerald-600" />
                  <h3 className="font-bold">Marco R., Roma</h3>
                </div>
                <p className="text-sm text-gray-500">
                  "Dopo la perdita del lavoro, non riuscivo più a pagare il mutuo. Stop Pignoramento Casa ha bloccato la
                  procedura esecutiva e mi ha aiutato a trovare una soluzione sostenibile. Ho potuto mantenere la mia
                  casa."
                </p>
              </div>
              <div className="flex flex-col space-y-3 rounded-lg border p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-emerald-600" />
                  <h3 className="font-bold">Famiglia Rossi, Torino</h3>
                </div>
                <p className="text-sm text-gray-500">
                  "La nostra casa era già all'asta quando abbiamo contattato Stop Pignoramento Casa. Pensavamo fosse
                  troppo tardi, ma sono riusciti a intervenire e a trovare una soluzione che ci ha permesso di rimanere
                  nella nostra abitazione."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contattaci" className="py-12 md:py-16 lg:py-20 bg-emerald-700 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Richiedi una consulenza gratuita</h2>
                <p className="text-emerald-100 md:text-xl/relaxed">
                  Stai affrontando problemi di indebitamento o rischi di perdere la tua casa?
                </p>
                <p className="text-emerald-100">
                  Stop Pignoramento Casa è la soluzione per proteggere la tua abitazione da procedure esecutive e
                  pignoramenti, offrendoti un nuovo inizio.
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <Phone className="h-6 w-6 text-emerald-300" />
                  <span className="text-xl font-bold">800 123 456</span>
                </div>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-lg">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:gap-8 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-emerald-600" />
            <span className="text-lg font-bold text-emerald-700">Stop Pignoramento Casa</span>
          </div>
          <nav className="flex gap-4 md:gap-6 flex-wrap">
            <Link href="/privacy" className="text-xs md:text-sm text-gray-500 hover:underline">
              Privacy
            </Link>
            <Link href="/termini" className="text-xs md:text-sm text-gray-500 hover:underline">
              Termini e Condizioni
            </Link>
            <Link href="/cookie" className="text-xs md:text-sm text-gray-500 hover:underline">
              Cookie Policy
            </Link>
          </nav>
          <div className="md:ml-auto text-xs md:text-sm text-gray-500">
            © 2025 Stop Pignoramento Casa. Tutti i diritti riservati.
          </div>
        </div>
      </footer>
    </div>
  )
}
