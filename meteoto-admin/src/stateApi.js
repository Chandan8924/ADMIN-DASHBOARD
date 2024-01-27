export const getStates = async(countrycode) => {
    return (
        await fetch(`https://api.countrystatecity.in/v1/countries/IN/states`, {
            method:'GET',
            headers:{
                "X-CSCAPI-KEY":"M1NUNkJuRnZqZjB6N0NpWnE0TDV4R2dPNTEwNDhTOXRYQVZFdm5xcQ=="
            }
        })
        .then(response => {return response.json()})
        .catch(err => console.log(err))
    )
}