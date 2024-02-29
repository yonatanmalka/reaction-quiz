import { sha256 } from "js-sha256";
import * as fbq from "../lib/fbpixel";

import { IStates } from "@/types/states.type";

const createSendingData = async (eventId: string, state: IStates, event: string) => {

  return {
    "event_name": event,
    "event_id": eventId,
    "event_time": Math.floor(Date.now() / 1000),
    "action_source": "website",
    "event_source_url": window.location.href,
    "user_data": {
      "fn": [ sha256(state.admin_detail.first_Name) ],
      "ln": [ sha256(state.admin_detail.last_Name) ],
      "em": [ sha256(state.admin_detail.email) ],
      "client_user_agent": navigator.userAgent,
      "client_ip_address": "0.0.0.0",
    },
    "custom_data": {
      "currency": "USD",
      "value": state.pricing || "no data"
    }
  }
}

export const triggerFacebookPixel = async (state: IStates, event: string) => {

  const additionalData = {}

  const eventId: string = crypto.randomUUID()

  const sendData = await createSendingData(eventId, state, event)

  fbq.event(event, additionalData, {eventId: eventId})

  fetch(`https://graph.facebook.com/v18.0/${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}/events?access_token=${process.env.NEXT_PUBLIC_META_TOKEN}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "data": [ sendData ]
    })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
}
