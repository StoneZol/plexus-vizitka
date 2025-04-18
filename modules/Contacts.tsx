import LightDisk from './LightDisk'
import { Phone } from './Icons/Phone'
import { TG } from './Icons/TG'
import { Mail } from './Icons/Mail'
import { Whatsapp } from './Icons/WhatsApp'
import { metadata } from './../app/layout';

export default function Contacts() {
  return (
    <div className='contacts'>        
        <LightDisk ariaLabel='Телефон' link='tel:+79604934259' fillColor="#ff7d03"><Phone/></LightDisk>
        <LightDisk ariaLabel='ТГ' link='https://t.me/nickplexus' fillColor="#229ED9"><TG/></LightDisk>
        <LightDisk ariaLabel='Почта' link='mailto:nickplexus@gmail.com' fillColor="white"><Mail/></LightDisk>
        <LightDisk ariaLabel='Whatsapp' link='https://wa.me/79604934259' fillColor="#25D366"><Whatsapp/></LightDisk>
    </div>
  )
}
