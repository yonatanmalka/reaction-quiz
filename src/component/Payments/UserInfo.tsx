"use client"

import { IAttributes } from "@/types/states.type";
import React from "react";
import UserInfoCard from "./UserInfoCard";

function UserInfo({ attributes } : { attributes: any }) {

  const startDate = new Date(attributes.start_date)
  const endDate = new Date(attributes.end_date)
  const duration = ((((endDate.getTime() - startDate.getTime()) / 1000) / 60) / 60) / 24
  const start_date = startDate.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
});

  return (
    <div className="flex justify-center gap-6 py-6">
      <div className="flex-col flex items-start gap-3">
        <UserInfoCard heading={'Goal'} img={'/images/compass.png'} text={attributes.goal as string}/>
        <UserInfoCard heading={'Team-size'} img={'/images/team.png'} text={`${attributes.team_size} members`}/>
      </div>
      <div className="flex-col flex items-start gap-3">
        <UserInfoCard heading={'Start date'} img={'/images/clock.png'} text={`${start_date}`}/>
        <UserInfoCard heading={'Duration'} img={'/images/arrow.png'} text={`${duration} days`}/>
      </div>
  </div>
  );
}

export default UserInfo;
