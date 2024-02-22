type AdminDetail = {
  email: string,
  first_Name: string,
  last_Name: string
}

type SelectedDate = {
  startDate: any,
  endDate: any
}

type CreateStepChallenge = {
  Challenge_title: string,
  selectedDate: SelectedDate
}

export interface IStates {
  goal: string | null,
  company: string | null,
  work_style: string | null,
  work_schedule: string | null,
  organization: string | null,
  team_size: string | null,
  moral: string | null,
  actively_participate: string | null,
  team_conflicts_experince: string | null,
  stress_at_work: string | null,
  team_members_know_each_other_on_persoal_level: string | null,
  team_members_comfort: string | null,
  improve_team: string[],
  competition_type: string,
  members_goal: string,
  challenge_goal: string,
  create_step_challenge: CreateStepChallenge,
  participation_reward: string | null,
  admin_detail: AdminDetail,
  pricing: string,
  free_trial: boolean,
  trial_discount: boolean,
  price_id: string,
  client_secret: string,
  customer_id: string
}

export interface IAttributes {
  goal: string | null,
  company: string | null,
  work_style: string | null,
  work_schedule: string | null,
  organization: string | null,
  team_size: string | null,
  moral: string | null,
  actively_participate: string | null,
  team_conflicts_experince: string | null,
  stress_at_work: string | null,
  team_members_know_each_other_on_persoal_level: string | null,
  team_members_comfort: string | null,
  improve_team: string[],
  challenge_title: string | null,
  end_date: any,
  start_date: any,
  participation_reward: string | null,
  email: string | null,
  firstName: string | null,
  lastName: string | null
  pricing: string,
  free_trial: boolean,
  trial_discount: boolean,
  price_id: string,
  client_secret: string,
  customer_id: string
}
