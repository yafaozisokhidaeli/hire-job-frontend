import axios from "axios"

export default async function Peler() {
  try {
    const result = await axios.get(`http://localhost:8080/worker`);
    const detail = JSON.parse(JSON.stringify(result.data.data)) || []

    console.log(detail);
    return detail;

  } catch (error) {
    console.log("error", error)
  }
}
