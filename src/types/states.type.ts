type AdminDetail = {
  email: string,
  first_Name: string,
  last_Name: string
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
  create_step_challenge: {},
  participation_reward: string | null,
  admin_detail: AdminDetail,
  pricing: string,
  free_trial: boolean,
  trial_discount: boolean,
  price_id: string,
  client_secret: string,
  customer_id: string
}
