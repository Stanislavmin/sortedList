import { api } from "../constans/api-endpoints.constants";

export async function fetchPersonList() {
  try {
    let data = await fetch(api.person);
    return await data.json().then((data) => {
      data = JSON.stringify(data.personlista);
    });
  } catch (e) {
    console.log("error fetching person list");
  }
}
