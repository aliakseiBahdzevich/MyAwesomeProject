import axios from "axios"

export const getPersons = async(p: number) => {
    const res = await axios.get('https://rickandmortyapi.com/api/character/?page='+p.toString())
    return res.data.results
}





























function setPage(arg0: number) {
    throw new Error("Function not implemented.");
}

