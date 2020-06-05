const headers: HeadersInit = {
  'Accept': 'application/json',
  'Content-Type': 'application/json;charset=UTF-8',
  'Access-Control-Allow-Origin' : 'http://localhost:3000',
  'Access-Control-Request-Method' : 'POST'
}
export async function post<T>(taskParam: any, api:string): Promise<T> {
  const url = 'http://localhost:5000/'+api
  const opts: RequestInit = {
    method: 'POST',
    mode: 'cors',
    headers,
    body: JSON.stringify(taskParam),
  };
  return fetch(url, opts)
  .then(response=> {
    if(!response.ok){
      throw new Error(response.statusText)
    }
    return response.json() as Promise<T>
  })
}
export async function get<T>(api:string): Promise<T> {
  const url = 'http://localhost:5000/'+api;
  const opts: RequestInit = {
    method: 'GET',
    mode: 'cors',
    headers,
  };
  return fetch(url, opts)
  .then(response=> {
    if(!response.ok){
      throw new Error(response.statusText)
    }
    return response.json() as Promise<T>
  })
}
