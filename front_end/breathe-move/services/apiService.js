const API_URL = 'http://localhost:3000'

export async function getAllBreathingTechniques() {
    const response = await fetch(`${API_URL}/techniques`)
    return await response.json();
}