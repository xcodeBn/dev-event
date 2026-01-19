import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { events } from '@/lib/constants'
import BookingForm from '@/components/BookingForm'

// BookingForm is client-side; import using a path that will exist or can be added next

type Props = { params: { slug: string } }

export default function EventPage({ params }: Props) {
  const event = events.find((e) => e.slug === params.slug)
  if (!event) return notFound()

  return (
    <section id="event">
      <div className="header">
        <Link href="/">
          <p className="pill">← Back to events</p>
        </Link>

        <h2>{event.title}</h2>

        <div className="flex-row-gap-2">
          <Image src="/icons/pin.svg" alt="pin" width={16} height={16} />
          <p>{event.location}</p>
        </div>

        <div className="flex-row-gap-2">
          <Image src="/icons/calendar.svg" alt="calendar" width={16} height={16} />
          <p>{event.date} • {event.time}</p>
        </div>
      </div>

      <div className="details">
        <div className="content">
          <Image src={event.image} alt={event.title} width={1200} height={457} className="banner" />

          <p>{event.description}</p>

          <div className="agenda">
            <h3>Agenda</h3>
            <ul>
              <li>09:00 — Registration & coffee</li>
              <li>09:45 — Opening keynote</li>
              <li>11:00 — Breakout sessions & workshops</li>
              <li>13:00 — Lunch</li>
              <li>14:00 — Lightning talks</li>
              <li>17:30 — Closing panel & networking</li>
            </ul>
          </div>
        </div>

        <aside className="booking">
          <div className="signup-card">
            <h3>Reserve your spot</h3>
            <BookingForm eventTitle={event.title} />
          </div>
        </aside>
      </div>
    </section>
  )
}
