import { api } from "services/api"

export const getAdvantagesList = async () => {
	const response = await api.get("/presentations")
	if (!response.data.advantages) {
		throw new Error("Advantages not found")
	}
	return response.data.advantages
}

export const getAttemptsList = async () => {
	const response = await api.get("/presentations")
	if (!response.data.attempts) {
		throw new Error("Attempts not found")
	}
	return response.data.attempts
}

export const getCampaignsList = async () => {
	const response = await api.get("/campaigns")
	if (!response.data.listBenefits) {
		throw new Error("Campaigns not found")
	}
	return response.data.listBenefits
}

export const getPlansList = async () => {
	const response = await api.get("/plans")
	if (!response.data.listPlans) {
		throw new Error("Plans not found")
	}
	return response.data.listPlans
}

export const getServicesList = async () => {
	const response = await api.get("/services")
	if (!response.data.services) {
		throw new Error("Services not found")
	}
	return response.data.services
}

export const getVlogsList = async () => {
	const response = await api.get("/marketings")
	if (!response.data.vlogsList) {
		throw new Error("Vlogs not found")
	}
	return response.data.vlogsList
}
