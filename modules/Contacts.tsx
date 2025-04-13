import React from 'react'
import LightDisk from './LightDisk'
import { Phone } from './Icons/Phone'
import { TG } from './Icons/TG'
import { Mail } from './Icons/Mail'
import { Whatsapp } from './Icons/WhatsApp'

export default function Contacts() {
  return (
    <div className='contacts'>        
        <LightDisk link='tel:+79604934259' fillColor="#ff7d03"><Phone/></LightDisk>
        <LightDisk link='https://t.me/nickplexus' fillColor="#229ED9"><TG/></LightDisk>
        <LightDisk link='mailto:nickplexus@gmail.com' fillColor="white"><Mail/></LightDisk>
        <LightDisk link='https://wa.me/79604934259' fillColor="#25D366"><Whatsapp/></LightDisk>
    </div>
  )
}
