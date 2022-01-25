export const getCharacters =  async () => {
    const res = await fetch('https://thronesapi.com/api/v2/Characters');
    const data = await res.json();
    return data;
}