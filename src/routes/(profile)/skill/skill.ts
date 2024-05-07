import IconBrandReact from '@tabler/icons-svelte/IconBrandReact.svelte';

import type { SkillType } from '$lib/type';

// TODO: 別に移植
export const work_skills: {
	skill_name: string;
	rate: number;
	icon: any;
	skill_type: SkillType;
	month: number;
}[] = [
	{
		skill_name: 'Typescript',
		rate: 5,
		icon: IconBrandReact,
		skill_type: 'lang',
		month: 40
	},
	{
		skill_name: 'Javascript',
		rate: 3,
		icon: IconBrandReact,
		skill_type: 'lang',
		month: 60
	},
	{
		skill_name: 'Python',
		rate: 5,
		icon: IconBrandReact,
		skill_type: 'lang',
		month: 45
	},
	{
		skill_name: 'C#',
		rate: 2,
		icon: IconBrandReact,
		skill_type: 'lang',
		month: 12
	},
	{
		skill_name: 'VB.net',
		rate: 2,
		icon: IconBrandReact,
		skill_type: 'lang',
		month: 12
	},
	{
		skill_name: 'React',
		rate: 5,
		icon: IconBrandReact,
		skill_type: 'front',
		month: 40
	},
	{
		skill_name: 'Express',
		rate: 3,
		icon: IconBrandReact,
		skill_type: 'backend',
		month: 20
	},
	{
		skill_name: 'Django',
		rate: 4,
		icon: IconBrandReact,
		skill_type: 'backend',
		month: 40
	},
	{
		skill_name: 'GraphQL',
		rate: 3,
		icon: IconBrandReact,
		skill_type: 'backend',
		month: 20
	},
	{
		skill_name: 'AWS',
		rate: 3,
		icon: IconBrandReact,
		skill_type: 'infra',
		month: 40
	},
	{
		skill_name: 'MySQL',
		rate: 3,
		icon: IconBrandReact,
		skill_type: 'infra',
		month: 40
	},
	{
		skill_name: 'DynamoDB',
		rate: 3,
		icon: IconBrandReact,
		skill_type: 'infra',
		month: 20
	},
	{
		skill_name: 'Hasura',
		rate: 3,
		icon: IconBrandReact,
		skill_type: 'infra',
		month: 12
	},
	{
		skill_name: 'Git',
		rate: 4,
		icon: IconBrandReact,
		skill_type: 'other',
		month: 20
	},
	{
		skill_name: 'Docker',
		rate: 4,
		icon: IconBrandReact,
		skill_type: 'other',
		month: 20
	}
];

export const private_skills: {
	skill_name: string;
	rate: number;
	icon: any;
	skill_type: SkillType;
	month: number;
}[] = [
	{
		skill_name: 'Rust',
		rate: 2,
		icon: IconBrandReact,
		skill_type: 'lang',
		month: 2
	},
	{
		skill_name: 'Tauri',
		rate: 3,
		icon: IconBrandReact,
		skill_type: 'lang',
		month: 2
	},
	{
		skill_name: 'Next.js',
		rate: 3,
		icon: IconBrandReact,
		skill_type: 'front',
		month: 8
	},
	{
		skill_name: 'svelte',
		rate: 3,
		icon: IconBrandReact,
		skill_type: 'front',
		month: 1
	},
	{
		skill_name: 'vercel',
		rate: 3,
		icon: IconBrandReact,
		skill_type: 'infra',
		month: 8
	}
];
