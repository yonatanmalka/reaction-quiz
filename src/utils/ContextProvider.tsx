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
  competition_type: '',
  members_goal: '',
  challenge_goal: '',
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

export const AppContext = createContext<{
    state: IStates,
    setState: React.Dispatch<React.SetStateAction<IStates>>,
    currentStep: number,
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>
    getProgressBarWidth: () => number,
    handleNextStep: () => void,
    shouldRenderComponent: boolean,
    ProgressComponent: boolean
  }>({
  state: defaultStates,
  setState: () => {},
  currentStep: 1,
  setCurrentStep: () => {},
  getProgressBarWidth: () => 1,
  handleNextStep: () => {},
  shouldRenderComponent: false,
  ProgressComponent: false,
})

function Provider({ children } : { children: React.ReactNode }) {

  const [state, setState] = useState(defaultStates)
  const [currentStep, setCurrentStep] = useState<number>(1);

  const getProgressBarWidth = () => {
    return ((currentStep - 1) / 23) * 100;
  };

  const handleNextStep = () => {
    setTimeout(() => {
        setCurrentStep((prevStep: any) => prevStep + 1);
    }, 1000);
  };

  const shouldRenderComponent = currentStep !== 1 && currentStep !== 27;
  const ProgressComponent = ![1, 7, 15, 16, 17, 25, 26, 27].includes(currentStep)

  return (
    <AppContext.Provider value={{ state, setState, currentStep, setCurrentStep, getProgressBarWidth, handleNextStep, shouldRenderComponent, ProgressComponent }}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;
