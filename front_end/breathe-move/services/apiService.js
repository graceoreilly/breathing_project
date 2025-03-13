const API_URL = 'https://your-new-api-url.vercel.app';

export async function getAllBreathingTechniques() {
    const response = await fetch(`${API_URL}/techniques`)
    return await response.json();
}