import { IStates } from "@/types/states.type"

const CUSTOMER_API = "https://track.customer.io/api/v2/entity"

export const createCustomer = async (states: IStates) => {

  const { goal, company, work_style, work_schedule, organization, team_size, moral, actively_participate, team_conflicts_experince, stress_at_work,
    team_members_know_each_other_on_persoal_level, team_members_comfort, improve_team, create_step_challenge, participation_reward, pricing, free_trial,
    trial_discount, price_id, client_secret, customer_id, admin_detail } = states

  fetch(CUSTOMER_API, {
      method: "POST",
      headers: {
          'Content-Type': 'application/json',
          "Authorization": `Basic ${Buffer.from(process.env.NEXT_PUBLIC_CUSTOMER_IO_CREDENTIALS as string).toString('base64')}`
      },
      body: JSON.stringify({
          type: 'person',
          identifiers: {email: admin_detail.email},
          action: 'identify',
          attributes: {
            firstName: admin_detail.first_Name,
            lastName: admin_detail.last_Name,
            email: admin_detail.email,
            goal: goal,
            company: company,
            work_style: work_style,
            work_schedule: work_schedule,
            organization: organization,
            team_size: team_size,
            moral: moral,
            actively_participate: actively_participate,
            team_conflicts_experince: team_conflicts_experince,
            stress_at_work: stress_at_work,
            team_members_know_each_other_on_persoal_level: team_members_know_each_other_on_persoal_level,
            team_members_comfort: team_members_comfort,
            improve_team: improve_team,
            challenge_title: create_step_challenge.Challenge_title,
            start_date: create_step_challenge.selectedDate.startDate,
            end_date: create_step_challenge.selectedDate.endDate,
            participation_reward: participation_reward,
            pricing: pricing,
            free_trial: free_trial,
            trial_discount: trial_discount,
            price_id: price_id,
            client_secret: client_secret,
            customer_id: customer_id,
            isPaying: false
          },
      }),
  })
}

export const handlePaying = async (email: string, customer_id: string, client_secret: string, price_id: string, pricing: string) => {
  await fetch(CUSTOMER_API, {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
        "Authorization": `Basic ${Buffer.from(process.env.NEXT_PUBLIC_CUSTOMER_IO_CREDENTIALS as string).toString('base64')}`
    },
    body: JSON.stringify({
        type: 'person',
        identifiers: { email: email },
        action: 'identify',
        attributes: {
          customer_id: customer_id,
          client_secret: client_secret,
          price_id: price_id,
          pricing: pricing,
          isPaying: true
        }
    }),
  })
}
