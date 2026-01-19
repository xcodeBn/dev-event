"use client"

import React, { useState } from 'react'

interface Props {
  eventTitle: string
}

export default function BookingForm({ eventTitle }: Props) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // demo-only: show confirmation state
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col gap-4">
        <p className="text-light-100">Thanks — you've reserved a spot for {eventTitle}.</p>
        <p className="text-light-200">We'll contact you at <strong>{email || 'your email'}</strong> (demo).</p>
      </div>
    )
  }

  return (
    <form id="book-event" onSubmit={handleSubmit}>
      <div>
        <label className="text-light-100">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          required
        />
      </div>

      <button type="submit">Reserve spot</button>
    </form>
  )
}
