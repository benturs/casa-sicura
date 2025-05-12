"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    comune: "Roma",
    quartiere: "",
    provincia: "RM",
    messaggio: "",
    privacy: false,
    marketing: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Qui andrebbe la logica per inviare i dati del form
    console.log("Form inviato:", formData)
    alert(
      "Grazie per averci contattato! Il team di Stop Pignoramento Casa Roma ti risponderà al più presto per una consulenza gratuita specializzata per il mercato immobiliare della Capitale.",
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="nome">Nome</Label>
          <Input
            id="nome"
            name="nome"
            placeholder="Inserisci il tuo nome"
            required
            value={formData.nome}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cognome">Cognome</Label>
          <Input
            id="cognome"
            name="cognome"
            placeholder="Inserisci il tuo cognome"
            required
            value={formData.cognome}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="La tua email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="telefono">Telefono</Label>
          <Input
            id="telefono"
            name="telefono"
            type="tel"
            placeholder="Il tuo numero di telefono"
            required
            value={formData.telefono}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="comune">Comune dell'immobile</Label>
        <Input
          id="comune"
          name="comune"
          placeholder="Comune in cui si trova l'immobile"
          required
          value={formData.comune}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="quartiere">Quartiere di Roma</Label>
        <Select onValueChange={(value) => handleSelectChange("quartiere", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Seleziona il quartiere" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="centro">Centro Storico</SelectItem>
            <SelectItem value="prati">Prati</SelectItem>
            <SelectItem value="trieste">Trieste</SelectItem>
            <SelectItem value="eur">EUR</SelectItem>
            <SelectItem value="monteverde">Monteverde</SelectItem>
            <SelectItem value="flaminio">Flaminio</SelectItem>
            <SelectItem value="sanlorenzo">San Lorenzo</SelectItem>
            <SelectItem value="testaccio">Testaccio</SelectItem>
            <SelectItem value="appio">Appio-Latino</SelectItem>
            <SelectItem value="altro">Altro quartiere</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="provincia">Provincia</Label>
        <Select onValueChange={(value) => handleSelectChange("provincia", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Seleziona la provincia" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="MI">Milano</SelectItem>
            <SelectItem value="RM">Roma</SelectItem>
            <SelectItem value="TO">Torino</SelectItem>
            <SelectItem value="NA">Napoli</SelectItem>
            <SelectItem value="FI">Firenze</SelectItem>
            <SelectItem value="BO">Bologna</SelectItem>
            <SelectItem value="PA">Palermo</SelectItem>
            <SelectItem value="GE">Genova</SelectItem>
            <SelectItem value="CT">Catania</SelectItem>
            <SelectItem value="BA">Bari</SelectItem>
            {/* Altre province italiane */}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="messaggio">Descrivi brevemente la tua situazione</Label>
        <Textarea
          id="messaggio"
          name="messaggio"
          placeholder="Raccontaci la tua situazione a Roma (quartiere, tipo di immobile, fase della procedura esecutiva...)..."
          rows={4}
          value={formData.messaggio}
          onChange={handleChange}
        />
      </div>
      <div className="space-y-2">
        <div className="flex items-start space-x-2">
          <Checkbox
            id="privacy"
            checked={formData.privacy}
            onCheckedChange={(checked) => handleCheckboxChange("privacy", checked as boolean)}
          />
          <Label htmlFor="privacy" className="text-xs leading-tight">
            Autorizzo il trattamento dei miei dati personali ai sensi del GDPR 2016/679 e del D.Lgs. 196/2003
          </Label>
        </div>
        <div className="flex items-start space-x-2">
          <Checkbox
            id="marketing"
            checked={formData.marketing}
            onCheckedChange={(checked) => handleCheckboxChange("marketing", checked as boolean)}
          />
          <Label htmlFor="marketing" className="text-xs leading-tight">
            Accetto di ricevere materiale informativo via email relativo ai servizi offerti
          </Label>
        </div>
      </div>
      <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
        Invia richiesta
      </Button>
    </form>
  )
}
