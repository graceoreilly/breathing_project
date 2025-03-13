const API_URL = 'https://test-api-eta-ten.vercel.app';

export async function getAllBreathingTechniques() {
    const response = await fetch(`${API_URL}/techniques`)
    return await response.json();
}