import { portfolio } from "~/portfolio.config";
export type SocialProfileData = {name:string;handle:string;avatar:string;bio:string;location:string;banner?:boolean;stats:{value:string|number;label:string}[];stale:boolean;};
export async function getSocialProfiles(): Promise<Record<string,SocialProfileData>> {
 const common = {name:portfolio.name,avatar:"/abdullah-profile.jpg",bio:portfolio.description,location:portfolio.location,stats:[],stale:false};
 return {GitHub:{...common,handle:portfolio.handles.github},LinkedIn:{...common,handle:portfolio.handles.linkedin},LeetCode:{...common,handle:portfolio.handles.leetcode}};
}
