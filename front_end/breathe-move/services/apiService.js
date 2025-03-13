const API_URL = 'https://breathing-project-ixl3l4wn1-graceoreillys-projects.vercel.app'

export async function getAllBreathingTechniques() {
    const response = await fetch(`${API_URL}/techniques`)
    return await response.json();
}