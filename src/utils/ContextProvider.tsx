"use client"

import { IStates } from "@/types/states.type";
import { createContext, useState } from "react"

export const defaultStates: IStates = {
  goal: '',
  company: '',
  work_style: '',
  work_schedule: '',
  organization: '',
  team_size: '',
  moral: '',
  actively_participate: '',
  team_conflicts_experince: '',
  stress_at_work: '',
  team_members_know_each_other_on_persoal_level: '',
  team_members_comfort: '',
  improve_team: [],
  create_step_challenge: {
    Challenge_title: '',
    selectedDate: {
      startDate: null,
      endDate: null
    }
  },
  participation_reward: '',
  admin_detail: {
    email: '',
    first_Name: '',
    last_Name: ''
  },
  pricing: '',
  free_trial: false,
  trial_discount: true,
  price_id: '',
  client_secret: '',
  customer_id: ''
};

export const AppContext = createContext<{state: IStates, setState: React.Dispatch<React.SetStateAction<IStates>>}>({
  state: defaultStates,
  setState: () => {}
})

function Provider({ children } : { children: React.ReactNode }) {

  const [state, setState] = useState(defaultStates)

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;
