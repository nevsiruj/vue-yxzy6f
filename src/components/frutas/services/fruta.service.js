export class FrutaService {
  constructor() {}

  async getFrutas() {
    try {
      const response = await fetch('https://localhost:44308/api/Fruta');
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default FrutaService;
