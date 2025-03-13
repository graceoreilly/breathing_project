const API_URL = "https://breathing-project.onrender.com" ;

export async function getAllBreathingTechniques() {
  try {
    const response = await fetch(`${API_URL}/techniques`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data || [];
  } catch (error) {
    console.error("API fetch error", error);
    return [];
  }
}
