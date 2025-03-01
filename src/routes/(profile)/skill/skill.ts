import IconBrandAws from '@tabler/icons-svelte/IconBrandAws.svelte';
import IconBrandCloudflare from '@tabler/icons-svelte/IconBrandCloudflare.svelte';
import IconBrandDjango from '@tabler/icons-svelte/IconBrandDjango.svelte';
import IconBrandDocker from '@tabler/icons-svelte/IconBrandDocker.svelte';
import IconBrandGit from '@tabler/icons-svelte/IconBrandGit.svelte';
import IconBrandGolang from '@tabler/icons-svelte/IconBrandGolang.svelte';
import IconBrandGraphql from '@tabler/icons-svelte/IconBrandGraphql.svelte';
import IconBrandJavascript from '@tabler/icons-svelte/IconBrandJavascript.svelte';
import IconBrandMysql from '@tabler/icons-svelte/IconBrandMysql.svelte';
import IconBrandNextjs from '@tabler/icons-svelte/IconBrandNextjs.svelte';
import IconBrandPython from '@tabler/icons-svelte/IconBrandPython.svelte';
import IconBrandReact from '@tabler/icons-svelte/IconBrandReact.svelte';
import IconBrandRust from '@tabler/icons-svelte/IconBrandRust.svelte';
import IconBrandSvelte from '@tabler/icons-svelte/IconBrandSvelte.svelte';
import IconBrandTypescript from '@tabler/icons-svelte/IconBrandTypescript.svelte';
import IconBrandVercel from '@tabler/icons-svelte/IconBrandVercel.svelte';
import IconCode from '@tabler/icons-svelte/IconCode.svelte';
import IconDatabase from '@tabler/icons-svelte/IconDatabase.svelte';
import IconDeviceDesktop from '@tabler/icons-svelte/IconDeviceDesktop.svelte';
import IconServer from '@tabler/icons-svelte/IconServer.svelte';

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
		icon: IconBrandTypescript,
		skill_type: 'lang',
		month: 46
	},
	{
		skill_name: 'Javascript',
		rate: 3,
		icon: IconBrandJavascript,
		skill_type: 'lang',
		month: 60
	},
	{
		skill_name: 'Python',
		rate: 5,
		icon: IconBrandPython,
		skill_type: 'lang',
		month: 45
	},
	{
		skill_name: 'Ruby',
		rate: 2,
		icon: IconCode,
		skill_type: 'lang',
		month: 6
	},
	{
		skill_name: 'C#',
		rate: 2,
		icon: IconCode,
		skill_type: 'lang',
		month: 12
	},
	{
		skill_name: 'React',
		rate: 5,
		icon: IconBrandReact,
		skill_type: 'front',
		month: 46
	},
	{
		skill_name: 'Express',
		rate: 3,
		icon: IconServer,
		skill_type: 'backend',
		month: 20
	},
	{
		skill_name: 'Django',
		rate: 4,
		icon: IconBrandDjango,
		skill_type: 'backend',
		month: 40
	},
	{
		skill_name: 'Ruby on Rails',
		rate: 2,
		icon: IconCode,
		skill_type: 'front',
		month: 6
	},
	{
		skill_name: 'GraphQL',
		rate: 3,
		icon: IconBrandGraphql,
		skill_type: 'backend',
		month: 20
	},
	{
		skill_name: 'AWS',
		rate: 3,
		icon: IconBrandAws,
		skill_type: 'infra',
		month: 40
	},
	{
		skill_name: 'MySQL',
		rate: 3,
		icon: IconBrandMysql,
		skill_type: 'infra',
		month: 46
	},
	{
		skill_name: 'DynamoDB',
		rate: 3,
		icon: IconDatabase,
		skill_type: 'infra',
		month: 20
	},
	{
		skill_name: 'Hasura',
		rate: 3,
		icon: IconServer,
		skill_type: 'infra',
		month: 12
	},
	{
		skill_name: 'Git',
		rate: 4,
		icon: IconBrandGit,
		skill_type: 'other',
		month: 42
	},
	{
		skill_name: 'Docker',
		rate: 4,
		icon: IconBrandDocker,
		skill_type: 'other',
		month: 42
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
		icon: IconBrandRust,
		skill_type: 'lang',
		month: 2
	},
	{
		skill_name: 'Tauri',
		rate: 3,
		icon: IconDeviceDesktop,
		skill_type: 'lang',
		month: 2
	},
	{
		skill_name: 'Go',
		rate: 2,
		icon: IconBrandGolang,
		skill_type: 'lang',
		month: 1
	},
	{
		skill_name: 'Next.js',
		rate: 3,
		icon: IconBrandNextjs,
		skill_type: 'front',
		month: 17
	},
	{
		skill_name: 'Svelte',
		rate: 3,
		icon: IconBrandSvelte,
		skill_type: 'front',
		month: 1
	},
	{
		skill_name: 'Vercel',
		rate: 3,
		icon: IconBrandVercel,
		skill_type: 'infra',
		month: 12
	},
	{
		skill_name: 'Cloudflare',
		rate: 1,
		icon: IconBrandCloudflare,
		skill_type: 'infra',
		month: 6
	}
];
