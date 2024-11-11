export async function getAPI(url) {
    try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error en la petición: ' + response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Hubo un problema con la solicitud:', error);
  }
  }